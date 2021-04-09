import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import store from '../utils/store'
import List from './List';
import StoreApi from "../utils/storeApi"
import InputContainer from './Input/InputContainer';
import { makeStyles } from "@material-ui/core/styles";
import { LastPage } from '@material-ui/icons';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
    root: {
        minWidth: '300px',
        display: 'flex',
        minHeight: '100vh',
        width: '100vw',
        overflowY: 'auto'
    }
}))


function Wrapper() {
    const [data, setData] = useState(store);
    const classes = useStyle();

    const addMoreCard = (title, listId) => {
        console.log(title, listId)
        const newCardId = uuid();
        const newCard = {
            id: newCardId,
            title
        }
        const list = data.lists[listId];
        list.cards = [...list.cards, newCard]

        const newState = {
            ...data,
            lists: {
                ...data.lists,
                [listId]: list
            }
        };
        setData(newState)
    }


    const addMoreList = (title) => {
        const newListId = uuid();
        const newList = {
            id: newListId,
            title,
            cards: []
        };

        const newState = {
            listIds: [...data.listIds, newListId],
            lists: {
                ...data.lists,
                [newListId]: newList,
            }
        }
        setData(newState)
    }

    const updateListTitle = (title, listId) => {
        const list = data.lists[listId];
        list.title = title;

        const newState = {
            ...data,
            lists: {
                ...data.lists,
                [listId]: list
            }
        }
        setData(newState)
    }

    const onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result
        console.log("ddestination", destination, "source: ", source, "id ", draggableId)

        if (!destination) {
            return;
        }

        if (type === "list") {
            const newListIds = data.listIds;
            newListIds.splice(source.index, 1)
            newListIds.splice(destination.index, 0, draggableId)
            return;
        }

        const sourceList = data.lists[source.droppableId];
        const destinationList = data.lists[destination.droppableId]
        const draggingCard = sourceList.cards.filter(
            (card) => card.id === draggableId
        )[0]

        if (source.droppableId === destination.droppableId) {
            sourceList.cards.splice(source.index, 1)
            destinationList.cards.splice(destination.index, 0, draggingCard)
            const newState = {
                ...data,
                lists: {
                    ...data.lists,
                    [sourceList.id]: destinationList
                }
            };
            setData(newState)

        } else {
            sourceList.cards.splice(source.index, 1);
            destinationList.cards.splice(destination.index, 0, draggingCard);

            const newState = {
                ...data,
                lists: {
                    ...data.lists,
                    [sourceList.id]: sourceList,
                    [destinationList.id]: destinationList
                }
            };
            setData(newState)
        }
    }

    return (
        <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="app" type="list" direction="horizontal">
                    {(provided) => (
                        <div
                            className={classes.root}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {data.listIds.map((listId, index) => {
                                console.log('data ', data)
                                const list = data.lists[listId];
                                console.log('init list', list)
                                return <List list={list} index={index} key={listId} />
                            })}

                            <InputContainer type="list" />
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>
            </DragDropContext>
        </StoreApi.Provider>
    )
}

export default Wrapper
