import React from 'react';
import { CalendarView } from './CalendarView';
import ListGroup from 'react-bootstrap/ListGroup';



export default function SelectedDate () {
    // const displayDate = CalendarView.dateState


    return (
        <>
            <h2>Menu Ideas for {{/*selected date*/}} </h2>
            <ListGroup>
                <ListGroup.Item>Breakfast: {{/*selected date.breakfast*/}}</ListGroup.Item>
                <ListGroup.Item>Lunch: {{/*selected date.lunch*/}}</ListGroup.Item>
                <ListGroup.Item>Dinner: {{/*selected date.dinner*/}}</ListGroup.Item>
            </ListGroup>
        </>
    )
}