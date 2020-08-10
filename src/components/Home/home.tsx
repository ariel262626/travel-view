import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import MyButton from "../button/button";
import MapView from "../mapView/mapView";

const useStyles = makeStyles({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
    },
});

export default function Home() {
    const classes = useStyles();
    return (
        <div className="App">
        <span className={classes.button}>
            <MyButton size={'small'} text={'Add place'}/>
        </span>
            <MapView/>
        </div>
    );
}
