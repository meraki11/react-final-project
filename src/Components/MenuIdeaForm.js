import React from 'react';
import { Form, Button } from 'react-bootstrap';

//may need to rewrite as a class with state

export default function MenuIdeaForm () {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Meal Idea: </Form.Label>
                    <Form.Control as="textarea" rows={1} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Meal Time: </Form.Label>
                    <Form.Control as="select">
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select Date: </Form.Label>
                    <Form.Control type="date" />
                    <Form.Text className="text-muted">
                        Date selection is optional
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Attach recipe here" />            
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Notes: </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Add to idea list" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Menu Idea
                </Button>
            </Form>
        </>
    );
}