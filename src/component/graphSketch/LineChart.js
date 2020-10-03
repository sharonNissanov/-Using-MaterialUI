import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {Chart,ArgumentAxis, ValueAxis,LineSeries,Title,Legend} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';
import { confidence as data } from '../demo-data/line-chart-data';

const format = () => tick => tick;

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendLabelStyles = theme => ({
  label: { 
    paddingTop: theme.spacing(50),
    whiteSpace: 'nowrap',
  },
  
});
const legendItemStyles = () => ({
  item: {
    flexDirection: 'column',
  },
});

const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item className={classes.item} {...restProps} />
);

const demoStyles = () => ({
  chart: {   
    paddingRight: '20px',
    backgroundColor:"#222b37",
    border: "solid ", 
    maxWidth: 350,
    maxHeight:150, 
  },
  title: {
    whiteSpace: 'pre',    
  },

});

const ValueLabel = (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={`${text}%`}
   
    />
  );
};

const titleStyles = {
  title: {
   whiteSpace: 'pre',
   fontSize:"8px",
   textAlign: 'left',
   backgroundColor:"#4b6281",
   color:"white"
  },
  hi:{
  background:"blue"
  }

};
const TitleText = withStyles(titleStyles)(({ classes, ...props }) => (
  <Title.Text {...props} className={classes.title} />
));

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    const { classes } = this.props;
    return (
      <Paper >
        <Chart 
          data={chartData}
          className={classes.chart}
        >
          <ArgumentAxis tickFormat={format}  />
          <ValueAxis
            max={100}
            min={5}
            labelComponent={ValueLabel}
          />

          <LineSeries  className={classes.hi}
            name="TV news"
            valueField="tvNews"
            argumentField="year"
            
           
          />
          <Title
            text={`BTC-USD-CEM`}
            textComponent={TitleText}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

export default withStyles(demoStyles, { name: 'Demo' })(Demo);