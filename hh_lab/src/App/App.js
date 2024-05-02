import './App.css';
import Landing from '../Pages/Landing/Landing'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Registration/Register';
import FactionSetting from '../Pages/Faction_setting/Faction_setting';
import Userprofile from '../Pages/Userprofile/Userprofile'
import RegComplete from '../Components/regComplete'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='Faction_Setting' element={<FactionSetting/>}></Route>
      <Route path='/RegComplete' element={<RegComplete/>}></Route>
      <Route path='/Userprofile' element={<Userprofile/>}></Route>
    </Routes>    
  );
}

export default App;
