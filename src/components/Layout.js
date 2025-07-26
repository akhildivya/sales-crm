// Layout.jsx
import { Outlet } from 'react-router-dom';
import Dash from './Dash';






export default function Layout() {
  return (
    <div className="layout">
      <Dash />
      <div className="main-content">
        
        <Outlet />
      </div>
    </div>
  );
}
