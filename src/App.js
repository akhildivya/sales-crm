


import { Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';

import Charts from './components/Charts'
import Reports from './components/Reports'
import Mainboard from './components/Mainboard'



import Assignleads from './components/Assignleads'
import Salesboard from './components/Salesboard'


import Signup from './pages/Signup'
import Excelsheet from './components/Excelsheet';

import Sidebar from './components/Sidebar';

import Layout from './components/Layout';
import View from './components/View';

function App() {

  return (

    <div className="App"  >

      <div className="main-content"  >

        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>

          <Route element={<Layout />}>
            
            <Route path='/uploadsheet' element={<Excelsheet></Excelsheet>}></Route>
            <Route path='/dashboard' element={<Mainboard></Mainboard>}></Route>
            <Route path="/reports" element={<Reports></Reports>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>

            <Route path='/charts' element={<Charts></Charts>}></Route>

            <Route path='/assignleads' element={<Assignleads></Assignleads>}></Route>
            <Route path='/sales' element={<Salesboard></Salesboard>}></Route>
          </Route>
        </Routes>

      </div>



    </div>

  );
}

export default App;

