import React from 'react';
import {Box} from "@material-ui/core";

const TravelPoints = (props: any) => {
    return (
        <Box>
            {props.data.travelPoints?.[0]?.name}
        </Box>
    );
}

export default TravelPoints
