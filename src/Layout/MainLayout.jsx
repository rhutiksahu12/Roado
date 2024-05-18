import { Box, Container, Divider, Stack } from '@mui/material'
import React from 'react'
import SideBar from '../Components/SideBar'

const MainLayout = ({ children }) => {
    return (
        <>
            {/* <Stack direction='row'
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            > */}
            {/* <Box sx={{ display: 'flex' }}>

</Box> */}
            {/* <SideBar /> */}
            {/* </Stack> */}
            {children}
        </>

    )
}

export default MainLayout