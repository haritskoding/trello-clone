import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    AppBar: {
        background: 'none'
    },
    title: {
        flexGrow: 1,
    },
    btn: {
        color: '#fff',
        backgroundColor: '#000'
    }
}))

function TopBar({ setOpenSideMenu }) {
    const classes = useStyles();
    return (
        <div>
            <AppBar
                elevation={0}
                position="static"
                className={classes.AppBar}>
                <Toolbar>
                    <h1 className={classes.title}>Daily todo</h1>
                    <Button
                        onClick={() => setOpenSideMenu(true)}
                        className={classes.btn}>
                        Change Background
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar
