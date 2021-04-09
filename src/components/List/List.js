import React from 'react';
import { Paper, Typography, CssBaseline } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import Title from './Title';
import Card from '../Card';
import InputContainer from '../Input/InputContainer';
import { Draggable, Droppable } from 'react-beautiful-dnd';


const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: "#EBECF0",
        marginLeft: theme.spacing(1)
    },
    cardContainer: {
        marginTop: theme.spacing(4)
    }
}))

function List({ list, index }) {
    console.log(list)
    const classes = useStyle();
    return (
        <Draggable draggableId={list.id} index={index}>
            {(provided) => (
                <div  {...provided.draggableProps} ref={provided.innerRef}>
                    <Paper {...provided.dragHandleProps} className={classes.root}>
                        <CssBaseline />
                        {list && (
                            <>
                                <Title title={list.title} listId={list.id} />
                                <Droppable droppableId={list.id}>
                                    {(provided) => (
                                        <div
                                            className={classes.cardContainer}
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            {

                                                list.cards.map((card, index) => (
                                                    <Card key={card.id} card={card} index={index} />
                                                ))
                                            }
                                            {provided.placeholder}
                                        </div>
                                    )}

                                </Droppable>

                                <InputContainer listId={list.id} type="card" />
                            </>
                        )}
                    </Paper>
                </div>
            )}


        </Draggable>
    )
}

export default List
