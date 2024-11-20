import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './components/users/User';
import Admin from './components/admin/Admin'
import Home from './components/home/Home';
import Dashboard from './components/admin/content/Dashboard'
import ManageUser from './components/admin/content/ManageUser'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} >
                <Route index element ={<Home/>}></Route>
                <Route path='user' element={<User />} />
            </Route>
            <Route path='admin' element={<Admin />} >
                <Route index element ={<Dashboard/>}></Route>
                <Route path='manage-user' element={<ManageUser />} />
                <Route path='dashboard' element={<Dashboard />} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />


        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
