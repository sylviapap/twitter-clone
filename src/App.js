import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RightPanel from "./RightPanel";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  item: {
    width: "-webkit-fill-available"
  }
})

function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container >
        <Grid item sm={3} className={classes.item}><Sidebar /></Grid>
        <Grid item sm={5} className={classes.item}><Feed /></Grid>
        <Grid item sm={4} className={classes.item}><RightPanel /></Grid>
      </Grid>
    </div>
  );
}

export default App;