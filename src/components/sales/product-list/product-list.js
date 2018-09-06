import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 240,
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class ProductList extends Component {
  state = {
    spacing: '16'
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                {this.props.children}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(ProductList)