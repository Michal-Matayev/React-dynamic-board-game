import React, { Component } from 'react';
// import "./style.css";
// import axios from 'axios';
import { useEffect, useState, useContext } from "react";
import Board from './Board';

export default function Checker() {
    const [colums, setColoms] = useState(0);
    const [createBoard, setCreateBoard] = useState(false);


    const handleSubmit = (event) => {
        console.log("in submit");
        event.preventDefault();
        setCreateBoard(true);
    };




    return <div className="Checker">
        <div className='input'>
            <input
                type="text" required onChange={(e) => {console.log(e.target.value); setColoms(e.target.value) }
                } />
            <button type="submit" onClick={handleSubmit}> Make Checkerboard </button>
        </div>

        <div>{createBoard ? <Board columns={colums} /> : ''}

        </div>
    </div>;

}





