import React from 'react';
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)(({ theme }) => ({
    width: '100%',
    background: `url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000`,
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Heading = styled(Typography)(({ theme }) => ({
    fontSize: '70px',
    color: '#FFFFFF',
    lineHeight: 1,
}));

const SubHeading = styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(1), // Adding some padding for better readability
}));

const Banner = () => {
    return (
        <Image>
            <Heading variant="h1">BLOG</Heading>
            <SubHeading variant="subtitle1">Code for Interview</SubHeading>
        </Image>
    );
};

export default Banner;
