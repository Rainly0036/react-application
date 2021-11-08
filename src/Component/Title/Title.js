import React from 'react';
import './Title.css'

export default function Title(props) {
    return(
        <div className="title-block">
            <h1 className="title">{props.title}</h1>
            <br />
            <h2 className="subtitle">HUAHAHA</h2>
        </div>
    )
}