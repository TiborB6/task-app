import React, {useState} from 'react';
import Overview from './components/Overview';

export default function App () {
  const [myList, setMyList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = event.target.elements.inputName.value;
    setMyList([...myList, newItem])
    event.target.reset()
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="inputName"/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Overview arr={myList}/>
    </>
  );
}

