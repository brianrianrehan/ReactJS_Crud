import { BrowserRouter , Route, Routes } from 'react-router-dom';
import ListMhs from './components/ListMhs';
import AddMhs from './components/AddMhs';
import EditMhs from './components/EditMhs';
import './App.css';
function App() {
  
  return (
    <section class="hero is-fullheight">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListMhs/>}/>
        <Route path="/add" element={<AddMhs/>}/>
        <Route path="/edit/:id" element={<EditMhs/>}/>
      </Routes>
    </BrowserRouter>
    </section>
  );
}

export default App;
