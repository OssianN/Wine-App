import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import WineGrid from './components/wineGrid/WineGrid';
import AddWine from './components/wineForm/AddWine';
import EditWine from './components/wineForm/EditWine';

function App() {
  const [cardArr, setCardArr] = useState();
  const [position, setPosition] = useState(null);
  const [updateOnPost, setUpdateOnPost] = useState(0);
  const [showAddModal, setShowAddModal] = useState({display: 'none'});
  const [showEditModal, setShowEditModal] = useState({display: 'none'});
  const [pickedCard, setPickedCard] = useState({});

  const [titleValue, setTitleValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [checkedValue, setCheckedValue] = useState(false);

  const getWines = async () => {
    try {
      const response = await axios.get('/wines');
      const data = await response.data;
      setCardArr(data);
    } catch (err) {
      console.error(err, 'getWines error')
    }
  }

  useEffect(() => {
    getWines();
  }, [updateOnPost]);

  return (
    <div className="App">
      <h1 className="header">This is the wine we whine about</h1>
      <AddWine
        setCardArr={setCardArr}
        position={position}
        updateOnPost={updateOnPost}
        setUpdateOnPost={setUpdateOnPost}
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        titleValue={titleValue}
        setTitleValue={setTitleValue}
        countryValue={countryValue}
        setCountryValue={setCountryValue}
        yearValue={yearValue}
        setYearValue={setYearValue}
        checkedValue={checkedValue}
        setCheckedValue={setCheckedValue}
      />
      <EditWine
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        updateOnPost={updateOnPost}
        setUpdateOnPost={setUpdateOnPost}
        position={position}
        pickedCard={pickedCard}
        titleValue={titleValue}
        setTitleValue={setTitleValue}
        countryValue={countryValue}
        setCountryValue={setCountryValue}
        yearValue={yearValue}
        setYearValue={setYearValue}
        checkedValue={checkedValue}
        setCheckedValue={setCheckedValue}
      />
      <WineGrid
        cardArr={cardArr}
        setCardArr={setCardArr}
        setPosition={setPosition}
        updateOnPost={updateOnPost}
        setUpdateOnPost={setUpdateOnPost}
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        setPickedCard={setPickedCard}
      />
    </div>
  );
}

export default App;
