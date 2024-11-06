
import { Outlet } from 'react-router-dom'
import Header from './header/header';
import "./App.scss"

const App = () => {
  return (
    <div className="app-container">
    <div className="header ">
      <Header></Header>
    </div>
    <div className="content">
      <Outlet/>
    </div>
    </div>
  );
};

export default App;
