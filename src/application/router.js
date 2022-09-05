import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-routrt-dom";
import WelcomePage from '../pages/welcomePage';
import HomePage from '../pages/homePage';
import ShowPage from '../pages/showPage';
import ListPage from '../pages/listPage';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<WelcomePage/>} />
            <Route path='/home' element={<HomePage/>} />
            <Route path='/show' element={<ShowPage/>} />
            <Route path='/list' element={<ListPage/>} />
        </Routes>
    </BrowserRouter>
    )
}
export default Router;