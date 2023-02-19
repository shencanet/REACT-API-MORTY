import "./App.css";
import Characters from './components/Characters'
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [CharacterData, setCharacterData] = useState([]);
  const [info, setinfo] = useState({})
  const initialurl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>{
        setCharacterData(data.results)
        setinfo(data.info)
      } )
      .catch((error) => console.log(error));
  };

  const onNext = () => {
    fetchCharacters(info.next);
  }
  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  useEffect(() => {
    fetchCharacters(initialurl);
  }, []);

  return (
    <>
      <Navbar brand={"Rick And Morty"} />

      <div className="container mt-5 ">
        
        <Pagination 
        prev= {info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}

        />
        <Characters CharacterData={CharacterData}/>
        <Pagination />
      </div>
    </>
  );
}

export default App;
