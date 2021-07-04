import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Button from "@material-ui/core/Button";

import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  //const [setValue] = React.useState("Controlled");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <React.Fragment>
      <Header />
      <Typography
        component="h2"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Photo Upload
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Take your time and enjoy the momment uploading great photos and
        including your comments about each one of them.
      </Typography>
      <div align="center">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Heading" />
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-textarea"
              label="Multiline Comments"
              placeholder="Comments"
              multiline
            />
          </div>
        </form>
        <AddAPhotoIcon style={{ fontSize: 40, margin: 20 }} />
        <br />
        <Button variant="outlined" color="primary" href="">
          Upload
        </Button>
      </div>
      <Footer />
    </React.Fragment>
  );
}
