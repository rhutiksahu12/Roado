import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PieChartWithCenterLabel from './Chart';
import { Box, Stack } from '@mui/material';


export default function DataCard() {

    return (
        <Card sx={{ maxWidth: 'auto' }} >
            <CardHeader
                title="Orders" sx={{ paddingY: '4px' }}
            />
            <Box display='flex' justifyContent='center'>
                <PieChartWithCenterLabel dataTotal={123456} />
            </Box>
            <CardContent>
                <Stack spacing={1} >
                    <Box display='flex' justifyContent='space-between' px={2} sx={{ background: 'linear-gradient(90deg, #fff , #f7cd62 )', borderRadius: '6px', py: '2px' }} >
                        <Typography>Upcoming</Typography>
                        <Typography>50</Typography>
                    </Box>
                    <Box display='flex' justifyContent='space-between' px={2} sx={{ background: 'linear-gradient(90deg, #fff , #7165f6 )', borderRadius: '6px', py: '2px' }} >
                        <Typography>Ongoing</Typography>
                        <Typography>100</Typography>
                    </Box>
                    <Box display='flex' justifyContent='space-between' px={2} sx={{ background: 'linear-gradient(90deg, #fff , #75cfb6 )', borderRadius: '6px', py: '2px' }} >
                        <Typography>Completed</Typography>
                        <Typography>50</Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}