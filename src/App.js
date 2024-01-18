import Cube from "./components/Cube"
import {useState} from "react"


function App() {
  const [number, setNumber] = useState(0)

  return (
    <Cube
      images={[
        "/images/1.png",
        "/images/2.png",
        "/images/3.png",
        "/images/4.png",
        "/images/5.png",
        "/images/6.png",
      ]}

      number={number}

      drop={() =>
        setNumber(Math.floor(Math.random() * 6))
      }
    />
  )
}

export default App;
