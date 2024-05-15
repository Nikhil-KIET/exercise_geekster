import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Cards from "./Cards";

function App() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("chest");
  const [txt, setTxt] = useState("");
  const [c_data,setCdata]=useState({});
  console.log(c_data);

  async function getData() {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=20`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '940de17117msh97dc864c2ca7002p1055b2jsncd0ee418daad',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setExercises(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, [bodyPart]);

  function clickHandler() {
    setBodyPart(txt);
  }

  return (
    <div className="flex flex-col bg-pink-200 space-y-10 items-center">
      <h1 className="text-3xl font-bold text-center">Awesome Exercises You Should Know</h1>
      <div>
        <input type="text" value={txt} onChange={(event) => setTxt(event.target.value)} />
        <button onClick={clickHandler}>Search</button>
      </div>
      <Navbar setCat={setBodyPart} />
      <h1>Showing Results</h1>
      <Cards data={exercises} setCdata={setCdata} />
    </div>
  );
}

export default App;
