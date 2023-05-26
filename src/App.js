import { FiSearch } from 'react-icons/fi'
import "./css/styles.css"
function App() {
  return(
    <div className="container">
      <h1 className="title">EY Ferramentas</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite a ferramenta" />
        
        <button className="buttonSearch">
          <FiSearch size={25} color ="#FFF" />
        </button>
      </div>
    </div>
  )
}

export default App;
