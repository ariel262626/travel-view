import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl'
import PoolIcon from '@material-ui/icons/Pool';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    map: {
        float: 'right',
    }
});

export default function MyMap() {
    const classes = useStyles();
    const [viewport, setViewport] = useState({
      lat: 31.795289,
      lang: 35.196317,
      zoom: 5,
      width: '50vw',
      height: '100vh',
  });

  return (

    <div className={classes.map}>
      <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/relco/ckd4b9yxx0vp41irwc2mccsa7"
          onViewportChange={(viewport: any) => setViewport(viewport)}
      >
          <Marker latitude={31.795289} longitude={35.196317} offsetLeft={-10} offsetTop={-10}>
              <PoolIcon style={{color: 'blue'}}/>
          </Marker>
      </ReactMapGL>
    </div>
  );
}
