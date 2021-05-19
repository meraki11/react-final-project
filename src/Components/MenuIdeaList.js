import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import MenuIdea from './MenuIdea';
import menuIdeaData from './menuIdeaData';

//values currently hard-coded to check display of props
export default function MenuIdeaList () {
    const menuComponents = menuIdeaData.map(menuIdea => {
        return <MenuIdea key={menuIdea.id} mealName={menuIdea.mealName} time={menuIdea.time} notes={menuIdea.notes} />
    })
    return (
        <>
            <h2>Menu Ideas List</h2>
            {menuComponents}
            {/* <ListGroup>
                <ListGroup.Item>
                   <MenuIdea 
                        mealName="Pumpkin Pancakes"
                        time="Breakfast"
                        date="05/22/2021"
                        notes="use coconut milk"
                        fileUrl=""
                    /> 
                </ListGroup.Item>
                <ListGroup.Item>
                    <MenuIdea 
                        mealName="PBJ sandwich"
                        time="Lunch"
                        date="05/22/2021"
                        notes="cut into triangles"
                        fileUrl=""
                    /> 
                </ListGroup.Item>
                <ListGroup.Item>
                    <MenuIdea 
                        mealName="Chicken Nuggies"
                        time="Dinner"
                        date="05/22/2021"
                        notes="use gluten free panko"
                        fileUrl=""
                    /> 
                </ListGroup.Item>
            </ListGroup> */}
            
        </>
    )
}