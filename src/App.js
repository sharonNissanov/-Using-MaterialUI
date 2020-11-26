import React, { useState } from "react";
import BasicGrid from './component/BasicGrid';
import img from './images/img.png';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      background:"#444",
      position:"relative",
      width:"100%",
      alignItems: 'center',
      fontSize:"12px",
      fontWeight:"bold",
    },
  }));

  const [show, setShow] = useState(false);
  const classes = useStyles();


  const handleClick = () => {
    if(show)
    {
      setShow(false);
    }
    else
      setShow(true);
  }

  return (
    <div >
      <Button className={classes.root} onClick={handleClick} >Click here to see the {show ? "source" :"result"}</Button>
      {show===false ? 
      <img src={img} style={{height:"90%", width:"100%"}} />
      :<BasicGrid/>} 
    
    </div>
  );
}

export default App;

