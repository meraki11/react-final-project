import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import MenuIdea from './MenuIdea';
import menuSelectedData from './menuSelectedData';

const data = [...menuSelectedData];

export default function SelectedDate(props) {
   console.log(props)
   
    return (
        <>
            <div className='menu'>
                {data.map((menu) => (
                    <ListGroup>
                        <h2>Menu Ideas for {menu.date} </h2>
                        <ListGroup.Item>Breakfast: {menu.breakfast} </ListGroup.Item>
                        <ListGroup.Item>Lunch: {menu.lunch} </ListGroup.Item>
                        <ListGroup.Item>Dinner: {menu.dinner} </ListGroup.Item>
                    </ListGroup>
                ))}
            </div>
        </>
    )
}