import "./App.css";
import puppyList from "./data";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppyList);

  return (
    <>
      {puppies.map((puppy) => {
        return <p>{puppy.name}</p>;
      })}
    </>
  );
}

export default App;
