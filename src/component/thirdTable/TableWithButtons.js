import { makeStyles } from '@material-ui/core/styles';  
import React from 'react';
import ToggleButtons from './ToggleButtons';

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

const useStyles = makeStyles((theme) => ({

  container:{
    maxHeight:190,
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
},

}));


const infoStyle = { color: 'blue', fontSize:"9px", display: "inline", };
const warningStyle = { color: 'yellow', fontSize:"9px", display: "inline", };
const failedStyle = { color: 'red', fontSize:"9px", display: "inline", };
const info = <div style={ infoStyle }>INFO</div>;
const warning = <div style={ warningStyle }>WRANING</div>;
const failed = <div style={ failedStyle }>failed</div>;
const details  ='EUR-USD - imlied price: 1.1762 - message : inserted id : 1782721 '

const message1 = <div>[30 Apr 2020 17:09] production. INFO:EUR-USD {info} EUR-USD - imlied price: 1.1762 - message : inserted id : 1782721 </div>
const message2 = <div>[30 Apr 2020 17:09] production. INFO:EUR-USD {warning} login {failed} Wrong number of segments </div>

const rowsObj = [
{details:message1 },
{details:message1 },
{details:message2 },

{details:message1 },
{details:message1 },
{details:message2 },

{details:message1 },
{details:message1 },
{details:message2 },

{details:message1 },
{details:message1 },
{details:message2 },

{details:message1 },
{details:message1 },
{details:message2 },

{details:message1 },
{details:message1 },
{details:message2 },

];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <div  >
    <TableContainer className={classes.container} >
      <Table>
      <TableHead>
          <TableCell className={classes.font} className={classes.header}><ToggleButtons/></TableCell>
      </TableHead>
        <TableBody >
        {rowsObj.map((row) => (
            <TableRow key={row.compamy} >
              <TableCell className={classes.font} >{row.details}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
