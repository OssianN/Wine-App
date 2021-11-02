const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const validateRegisterInput = require('../validation/register')
const validateLoginInput = require('../validation/login')
const UserDataBase = require('../mongoDB/user-schema')

const updateJwt = (res, payload) => {
  jwt.sign(
    payload,
    keys.secretOrKey,
    {
      expiresIn: 31556926, // 1 year in seconds
    },
    (err, token) => {
      res.json({
        success: true,
        token: 'Bearer ' + token,
      })
    }
  )
}

router.post('/register', (req, res) => {
  const { name, email, password } = req.body
  const { errors, isValid } = validateRegisterInput(req.body)

  if (!isValid) {
    res.status(400).json(errors)
    return
  }

  UserDataBase.findOne({ email }).then(user => {
    if (user) {
      res.status(400).json({ email: 'Email already exists' })
      return
    }

    const newUser = new UserDataBase({
      name,
      email,
      password,
      wineList: [],
    })
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err
        newUser.password = hash
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.error(err))
      })
    })
  })
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  const { errors, isValid } = validateLoginInput(req.body)
  if (!isValid) {
    res.status(400).json(errors)
    return
  }

  UserDataBase.findOne({ email }).then(user => {
    if (!user) {
      res.status(404).json({ emailnotfound: 'Email not found' })
      return
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) {
        res.status(400).json({ passwordincorrect: 'Password incorrect' })
        return
      }

      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        wineList: user.wineList,
        columns: user.columns || null,
        shelves: user.shelves || null,
      }
      updateJwt(res, payload)
      return
    })
  })
})

router.post('/addStorage', async (req, res) => {
  try {
    const { email, columns, shelves } = req.body
    const user = await UserDataBase.findOne({ email })
    await user.updateOne({ columns, shelves })
    const payload = {
      ...user._doc,
      columns,
      shelves,
    }
    updateJwt(res, payload)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/addWine', async (req, res) => {
  try {
    const { email, _id } = req.body
    const user = await UserDataBase.findOne({ email })
    const wineList = await user.wineList

    if (wineList.some(wine => wine === _id)) {
      res.status(200).send()
      return
    }

    wineList.push(_id)
    await user.updateOne({ wineList })
    const payload = {
      ...user._doc,
      wineList,
    }
    updateJwt(res, payload)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete('/deleteWine', async (req, res) => {
  try {
    const { _id, email } = req.body
    const user = await UserDataBase.findOne({ email })
    const wineList = await user.wineList
    const newList = wineList.filter(wine => wine !== _id)
    await user.updateOne({ wineList: newList })
    const payload = {
      ...user._doc,
      wineList: newList,
    }
    updateJwt(res, payload)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router
