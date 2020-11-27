import { useEffect, useState } from 'react';
import './App.css';
import WineGrid from './components/wineGrid/WineGrid';
import AddWine from './components/addWine/AddWine';
import axios from 'axios';

function App() {
  const [cardArr, setCardArr] = useState();
  const [displayForm, setDisplayForm] = useState('doNotDisplay');
  const [position, setPosition] = useState(null);
  const [updateOnPost, setUpdateOnPost] = useState(0);

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
        setDisplayForm={setDisplayForm}
        displayForm={displayForm}
        position={position}
        updateOnPost={updateOnPost}
        setUpdateOnPost={setUpdateOnPost}
      />
      <WineGrid
        cardArr={cardArr}
        setCardArr={setCardArr}
        setDisplayForm={setDisplayForm}
        displayForm={displayForm}
        setPosition={setPosition}
        updateOnPost={updateOnPost}
        setUpdateOnPost={setUpdateOnPost}
      />
    </div>
  );
}

export default App;
