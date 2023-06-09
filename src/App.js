import {useState} from 'react';
import { FiSearch } from 'react-icons/fi'
import "./css/styles.css"
import "./event.js"

function App() {

  const [input, setInput] = useState('')


  return(

    <div className="container">
      <h1 className="title">Tools</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite a ferramenta" value={input} onChange={(e) => setInput(e.target.value) } />
        
        <button className="buttonSearch" onClick="seach()">
          <FiSearch size={25} color ="#FFF" />
        </button>
      </div>

       <main className="main">
      <h2>Nome tals </h2>
      </main>
    </div>
  )
}

export default App;
