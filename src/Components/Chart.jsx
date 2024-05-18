import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    
];

const size = {
    width: 200,
    height: 150,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

export default function PieChartWithCenterLabel({ dataTotal }) {
    return (
        <PieChart series={[{ data, innerRadius: 60, }]} sx={{paddingY: '18px'}} {...size} colors={['#f7cd62', '#7165f6', '#75cfb6']}>
            <PieCenterLabel>
                Total {dataTotal}
            </PieCenterLabel>
        </PieChart>
    );
}