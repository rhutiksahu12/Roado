import { AccountBoxSharp } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const HighPriorityAlerts = () => {
    return (
        <>
            <Box display='flex' mt={2} mb={1} justifyContent='space-between'>
                <Typography variant='h6'>High Priority alerts (14)</Typography>
                <Typography variant='subtitle2'>View all </Typography>
            </Box>
            <Box component='section' display='flex' gap={2} >
                <HighPrioCard />
                <HighPrioCard />
            </Box>
        </>
    )
}

export default HighPriorityAlerts

export const HighPrioCard = () => {
    return (
        <Box p={2} bgcolor='#fff' sx={{ borderRadius: '10px' }} width='50%'>
            <Box display='flex' justifyContent='space-between'>
                <Box display='flex' alignItems='center'>
                    <AccountBoxSharp />
                    <Box px={1}>
                        <Typography variant='subtitle2'>Driver raised Concern</Typography>
                        <Typography variant='body1' fontSize='10px'>Driver raised Concern</Typography>
                    </Box>
                </Box>
                <Typography variant='body1' fontSize='10px'>13 Feb 24 </Typography>
            </Box>
            <Box m={1}>
                <Typography fontSize='12px'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse vitae tempore minus laboriosam?</Typography>
            </Box>
            <Box display='flex' gap={3} justifyContent='flex-end'>
                <Button size='small' sx={{fontSize:'12px', color:'#213771'}}>Ignore</Button>
                <Button size='small' variant='contained' sx={{bgcolor:'#213771', fontSize:'12px'}}> Resolve</Button>
            </Box>
        </Box>
    )
}