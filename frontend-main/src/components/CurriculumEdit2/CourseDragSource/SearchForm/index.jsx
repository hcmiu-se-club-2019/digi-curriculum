import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = (theme) => ({
  // formControl: {
  //   // color: 'red',
  //   // margin: theme.spacing(1),
  //   // minWidth: 125,
  // },
  // selectEmpty: {
  //   marginTop: theme.spacing(2),
  // },
  // root: {
  //   // backgroundColor: 'red',
  //   backgroundColor: 'rgba(255,255,255,0.5)',
  //   '& > *': {
  //     '& > *': {
  //     }
  //     // width: '50%',
  //   },
  // },
  // yeet: {},
});

class SearchForm extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.root} disableGutters>
        <form noValidate autoComplete="off">
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic-2"  fullWidth label="Major" variant="outlined">
                {/* <MenuItem value="">
                  <em>All majors</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" fullWidth label="Course name" variant="outlined" />
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default withStyles(useStyles)(SearchForm);
