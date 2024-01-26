import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Menu from './components/Footer';
import Basic from './components/BasicOperators/Basic';
import Comparison from './components/ComparisionOperators/Comparison';
import Logical from './components/LogicalOperators/Logical';
import Bitwise from './components/BitwiseOperators/Bitwise';

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path={'/Basic'} element={<Basic></Basic>}/>
        <Route path={'/Comparison'} element={<Comparison />}/>
        <Route path={'/Logical'} element={<Logical></Logical>}/>
        <Route path={'/Bitwise'} element={<Bitwise></Bitwise>}/>
      </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
