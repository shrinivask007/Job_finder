import { Box, styled } from '@mui/material'
import React from 'react'
import SearchInputEl from './SearchInputEl';
import headerImage from '../images/header2.jpeg';

const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: "flex",
            justifyContent: 'center',
            alignItems:'center', 
             minHeight: 200,     //90
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            //  backgroundColor: theme.palette.secondary.main
        }

    ));
    return (
        <>
            <StyleHeader >
               <SearchInputEl/>
            </StyleHeader>
        </>
    )
}

export default Header