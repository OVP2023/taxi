import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage'
import DriftPage from './components/DriftPage'
import ForzaPage from './components/ForzaPage'
import TimeAttackPage from './components/TimeAttackPage'
import Menu from './components/Menu'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Menu />}>
        <Route index element={<HomePage />}/>
        <Route path='drift' element={<DriftPage />}/>
        <Route path='cart'element={<ForzaPage />}/>
        <Route path='timeattack' element={<TimeAttackPage />}/>
      </Route>     
    </Routes>
  );
}

export default App



