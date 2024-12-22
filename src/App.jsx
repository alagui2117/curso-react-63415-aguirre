import './App.css'
import Navbar from './components/Navbar'
import 'bulma/css/bulma.min.css'
import ItemListContainer from './components/ItemListContainer'
function App() {

  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer greeting="Miguel"></ItemListContainer>
    </>
  )
}

export default App
