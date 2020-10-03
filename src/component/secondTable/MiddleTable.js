import React from 'react';
import { makeStyles } from '@material-ui/core/styles';  

import {
    TableContainer,
    Paper,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
     Radio
  } from "@material-ui/core";


const headers = [
  "COUNTRYPARTY",
  "BTC",
  "ETH",
  "XPR",
  "EUR",
  "USD",
  "GBR",
  "NET EX",
  "LAST CALCULATION DATE",
  ];

const useStyles = makeStyles((theme) => ({

  container:{
    maxHeight:250,
    backgroundColor:"#222b37",
    minWidth:500
  },

font:{
  fontSize:"10px",
  color:"#d4d7dd",   
  padding:0,
  margin0:0,
  borderCollapse: "collapse",
},
row:{
  borderCollapse: "collapse",

},
header:{
  fontSize:"8px",
  color:"#d4d7dd",
  backgroundColor:"#4b6281",
  borderCollapse: "collapse",
  padding:0, 
  width:200, 
}

}));

const rowsObj = [

  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},
  {country:'B2Cw', btc:'2.125',eth:'0', xpr:'0',eur:'0',usd:0, gbr:0, net:'10', date:'30 Apr 2020 17:09'},

];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <div  >
    <TableContainer className={classes.container} >
      <Table >
      <TableHead>
          <TableCell className={classes.font} className={classes.header}>THRESHOLD 10000</TableCell>
      </TableHead>
      <TableHead>
        <TableRow >
          {headers.map(text => (
          <TableCell className={classes.header}  key={text}>{text}</TableCell> ))}
        </TableRow>
      </TableHead>
        <TableBody>
        {rowsObj.map((row) => (
            <TableRow key={row.compamy} >
              <TableCell className={classes.font} >{row.country}</TableCell>
              <TableCell className={classes.font}>{row.btc}</TableCell>
              <TableCell className={classes.font}>{row.eth}</TableCell>
              <TableCell className={classes.font} >{row.xpr}</TableCell>
              <TableCell className={classes.font}>{row.eur}</TableCell>
              <TableCell className={classes.font}>{row.usd}</TableCell>
              <TableCell className={classes.font}>{row.gbr}</TableCell>
              <TableCell className={classes.font}>{row.net}</TableCell>
              <TableCell className={classes.font}>{row.date}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
