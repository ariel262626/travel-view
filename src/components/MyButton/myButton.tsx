import * as React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

interface IProps {
    size: string;
    text: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
    }),
);

export default function MyButton(props: IProps) {
  const classes = useStyles();
  return (
    <div className="button">
        <Button variant="contained" color="primary" className={classes.margin}>{props.text}</Button>
    </div>
  );
}
