import React from 'react';
import { makeStyles } from '@material-ui/core/styles';  
import {TableContainer,Paper,Table,TableRow,TableCell,TableHead,TableBody,Radio} from "@material-ui/core";

const headers = [
  "COMPANY NAME",
  "PRODUCT",
  "SENT AT",
  "STATUS",
  ];

const useStyles = makeStyles((theme) => ({
  container:{
     maxHeight:300,
    backgroundColor:"#222b37",
  },
  radio: {
    '&$checked': {
      color: 'green',
      padding:0,
      margin0:0,
    }
  },
  checked: {},
  '&$unchecked': {
    color: '#d1243a',
    padding:0,
    margin0:0,
  },
unchecked: {
  padding:0,
  margin0:0,},

font:{
  fontSize:"8px",
  color:"#d4d7dd",   
  padding:0,
  margin0:0,
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
//  minWidth:400,
}

}));

const rowsObj = [

  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Active'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Canceled'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Active'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Canceled'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Active'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Active'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Canceled'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Active'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Canceled'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Active'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Canceled'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Active'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Active'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Canceled'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Active'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Canceled'},
  {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Active'},

];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <div  >
    <TableContainer className={classes.container} >
      <Table>
      <TableHead>
          <TableCell className={classes.header}>FILTERS APPLIED:</TableCell>
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
              <TableCell className={classes.font} >{row.compamy}</TableCell>
              <TableCell className={classes.font}>{row.product}</TableCell>
              <TableCell className={classes.font}>{row.date}</TableCell>
              {row.status==='Active'? 
              <TableCell className={classes.font} style={{color:"green", fontSize:"10px"}}><Radio classes={{root: classes.radio, checked: classes.checked}} checked={true} size={"small"}/>{row.status}</TableCell>:
              <TableCell className={classes.font} style={{color:"#d1243a",fontSize:"10px",}}><Radio classes={{root: classes.radio, checked: classes.unchecked}} checked={true} size={"small"}/>{row.status}</TableCell>}
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}


