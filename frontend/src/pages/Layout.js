import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline, withStyles } from '@material-ui/core';

import { routes } from '../setup/Router';
import AppHeader from '../components/AppHeader';

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

class Layout extends Component {
  
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: '',
  }

  componentDidMount() {

  }
  render() {
    const { children } = this.props;
      return (
          <Fragment>
          <CssBaseline />
            <Switch>
              {
                routes.map(route => <Route key={route.path} component={AppHeader} path={route.path} />)
              }
            
            </Switch>
            {children}
          </Fragment>
      );
  }
}

export default withStyles(styles)(Layout);
