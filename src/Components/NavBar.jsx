import { MoreVert, NotificationsNoneOutlined, Search } from '@mui/icons-material'
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const NavBar = () => {
    return (
        <Box justifyContent='space-between' display='flex'>
            <Typography variant="h4">
                Dashboard
            </Typography>
            <Box display='flex' bgcolor='white' alignItems="center" boxShadow={2} px={2} sx={{ borderRadius: '18px' }}>
                <Search variant='Outlined' fontSize="small" />
                <Divider orientation="vertical" variant="middle" flexItem />
                <NotificationsNoneOutlined variant='Outlined' fontSize="small" />
                <Divider orientation="vertical" variant="middle" flexItem />
                <MoreVert variant='Outlined' fontSize="small" />
            </Box>
        </Box>
    )
}

export default NavBar