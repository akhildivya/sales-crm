


import { Route, Routes } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar';
import Login from './pages/Login';

import Charts from './components/Charts'
import Reports from './components/Reports'
import Mainboard from './components/Mainboard'




import Assignleads from './components/Assignleads'
import Salesboard from './components/Salesboard'


import Signup from './pages/Signup'
import Excelsheet from './components/Excelsheet';


function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path='/sidebar' element={<Sidebar></Sidebar>}></Route>
        <Route path='/uploadsheet' element={<Excelsheet></Excelsheet>}></Route>
        <Route path='/dashboard' element={<Mainboard></Mainboard>}></Route>
        <Route path="/reports" element={<Reports></Reports>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path='/charts' element={<Charts></Charts>}></Route>

        <Route path='/assignleads' element={<Assignleads></Assignleads>}></Route>
        <Route path='/sales' element={<Salesboard></Salesboard>}></Route>
      </Routes>




    </div>
  );
}

export default App;

