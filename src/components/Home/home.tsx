import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import MyButton from "../MyButton/myButton";
import MyMap from "../MyMap/myMap";
import TravelPoints from "../TravelPoints/home";
import { gql, useQuery } from '@apollo/client';


const GET_TRAVEL = gql`
	query {
		travelPoints {
			name,
			id,
            lat,
            lng,
		}
	}
`;

const ADD_POINT = gql`
	mutation createTravelPoint {
		createTravelPoint(name: $name, lat: $lat , lng: $lng) {
			name,
			id,
			lat,
			lng,
		}
	}
`;

const useStyles = makeStyles({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
    },
});

export default function Home() {
    const classes = useStyles();

    const { data, loading, error }: any = useQuery(GET_TRAVEL)

    if (loading || error) return <p>Loading...</p>

    return (
        <div className="home">
            <TravelPoints data={data}/>
        <span className={classes.button}>
            <MyButton size={'small'} text={'Add place'}/>
        </span>
            <MyMap lat={data.travelPoints[0].lat} lng={data.travelPoints[0].lng}/>
        </div>
    );
}
