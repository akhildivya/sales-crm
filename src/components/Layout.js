// Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
export default function Layout() {
  return (
    <div className="layout ">
      <Header />
      <div className="main-content cotainer w-100 vh-100" style={{backgroundColor:'red', overflow: 'hidden'}} >

        <Outlet />
       
      </div>
       <Footer></Footer>
    </div>
  );
}
