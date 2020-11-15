import { useEffect, useState } from 'react';
import './App.css';
import WineGrid from './components/wineGrid/WineGrid';
import AddWine from './components/addWine/AddWine';

function App() {
  const [cardArr, setCardArr] = useState();
  const [title, setTitle] = useState(null);
  const [displayForm, setDisplayForm] = useState('doNotDisplay');
  const [position, setPosition] = useState(null);
  const [updateOnPost, setUpdateOnPost] = useState(0);

  const getTitle = async () => {
    const title = await fetch('http://localhost:5000')
      .then(res => res.json());
    setTitle(title);
  }

  const getWines = async () => {
    try {
      const response = await fetch('http://localhost:5000/wines', {
        headers: { 'Content-Type': 'application/json' },
      });
      const resData = await response.json();
      setCardArr(resData);
    } catch (err) {
      console.error(err, 'getWines error')
    }
  }

  useEffect(() => {
    getTitle();
    getWines();
  }, [updateOnPost]);

  return (
    <div className="App">
      <h1 className="header">{title}</h1>
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
