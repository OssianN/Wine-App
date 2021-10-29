import axios from 'axios'

export const updateDatabase = async data => {
  try {
    return await axios.put('/wines', data)
  } catch (err) {
    alert('A server error occured.', err)
    console.error(err)
  }
}
