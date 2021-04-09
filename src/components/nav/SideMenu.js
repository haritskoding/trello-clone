import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Grow } from "@material-ui/core";
import colors from '../../utils/color'
import { getImages } from '../../utils/imageApi';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: '400px'
    },
    menu: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-around'
    },
    box: {
        minWidth: '45%',
        height: '90px',
        backgroundColor: 'blue',
        borderRadius: '9px',
        marginBottom: theme.spacing(2),
    },
    optionContainer: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
}))

function SideMenu({ setOpenSideMenu, openSideMenu, setBackgroundImage }) {
    const classes = useStyles();
    const [openOptionColor, setOpenOptionColor] = useState(false);
    const [openOptionImage, setOpenOptionImage] = useState(false);
    const [images, setImages] = useState([]);

    const getListOfImages = async () => {
        const listOfImages = await getImages();
        setImages(listOfImages)
    }

    useEffect(() => {
        getListOfImages()
    }, [])

    return (
        <div>
            <Drawer
                open={openSideMenu}
                anchor='right'
                onClose={() => setOpenSideMenu(false)}
            >
                <div className={classes.drawer}>
                    <div className={classes.menu}>
                        <div
                            style={{
                                backgroundImage:
                                    "url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-palette-generators.jpg)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            }}

                            onClick={() => {
                                setOpenOptionColor(true)
                                setOpenOptionImage(false)
                            }}
                            className={classes.box}>
                        </div>
                        <div
                            style={{
                                backgroundImage:
                                    "url(https://images.unsplash.com/photo-1617507405960-5df680d91f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            }}
                            className={classes.box}
                            onClick={() => {
                                setOpenOptionImage(true);
                                setOpenOptionColor(false)
                            }}

                        >

                        </div>
                    </div>
                    {openOptionImage ?
                        <Grow in={openOptionImage}>
                            <div className={classes.optionContainer}>
                                {
                                    images.map((image, index) => (
                                        <div
                                            key={index}
                                            className={classes.box}
                                            style={{
                                                backgroundImage:
                                                    `url(${image.thumb})`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover"
                                            }}
                                            onClick={() => setBackgroundImage(image.url)}
                                        >

                                        </div>
                                    ))
                                }
                            </div>
                        </Grow> :
                        <Grow in={openOptionColor}>
                            <div

                                className={classes.optionContainer}>
                                {
                                    colors.map((color, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={classes.box}
                                                style={{
                                                    backgroundColor: color
                                                }}
                                                onClick={() => setBackgroundImage(color)}
                                            >

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Grow>

                    }


                </div>
            </Drawer>
        </div>
    )
}

export default SideMenu
