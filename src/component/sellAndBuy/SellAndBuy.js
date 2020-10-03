import { makeStyles } from '@material-ui/core/styles';  
import React from 'react';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { Card , CardHeader, Paper, Grid} from '@material-ui/core';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp';


   const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor:"#222b37",
         display: 'block',
        borderCollapse: "collapse", 
    },
    title:{
        color:"#d4d7dd",
        backgroundColor:"#4b6281",
        paddingRight:140,
        padding:0,
        margin0:0,
    },
    sellIcon:{
        position:"relative",
    },
    buyIcon:{
        position:"relative",
    },
    grid: {
        flexGrow: 1, 
        padding: theme.spacing(2),
      },
      paper: {
        textAlign: 'center',
        color: "grey",
        fontSize:8,
        border:"solid 1px grey",
        backgroundColor:"#222b37",
    
      },
}));

const CradUp =()=>{
    const classes = useStyles();
    return (
        <div style={{backgroundColor:"#d0293d", maxWidth:60, textAlign:"center" , color:"white", fontSize:"10px",  borderRadius: 8 }}>
            <TrendingUpSharpIcon className={classes.sellIcon} fontSize={"small"}/> 
            9596.54 Sell
        </div>
       
    )  
}

const Buy =()=>{
    const classes = useStyles();
    return (
        <div>
        <Card style={{backgroundColor:"green", maxWidth:60, textAlign:"center" , color:"white", fontSize:"10px"  }}>
            <TrendingDownTwoToneIcon className={classes.buyIcon} fontSize={"small"}/> 
            9580.52 Buy
        </Card>
        </div>
       
    )  
}

export default function SellAndBuy() { 
const classes = useStyles();

  return (
    <div style={{ borderColor:"#4b6281" ,  }}>
    <Card className={classes.root} >
        <CardHeader className={classes.title} titleTypographyProps={{variant:'h9' }} title={"BTC-USD"} 
            avatar= {<SwapHorizIcon fontSize={"small"} />}>
        
        </CardHeader>
        <div className={classes.grid} >
        <Grid container >
        <Grid item xs={4}>
         <CradUp/>
        </Grid>
        <Grid item xs={4} >
       18.5
        </Grid>

        <Grid item xs={4} >
        <Buy/>
        </Grid>


        <Grid item xs={4}>
          <Paper className={classes.paper}>1.25</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>MKT</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>slippage</Paper>
        </Grid>
  
        </Grid>
 
        </div>


    </Card>
    </div>
  
    
  );
}



