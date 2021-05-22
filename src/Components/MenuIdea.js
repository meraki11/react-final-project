import React from 'react'
import { Card, Button } from 'react-bootstrap'


export default function MenuIdea(props) {
    console.log(props)
    return (
        <div className="menu-idea">
            <Card style={{ width: '400px'}}>
                <Card.Img variant='top' src='props.mealImg'/>
                <Card.Body>
                    <Card.Title>{props.mealName}</Card.Title>
                    <Card.Text>Note: {props.notes}</Card.Text>
                    <Button variant="secondary">File: {props.fileUrl}</Button>
                </Card.Body>
            </Card>
        </div>
    )
}