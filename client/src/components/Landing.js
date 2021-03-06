import React, { useState } from "react";
import axios from "axios";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Card, CardContent, CardMedia, CardHeader } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Slider from "@material-ui/core/Slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Paper } from "@material-ui/core";

import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  palette: {
    background: {
      default: "#000000",
    },
  },
  card: {
    padding: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Landing = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState({ data: [0, 0], loading: true });
  const [input, setInput] = useState({
    ses: 1,
    sex: "female",
    age: 0,
    sibsp: 0,
    parch: 0,
    fare: 0,
    embarked: "C",
  });

  const handleRadio = (e) => {
    if (e.target.name === "sex") {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    } else {
      console.log(parseInt(e.target.value, 10));
      setInput({
        ...input,
        [e.target.name]: parseInt(e.target.value, 10),
      });
    }
    setResult({ ...result, loading: true });
    console.log("handleRadio");
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e.target);
    console.log(input);
    console.log("====================");
  };

  const handleSlider = (e, newValue) => {
    if (e.target.ariaLabel !== null) {
      setInput({
        ...input,
        [e.target.ariaLabel]: newValue,
      });
    }
    setResult({ ...result, loading: true });
    console.log("handleSlider");
    console.log(e);
    console.log(e.target.ariaLabel);
    console.log(newValue);
    console.log(input);
    console.log("====================");
  };

  const handleMenu = (e, newValue) => {
    setInput({
      ...input,
      [e.target.name]: newValue.props.value,
    });
    setResult({ ...result, loading: true });
    console.log(e.target.name);
    console.log(newValue.props.value);
    console.log(input);
    console.log("====================");
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newInput = Object.values(input).join(" ");
    console.log(newInput);
    console.log(typeof newInput);
    axios
      .post("https://evening-chamber-63204.herokuapp.com/predict_api", {
        data: newInput,
      })
      .then((res) => {
        console.log("In axios");
        console.log(res.data);
        console.log("before setResult, result is:", result);
        setResult({ data: res.data, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Titanic Predictor
          </Typography>
        </Toolbar>
      </AppBar>{" "}
      <br />
      <Grid container lg={12} justify="center" alignItems="center" spacing={2}>
        <Grid item>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image="https://faithmag.com/sites/default/files/styles/article_full/public/2018-09/titanic2.jpg?h=6521bd5e&itok=H8td6QVv"
              title="Contemplative Reptile"
              style={{ width: "800px", height: "500px" }}
            />
          </Card>
        </Grid>
      </Grid>
      <br />
      <br />
      <Container component="main" maxWidth="md">
        <Card variant="elevation" className={classes.root}>
          <Box m={4}>
            <form className={classes.form} noValidate onSubmit={submitForm}>
              <Grid container spacing={3} justify="space-evenly">
                <Grid
                  container
                  item
                  lg={12}
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item>
                    <Avatar className={classes.avatar}>
                      <DirectionsBoatIcon fontSize="large" />
                    </Avatar>
                  </Grid>
                  <Grid item alignContent="right">
                    <Typography variant="h3">
                      Would you survive the Titanic?
                    </Typography>
                  </Grid>
                </Grid>
                {/*Rjarwijfqgjnlirgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg*/}
                <Grid item sm={9} alignItems="center">
                  <Card variant="elevation" className={classes.root}>
                    <CardHeader
                      title="What Is Your Ticket Class?"
                      subheader="A proxy for socio-economic status."
                    />
                    <Divider variant="middle" />
                    <Box m={4}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Ticket Class: </FormLabel>
                        <Select
                          name="ses"
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={input.ses}
                          onChange={handleMenu}
                        >
                          <MenuItem value={1}>Upper Class</MenuItem>
                          <MenuItem value={2}>Middle Class</MenuItem>
                          <MenuItem value={3}>Lower Class</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Card>
                </Grid>
                <br />
                <Grid item sm={9} alignItems="center">
                  <Card variant="elevation" className={classes.root}>
                    <CardHeader title="Your Gender:" />
                    <Divider variant="middle" />
                    <Box m={6}>
                      <FormControl component="fieldset" autoWidth={true}>
                        <FormLabel component="legend">Gender: </FormLabel>
                        <RadioGroup
                          aria-label="gender"
                          name="sex"
                          value={input.sex}
                          onChange={handleRadio}
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Other"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Card>
                </Grid>
                <br />
                <Grid item sm={9} alignItems="center">
                  <Card variant="elevation" className={classes.root}>
                    <CardHeader
                      title="How Old Are You?"
                      subheader="The oldest recorded passenger was 80 years old."
                    />
                    <Divider variant="middle" />
                    <Box m={6}>
                      <FormControl fullWidth={true}>
                        <FormLabel component="legend">Age:</FormLabel>
                        <Slider
                          itemID="age"
                          min={1}
                          step={1}
                          max={80}
                          marks={[
                            { value: 0, label: "0 Years" },
                            { value: 80, label: "80 Years" },
                          ]}
                          onChangeCommitted={handleSlider}
                          valueLabelDisplay="auto"
                          aria-labelledby="non-linear-slider"
                          aria-label="age"
                        />
                      </FormControl>
                    </Box>
                  </Card>
                </Grid>
                <br />
                <Grid item sm={9} alignItems="center">
                  <Card variant="elevation" className={classes.root}>
                    <CardHeader
                      title="Who Did You Come With?"
                      subheader="The average person came with 1 Sibling/ Spouse. The most was 8."
                    />
                    <Divider variant="middle" />
                    <Box m={6}>
                      <FormControl component="fieldset" autoWidth={true}>
                        <FormLabel component="legend">
                          Number of Sibling/ Spouses on board:
                        </FormLabel>
                        <RadioGroup
                          aria-label="sibsp1"
                          name="sibsp"
                          value={input.sibsp}
                          onClick={handleRadio}
                          row
                        >
                          <FormControlLabel
                            value={0}
                            control={<Radio />}
                            label="0"
                          />
                          <FormControlLabel
                            value={1}
                            control={<Radio />}
                            label="1"
                          />
                          <FormControlLabel
                            value={2}
                            control={<Radio />}
                            label="2"
                          />
                          <FormControlLabel
                            value={3}
                            control={<Radio />}
                            label="3"
                          />
                          <FormControlLabel
                            value={4}
                            control={<Radio />}
                            label="4"
                          />
                          <FormControlLabel
                            value={5}
                            control={<Radio />}
                            label="5"
                          />
                          <FormControlLabel
                            value={6}
                            control={<Radio />}
                            label="6"
                          />
                          <FormControlLabel
                            value={7}
                            control={<Radio />}
                            label="7"
                          />
                          <FormControlLabel
                            value={8}
                            control={<Radio />}
                            label="8"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Card>
                </Grid>
                <br />
                <Grid item sm={9} alignItems="center">
                  <Card variant="elevation" className={classes.root}>
                    <CardHeader title="Who Did You Come With? (Pt.II)" />
                    <Divider variant="middle" />
                    <Box m={6}>
                      <FormControl component="fieldset" autoWidth={true}>
                        <FormLabel component="legend">
                          Number of Parents/ Children on board:
                        </FormLabel>
                        <RadioGroup
                          aria-label="parch1"
                          name="parch"
                          value={input.parch}
                          onClick={handleRadio}
                          row
                        >
                          <FormControlLabel
                            value={0}
                            control={<Radio />}
                            label="0"
                          />
                          <FormControlLabel
                            value={1}
                            control={<Radio />}
                            label="1"
                          />
                          <FormControlLabel
                            value={2}
                            control={<Radio />}
                            label="2"
                          />
                          <FormControlLabel
                            value={3}
                            control={<Radio />}
                            label="3"
                          />
                          <FormControlLabel
                            value={4}
                            control={<Radio />}
                            label="4"
                          />
                          <FormControlLabel
                            value={5}
                            control={<Radio />}
                            label="5"
                          />
                          <FormControlLabel
                            value={6}
                            control={<Radio />}
                            label="6"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Card>
                </Grid>
                <br />
                <Grid item sm={9} alignItems="center">
                  <Card variant="elevation" className={classes.root}>
                    <CardHeader
                      title="How Much Did You Pay?"
                      subheader="(Or Didn't) The average price was £53, equivalent to about $6,200"
                    />
                    <Divider variant="middle" />
                    <Box m={6}>
                      <FormControl fullWidth={true}>
                        <FormLabel component="legend">
                          Price of Fare Paid:{" "}
                        </FormLabel>
                        <br />
                        <Slider
                          itemID="fare"
                          min={0}
                          step={1}
                          max={512}
                          marks={[
                            { value: 0, label: "Snuck up ship" },
                            { value: 512, label: "£512" },
                          ]}
                          onChangeCommitted={handleSlider}
                          valueLabelDisplay="auto"
                          aria-labelledby="non-linear-slider1"
                          aria-label="fare"
                        />
                      </FormControl>
                    </Box>
                  </Card>
                </Grid>
                <br />
                <Grid item sm={9} alignItems="center">
                  <Card variant="elevation" className={classes.root}>
                    <CardHeader
                      title="Which Port Did You Embark From?"
                      subheader="Titanic went from England, then to France, and left from Ireland."
                    />
                    <Divider variant="middle" />
                    <Box m={6}>
                      <FormControl component="fieldset" fullWidth={true}>
                        <Select
                          name="embarked"
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={input.embarked}
                          onChange={handleMenu}
                        >
                          <MenuItem value="S">
                            1st: Southampton, England
                          </MenuItem>
                          <MenuItem value="C">2nd: Cherbourg, France </MenuItem>
                          <MenuItem value="Q">
                            3rd: Queenstown, Ireland
                          </MenuItem>
                        </Select>
                        <FormHelperText>
                          Port in which a passenger started a journey
                        </FormHelperText>
                      </FormControl>
                    </Box>
                  </Card>
                </Grid>
                <br />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleClickOpen}
                >
                  Predict
                </Button>
              </Grid>
            </form>
            <Box mt={8}>
              <Dialog
                fullWidth={true}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                  align="left"
                >
                  You Would Most Likely Be:
                </DialogTitle>
                <DialogContent dividers>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography variant="h2" component="h2" align="center">
                        {console.log("after setResult, result is:", result)}
                        {console.log("result.data[0]:", result.data[0])}
                        {result.loading
                          ? `Loading`
                          : result.data[0] > result.data[1]
                          ? `Dead`
                          : `Alive`}
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.pos}
                        color="textPrimary"
                      >
                        Probability of Death:{" "}
                        {result.loading
                          ? `-`
                          : (result.data[0] * 100).toFixed(2)}
                        %
                        <br />
                        Probability of Survival:{" "}
                        {result.loading
                          ? `-`
                          : (result.data[1] * 100).toFixed(2)}
                        %
                      </Typography>
                      <br />
                      <Typography
                        variant="body2"
                        component="p"
                        color="textPrimary"
                      >
                        Your Selection:
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color="textSecondary"
                      >
                        Ticket Class: {input.ses} <br />
                        Gender: {input.sex} <br />
                        Age {input.age} <br />
                        No. of Siblings/ Spouses: {input.sibsp} <br />
                        No. of Parents/ Children: {input.parch} <br />
                        Fare Price: {input.fare} <br />
                        Port: {input.embarked} <br />
                      </Typography>
                    </CardContent>
                  </Card>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose} color="primary">
                    Back
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Box>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Landing;
