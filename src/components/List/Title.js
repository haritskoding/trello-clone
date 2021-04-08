import React, { useState } from "react";
import { Typography } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: 'flex'
    },

    editableTitle: {
        flexGrow: 1
    },
    input: {
        margin: theme.spacing(1),
        "&:focus": {

        }
    }
}))

function Title() {
    const [open, setOpen] = useState(false);
    const classes = useStyle();

    return (
        <div>
            {open ? (
                <div>
                    <InputBase value="todo"
                        inputProps={{
                            className: classes.input,
                        }}
                        fullWidth
                        onBlur={() => setOpen(!open)}
                    />
                </div>
            ) : (
                <div className={classes.editableTitleContainer}>
                    <Typography
                        onClick={() => setOpen(!open)}
                        className={classes.editableTitle}
                    >
                        Todo
                    </Typography>
                    <MoreHorizIcon />
                </div>
            )}
        </div>
    )
}

export default Title
