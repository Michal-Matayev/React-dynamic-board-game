import React, { Component } from 'react';
// import "./style.css";
// import axios from 'axios';
import { useEffect, useState, useContext } from "react";
import Square from './Square/Square';

export default function Board(props) {
    const { columns } = props;
    console.log(columns);
    //const columns = props.columns;
    const [board, setBoard] = useState([]);
    const [createBoard, setCreateBoard] = useState(false);
    ////useEffect(function,time to run function)

    useEffect(() => {
        let arr = [];
        for (let i = 0; i < columns; i++) {
            arr[i] = [];
            for (let j = 0; j < columns; j++) {
                arr[i][j] = `${i} , ${j}`;
            }
        }
        console.log(arr);
        setBoard(arr);

    }, []);




    return (
        <div>
            {board.map((row, i) => (
                <div key={i} className="boardClass">
                    {row.map((col, j) => (
                   
                        <Square key={j} col={j} row={i} />
                        
                        // <div>{createBoard ? <Board columns={colums} /> : ''}

                    ))}
                </div>
            ))}
        </div>
    );

}





