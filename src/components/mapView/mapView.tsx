import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl'
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    map: {
        float: 'right',
    }
});

export default function MapView() {
    const classes = useStyles();
    const [viewport, setViewport] = useState({
      lat: 33.817690,
      lang: 33.229659,
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
          markers
      </ReactMapGL>
    </div>
  );
}
