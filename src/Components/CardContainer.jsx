
import React from 'react'
import DataCard from './DataCard'
import { Box, Grid, Stack } from '@mui/material'

const CardContainer = () => {
    return (
        <Box display='flex' columnGap={1} justifyContent='space-between' mt={2}>
            <DataCard />
            <DataCard />
            <DataCard />
            <DataCard />
        </Box>
    )
}

export default CardContainer