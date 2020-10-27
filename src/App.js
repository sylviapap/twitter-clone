import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
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
        <Grid item sm={2} className={classes.item}><Sidebar /></Grid>
        <Grid item sm={6} className={classes.item}><Feed /></Grid>
        <Grid item sm={4} className={classes.item}><Widgets /></Grid>
      </Grid>
    </div>
  );
}

export default App;
