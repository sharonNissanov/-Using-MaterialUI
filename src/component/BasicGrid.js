import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconTable from './firstTable/IconTable';
import LineChart from './graphSketch/LineChart';
import MiddleTable from './secondTable/MiddleTable';
import TableWithButtons from './thirdTable/TableWithButtons';
import SellAndBuy from './sellAndBuy/SellAndBuy';

//Grid 

const useStyles = makeStyles((theme) => ({
  root: {
    position:"inherit",
    flexGrow: 1, 
    backgroundColor: "#0d1521",
    },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "#0d1521",
  },

}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0.5}>
        <Grid item xs={4}>
          <Paper className={classes.paper}><IconTable/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><IconTable/></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}><LineChart/><LineChart/></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}><LineChart/><LineChart/></Paper>
        </Grid>
        


        <Grid item xs={6}>
          <Paper className={classes.paper}><MiddleTable/></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}><SellAndBuy/><p style={{minHeight:7}}></p><SellAndBuy/></Paper>
        </Grid>


        <Grid item xs={2}>
          <Paper className={classes.paper}><LineChart/></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}></Paper>
        </Grid>


        <Grid item xs={6}>
          <Paper className={classes.paper}><TableWithButtons/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><TableWithButtons/></Paper>
        </Grid>

      </Grid>
    </div>
  );
}
