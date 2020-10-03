import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    paddingLeft:30,
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),

    },
  },
}));


export default function ToggleButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button style={styles.font}>ID</Button>
        <Button style={styles.font}>CREATED</Button>
        <Button style={styles.font}>LAST OPENED</Button>
        <Button style={styles.font}>INSTRUMENT</Button>
        <Button style={styles.font}>QTY</Button>
        <Button style={styles.font}>ASK</Button>
        <Button style={styles.font}>DELTA</Button>
        <Button style={styles.font}>MODEL VOL</Button>
        <Button style={styles.font}>STATUS</Button>
        <Button style={styles.font}>CLEARING</Button>
      </ButtonGroup>
    </div>
  );
}

const styles = {
  font:
  {
    fontSize:"8px",
    backgroundColor:"#4b6281",
  },

}
