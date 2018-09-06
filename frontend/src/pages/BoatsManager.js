import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import {
  withStyles,
  Typography,
  Button,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemSecondaryAction,
  Grid,
  ButtonBase,
} from '@material-ui/core';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
//import moment from 'moment';
import { compose } from 'recompose';
import { orderBy } from 'lodash';
import { Link } from 'react-router-dom';
import { fetchBoats, deleteBoat } from '../reducers/boatsEndPoint/action';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 800,
    padding: 2 * theme.spacing.unit,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  fab: {
    position: 'absolute',
    bottom: 3 * theme.spacing.unit,
    right: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      bottom: 2 * theme.spacing.unit,
      right: 2 * theme.spacing.unit,
    },
  },
});

const mapStateToProps = state => ({
  boats: state.get('boats'),
});

const mapDispachToProps = dispatch => ({
  getBoats: () => dispatch(fetchBoats()),
  deleteBoat: (boatEntity) => dispatch(deleteBoat(boatEntity)),
});

class BoatsManager extends Component {

  static propTypes = {
      boats: ImmutablePropTypes.map,
      getBoats: PropTypes.func,
      deleteBoat: PropTypes.func,
      classes: PropTypes.object,
  };

  static defaultProps = {
      boats: Map(),
      getBoats: () => {},
      deleteBoat: () => {},
      classes: {},
  }
  
  constructor() {
    
    super();
    
    this.state = { loading: false };
  }

  componentDidMount() {

      this.props.getBoats();
  }

  render() {
    
    const { classes,boats } = this.props;
    
    const boatsList = boats.get('boatsList');

    console.log(boatsList);

    return (
      <Fragment>
        <Typography variant="display1">Boats Manager</Typography>
        {boatsList.length > 0 ? (
          /*<Paper elevation={1} className={classes.root}>
            <List>
              {orderBy(boatsList, ['arrival_date', 'name'], ['desc', 'asc']).map(boat => (
                <ListItem key={boat.id} button component={Link} to={`/boats/${boat.id}`}>
                  <ListItemText
                    primary={boat.name}
                    secondary={boat.arrival_date && `Updated ${moment(boat.arrival_date).fromNow()}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => {this.props.deleteBoat(boat);}} color="inherit">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>*/
          <Paper elevation={1} className={classes.root}>
              <List>
                  {orderBy(boatsList, ['arrival_date', 'name'], ['desc', 'asc']).map(boat => (
                      <ListItem key={boat.id} button component={Link} to={`/boats/${boat.id}`}>
                            <Grid container spacing={16}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt={boat.name} src={boat.photo} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={40}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subheading">
                                            {boat.name}
                                            </Typography>
                                            <Typography gutterBottom>
                                            {boat.work_description}
                                            </Typography>
                                        </Grid>                                     
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subheading">{boat.status?boat.status:'unknow'}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => {this.props.deleteBoat(boat);}} color="inherit">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                      </ListItem>  
                    ))}
              </List>
          </Paper>
        ) : (
          !this.state.loading && <Typography variant="subheading">No boats to display</Typography>
        )}
          <Button
          variant="fab"
          color="secondary"
          aria-label="add"
          className={classes.fab}
          component={Link}
          to="/boats/new"
          >
          <AddIcon />
          </Button>
      </Fragment>
    );
  }
}

export default compose(
  connect(mapStateToProps,mapDispachToProps),
  withStyles(styles),
)(BoatsManager);
