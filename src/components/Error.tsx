import React from 'react';
import {Box} from "@chakra-ui/react";

interface Props {
    text: string
}
const Error = ({text}: Props) => {
    return (
        <Box background='red.300' color='red' border='red' px='1rem' py='0.5rem' borderRadius='8px' >
            {text}
        </Box>
    );
};

export default Error;