import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import MyButton from "../MyButton/myButton";
import MyMap from "../MyMap/myMap";

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
        <div className="home">
        <span className={classes.button}>
            <MyButton size={'small'} text={'Add place'}/>
        </span>
            <MyMap/>
        </div>
    );
}
