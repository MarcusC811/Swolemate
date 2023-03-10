import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Logout from '../components/Logout';
import Logo from '../assets/images/dumbbell.png';
import { borderBottom } from '@mui/system';
import webFont from 'webfontloader';

const Navbar = () => {
    return (
        <Stack direction="row"
        justifyContent="space-around" sx={{ gap: {
            sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none' }} px='20px'>
        
            <Link to="/">
                <img src={Logo}  alt="logo" style={{
                    width: '48px', height: '48px', margin: '0 20px'}}/>
            </Link>
            <Stack 
            direction="row"
            gap="40px"
            fontSize="20px"
            alignItems="flex-end" >
            <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', 
            borderBottom: '3px solid #99D98C', fontFamily: 'Arial, Helvetica, sans-serif'}}
            >Home</Link>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                    <Button {...bindTrigger(popupState)} style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #99D98C', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: "20px", padding: '0', textTransform: 'none', letterSpacing: 'none', fontWeight: 'normal', lineHeight: '1.35'}}>
                        Exercises
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <Link to="/exercise/abductors"><MenuItem onClick={popupState.close}>Abductors</MenuItem></Link>
                        <Link to="/exercise/abs"><MenuItem onClick={popupState.close}>Abs</MenuItem></Link>
                        <Link to="/exercise/biceps"><MenuItem onClick={popupState.close}>Biceps</MenuItem></Link>
                        <Link to="/exercise/calves"><MenuItem onClick={popupState.close}>Calves</MenuItem></Link>
                        <Link to="/exercise/cardiovascular%20system"><MenuItem onClick={popupState.close}>Cardiovascular System</MenuItem></Link>
                        <Link to="/exercise/delts"><MenuItem onClick={popupState.close}>Delts</MenuItem></Link>
                    </Menu>
                    </React.Fragment>
                )}
            </PopupState>
            <Link to="/login" style={{ textDecoration: 'none', color: '#3A1212', 
            borderBottom: '3px solid #99D98C', fontFamily: 'Arial, Helvetica, sans-serif'}}
            >Login</Link>
            <Link to="/profile" style={{ textDecoration: 'none', color: '#3A1212', 
            borderBottom: '3px solid #99D98C', fontFamily: 'Arial, Helvetica, sans-serif'}}
            >Profile</Link>
            <Logout/>
            </Stack>
        </Stack>
    )
}

export default Navbar