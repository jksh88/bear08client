import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Formik, FastField , Form } from "formik";
import {placeholder_fields, form_fields} from './form_fields/fields'


const useStyles = makeStyles((theme) =>
createStyles({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginRight: 50,
    marginLeft: 50,
  },
  textField: {
    marginBottom: 10,
    marginRight:20,
    height:"auto",
    width: "auto",

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    backgroundColor: "DodgerBlue",
  },
  button_text: {
    fontStyle: "bold",
    fontColor: "white",
  },
})
);

function SubmitApp() {

  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  //const yourUrl = "http://127.0.0.1:5000/getHtmlData";

  const onSubmit = async (values: any) => {
      console.log("VALUES: ", values)
  }
  

  return (
    <div className={classes.root}>
      <Formik
        initialValues={form_fields}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Paper className={classes.paper}>
          <Form>

            <Grid container spacing={3}>
              
            {Object.entries(placeholder_fields).map((data) => (
              <Grid item xs={12} md={3} sm={6}>
                <FastField 
                  name={data[0]}
                  label={data[1]}
                  type="input"
                  as={TextField}
                  className={classes.textField}
                />
              </Grid>
            ))}
            </Grid>

            <div>
              {loading ? <CircularProgress/> : <Button type="submit" className={classes.button}> Send </Button> }
            </div>
          </Form>
          </Paper>
        )}
      </Formik>
    </div>
  );
}

export default SubmitApp;
