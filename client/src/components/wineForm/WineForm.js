import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteButton from './DeleteButton';
import { setPickedWine } from '../../actions/setPickedWine';
import { setKeepForm } from '../../actions/setKeepForm';

const WineForm = (props) => {
  const dispatch = useDispatch();
  const titleInput = useRef(null);
  const yearInput = useRef(null);
  const [areYouSure, setAreYouSure] = useState(false);
  const pickedWine = useSelector(state => state.pickedWine)
  const keepForm = useSelector(state => state.keepForm);
  const [inputValue, setInputValue] = useState({ ...pickedWine })

  const isValidateInput = () => {
    if(!inputValue.title) {
      return { isValid: false, input: titleInput };
    }
    if (isNaN(inputValue.year)) {
      return { isValid: false, input: yearInput };
    };
    return { isValid: true };
  };

  const saveOrClearForm = () => {
    if (!keepForm) {
      const initialState = { title: '', year: '', price: '' }
      setInputValue(initialState);
      dispatch(setPickedWine(initialState))
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { isValid, input } = isValidateInput();
    if (!isValid) {
      return input.current.focus();
    }
    props.method({
      ...pickedWine,
      ...inputValue
    });
    props.show({display: 'none'});
    setAreYouSure(false);
    saveOrClearForm();
  };

  const handleInputValueChange = e => {
    const name = e.target.name;
    setInputValue({
      ...inputValue,
      [name]: e.target.value,
    })
  }

  const handleCheckedKeepForm = () => {
    dispatch(setKeepForm(!keepForm));
  }

  const cancel = () => {
    saveOrClearForm();
    setAreYouSure(false);
    props.show({display: 'none'});
  };

  const focus = () => {
    titleInput.current.focus();
  };

  useEffect(() => setInputValue({ ...pickedWine }), [pickedWine])

  useEffect(() => {
    focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className='wineForm'>
      <button type='button' onClick={cancel} className='cancelButton' >&#10005;</button>
      <label htmlFor='newWineName'>Name</label>
      <input ref={titleInput} value={inputValue.title} onChange={handleInputValueChange} name='title' type='text' />
      <label htmlFor='newWineDesc'>Year</label>
      <input ref={yearInput} value={inputValue.year} onChange={handleInputValueChange} name='year' type='text' />
      <label htmlFor='newWineCountry'>Price</label>
      <input value={inputValue.price} onChange={handleInputValueChange} name='price' type='text' />
      <button type='submit' className="btn--enforced btn--form-submit" style={{display: areYouSure ? 'none' : 'block'}}>
        {props.buttonName}
      </button>
      <DeleteButton
        buttonName={props.buttonName}
        areYouSure={areYouSure}
        setAreYouSure={setAreYouSure}
        setShowEditModal={props.setShowEditModal}
        saveOrClearForm={saveOrClearForm} />
      <div className='save-form'>
        <input value={keepForm} onChange={handleCheckedKeepForm} type='checkbox' className={`save-form__checkbox ${keepForm}`}></input>
        <label htmlFor='saveForm'>keep form info</label>
      </div>
    </form>
  )
}

export default WineForm;