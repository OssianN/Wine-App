import { useEffect, useState } from 'react';
import axios from 'axios';
import WineGrid from '../wineGrid/WineGrid';
import AddWine from '../wineForm/AddWine';
import EditWine from '../wineForm/EditWine';
import MainHeader from '../header/MainHeader';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setWineArr } from '../../actions/wineActions'
import Settings from '../header/Settings';
import InitialSetup from '../header/InitialSetup';
import Hamburger from '../header/Hamburger';
import '../../App.css';

const Dashboard = () => {
  const [position, setPosition] = useState(null);
  const [updateOnPost, setUpdateOnPost] = useState(0);
  const [showAddModal, setShowAddModal] = useState({display: 'none'});
  const [showEditModal, setShowEditModal] = useState({display: 'none'});
  const [pickedCard, setPickedCard] = useState({});
  const [titleValue, setTitleValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [checkedValue, setCheckedValue] = useState(false);
  const [searchArr, setSearchArr] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const getWines = async () => {
      try {
        const response = await axios.post('/wines/getUserWines', { wineList: user.wineList });
        const data = response.data;
        dispatch(setWineArr(data));
      } catch (err) {
        console.error(err, 'getWines error')
      }
    }
    getWines();
  }, [dispatch, user.wineList]);

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
  });

  if (!user.columns || !user.shelves) {
    return <InitialSetup />
  } else {
    return (
      <div className="dashboard">
        <Hamburger showSettings={showSettings} setShowSettings={setShowSettings} />
        <Settings showSettings={showSettings} setShowSettings={setShowSettings} />
        <MainHeader
          setSearchArr={setSearchArr}
          searchValue={searchValue}
          setSearchValue={setSearchValue} />
        <h1 className="header">This is the wine we whine about</h1>
        <AddWine
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
          setPosition={setPosition}
          updateOnPost={updateOnPost}
          setUpdateOnPost={setUpdateOnPost}
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          setPickedCard={setPickedCard}
          searchArr={searchArr}
          searchValue={searchValue}
        />
      </div>
    );
  }
}

export default Dashboard;
