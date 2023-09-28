import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [state, setstate] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3000/advertising')
    .then(response => {
      setstate(response.data)
      console.log('Data:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }, [])

  return (
    <div className="App">
      <header className="App-header">hello
      </header>
      <div>{
        state && state.map((data) => {
          return(
            <div>{data.name}</div>
          )
        })}</div>
    </div>
  );
}

export default App;
