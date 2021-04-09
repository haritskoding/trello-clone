import React, { useState, useContext } from 'react';
import {
    Button,
    IconButton,
    InputBase,
    Paper
} from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import { makeStyles, fade } from '@material-ui/core/styles'
import storeApi from '../../utils/storeApi';



const useStyle = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4),
        padding: theme.spacing(1, 1, 1, 1)
    },
    input: {
        margin: theme.spacing(1)
    },
    btnConfirm: {
        background: '#5AAC44',
        color: '#fff',
        "&:hover": {
            background: fade("#5AAC44", 0.85)
        }
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1)
    }

}))

function InputCard({ setOpen, listId, type }) {
    const classes = useStyle();
    const { addMoreCard, addMoreList } = useContext(storeApi)
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value)
    };

    const handleBtnConfirm = () => {
        if (type === 'card') {
            addMoreCard(title, listId);
            setTitle("")
            setOpen(false);
        } else {
            addMoreList(title);
            setTitle("")
            setOpen(false);
        }
    }

    const handleBlur = () => {
        setOpen(false);
        setTitle('')
    }

    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase
                        onChange={handleOnChange}
                        multiline
                        onBlur={() => setOpen(false)}
                        fullWidth
                        inputProps={{
                            className: classes.input
                        }}
                        value={title}
                        placeholder={type === 'card' ? "Enter a tittle of this card..." : 'Enter List title'}
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button
                    onClick={handleBtnConfirm}
                    className={classes.btnConfirm}>
                    {type === "card" ? "Add Card" : "Add List"}
                </Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default InputCard
