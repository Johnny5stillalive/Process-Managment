
import React from 'react'
import styled from 'styled-components'
import Task from './Task.js'
import { Droppable, Draggable } from 'react-beautiful-dnd'


const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width:220px;
    display:flex;
    flex-direction: column;
    background-color:white;
`;
const Title = styled.h3`
    display:inline-block;
    padding: 8px;
    
`;
const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
    min-height:100px;
`;

const Button = styled.button`
    height:25%;
    width:10%;
    font-size:60%;
    background-color: Black;
    color: white;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    transition: ease color 250ms;
    &:hover {
        cursor: default;
        color:black;
        background-color:white;
        opacity: 0.7;  
    }
    `;



function Column(props) {
    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}>
                    <wrapper>
                    <Title {...provided.dragHandleProps}>{props.column.title}</Title>
                    <Button onClick={removeColumn}>x</Button>
                    </wrapper>
                    
                    <Droppable droppableId={props.column.id} type='task'>
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                                {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>

            )}
        </Draggable>
    )
}

const removeColumn = () => {
    console.log("column removed jk!!")
}

export default Column