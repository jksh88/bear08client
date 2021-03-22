import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 100,
      marginRight: 450,
      marginLeft: 450,
    },
    textField: {
      marginBottom: 10,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    button: {
        backgroundColor: "DodgerBlue",
      },
  })
);

const Login = () => {
  const classes = useStyles();
  let [htmlData, setHtmlData] = useState({ firstName: "" });

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h1> Login </h1>
        <form>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TextField
                value={htmlData.firstName}
                onChange={(e) =>
                  setHtmlData({ ...htmlData, firstName: e.target.value })
                }
                id="outlined-basic"
                label="User Name"
                variant="outlined"
                type="text"
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={htmlData.firstName}
                onChange={(e) =>
                  setHtmlData({ ...htmlData, firstName: e.target.value })
                }
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="text"
                className={classes.textField}
              />
            </Grid>
          </Grid>
          <Button className={classes.button} type="submit"> Login </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
