import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'fontsource-roboto';
import Home from "./components/Home/home";

export default function App(): JSX.Element {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
