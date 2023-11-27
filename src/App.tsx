import React from 'react';
import './App.css';
import {SetterInputWithRedux} from "./newComponents/SetterInputWithRedux";
import {RenderWithRedux} from "./newComponents/RenderWithRedux";


function App() {
    return (
        <div className="app">
            <SetterInputWithRedux/>
            <RenderWithRedux />
        </div>
    );
}

export default App;
