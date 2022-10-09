import { useState } from "react";
import "./App.scss";
import Card from "./Card";
import imagen1 from './images/imagen1.jpeg'
import imagen2 from './images/imagen2.jpeg'
import imagen3 from './images/imagen3.jpeg'
import imagen4 from './images/imagen4.jpeg'

const images = [{
  url: imagen1,
  caption: 'Slide 1'
},  {
  url: imagen2,
},  {
  url: imagen3,
},  {
  url: imagen4,
}]

function App() {
  const [visibility, setVisibility] = useState(false);
  const [selectedElement, setSelectedElement] = useState({})

  return !visibility ? (<div className="App">
      <ul className="Container">
        {images.map((element) => {
          return <img className='imagen' alt="" src={element.url} onClick={() => {
            setVisibility(!visibility)
            setSelectedElement({url: element.url, caption: element.caption})
          }}></img>;
        })}
      </ul>
</div>) : (<div className="App"><button className='close' onClick={(e) => {
  e.preventDefault();
  setVisibility(!visibility)
}}>x</button><Card element={selectedElement}/></div>) 
}

export default App;
