import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TopBar from './TopBar';
import SideMenu from './SideMenu';

const useStyles = makeStyles((theme) => ({

}));

function Navigation({ setBackgroundImage }) {
    const [openSideMenu, setOpenSideMenu] = useState(false);

    return (
        <div>
            <TopBar setOpenSideMenu={setOpenSideMenu} />
            <SideMenu openSideMenu={openSideMenu} setBackgroundImage={setBackgroundImage} setOpenSideMenu={setOpenSideMenu} />
        </div>
    )
}

export default Navigation
