import React from 'react';
import { CalendarView } from './CalendarView';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment'


export default function SelectedDate () {
    // const displayDate = CalendarView.dateState


    return (
        <>
            <h2>Menu Ideas for </h2>
            <ListGroup>
                <ListGroup.Item>Breakfast: </ListGroup.Item>
                <ListGroup.Item>Lunch: </ListGroup.Item>
                <ListGroup.Item>Dinner: </ListGroup.Item>
            </ListGroup>
        </>
    )
}