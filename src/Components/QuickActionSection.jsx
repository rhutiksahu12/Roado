import { CreateOutlined, LocalShippingOutlined, PersonOutlineOutlined, RvHookupOutlined } from '@mui/icons-material'
import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const QuickActionSection = () => {
    return (
        <>
            <Typography mt={3} mb={2} variant='h5' fontWeight={500}> Quick Actions</Typography>
            <Box display='flex' justifyContent='space-evenly' bgcolor='white' boxShadow={2} sx={{ borderRadius: '10px' }} p={2}>
                <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}><CreateOutlined fontSize='sm' /><Typography>Create Indents</Typography></Stack>
                <Divider orientation="vertical" flexItem />
                <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}><LocalShippingOutlined fontSize='sm' /><Typography>Add Vehicle</Typography></Stack>
                <Divider orientation="vertical"  flexItem />
                <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}><RvHookupOutlined fontSize='sm' /><Typography>Add Trailer</Typography></Stack>
                <Divider orientation="vertical" flexItem />
                <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}><PersonOutlineOutlined fontSize='sm' /><Typography>Add Driver</Typography></Stack>
                <Divider orientation="vertical" flexItem />
                <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}><LocalShippingOutlined fontSize='sm' /><Typography>Add Indents</Typography></Stack>
            </Box>
        </>
    )
}

export default QuickActionSection