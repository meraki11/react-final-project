import React from 'react'


export default function MenuIdea(props) {
    console.log(props)
    return (
        <div className="menu-idea">
            <h3>{props.mealName}</h3>
            <h4>Meal: {props.time}</h4>
            <h4>Date: {props.date}</h4>
            <p>Note: {props.notes}</p>
            <a>File: href={props.fileUrl}</a>
        </div>
    )
}