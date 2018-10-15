import React, { Component } from 'react';
import {
  withStyles,
  Card,
  CardContent,
  CardActions,
  Modal,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
} from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { find } from 'lodash';

import { saveBoat, fetchBoats } from '../reducers/boatsEndPoint/action';
import { fetchWorkers } from '../reducers/workersEndPoint/action';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    width: '90%',
    maxWidth: 500,
  },
  modalCardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  marginTop: {
    marginTop: 2 * theme.spacing.unit,
  },
  FormControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  }
});



const mapStateToProps = (state) => ({
  boats: state.get('boats'), 
  workers: state.get('workers'),
});

const mapDispatchToProps = (dispatch) => ({

  saveBoat: (boatEntity) => dispatch(saveBoat(boatEntity)),
  getBoats: () =>  dispatch(fetchBoats()),
  getWorkers: () => dispatch(fetchWorkers()),
});

class BoatEditor extends Component{
  
    static defaultProps = {
        boats: ImmutablePropTypes.map,
        saveBoat: PropTypes.func, 
        getBoats: PropTypes.func,
        getWorkers: PropTypes.func,
  };
  
    static propTypes = {
        boats: Map(),
        saveBoat: () => {},
        getBoats: () => {},
        getWorkers: () => {},
  };

    componentDidMount() {

        this.props.getBoats();
        this.props.getWorkers();
  }

    constructor() {

      super();
      
      this.state ={};
    }

    render() {

        const { classes, match, history, boats, saveBoat, workers } = this.props;

        const id = match.params.id;
        const boatsList = boats.get('boatsList');
        const workersList = workers.get('workersList');
        let boatEntity = find(boatsList, {id:Number(id)});
        //boatEntity['workersList'] = workersList;
        const title = {
          name: 'Name',
          type: 'Type',
          photo: 'Photo URL',
          length: 'Length',
          work_description: 'Work Description',
          arrival_date: 'Arrival Date',
          delivery_date: 'Delivery Date',
          status: 'Status',
        };
        const boatKeys = Object.keys(title);

        return (<Form initialValues={boatEntity} onSubmit={saveBoat}>
            {({ handleSubmit, submitting, pristine, values, form }) =>(
              <Modal
                 className={classes.modal}
                 onClose={() => history.goBack()}
                 open
                 >
                 <Card className={classes.modalCard}>
                 <form onSubmit={handleSubmit}>
                <CardContent className={classes.modalCardContent}>
                {
                  boatKeys.map(key => (<Field name={key}>
                      {
                       ({ input }) =>{return (key==='name'?
                    (values.id?<TextField label={title[key]} autoFocus defaultValue={values[key]} onChange={(e)=>{values[key]= e.target.value;}}/>:<TextField label={title[key]} autoFocus {...input} />):
                    (values.id?<TextField className={classes.marginTop} label={title[key]} defaultValue={values[key]} onChange={(e)=>{values[key]= e.target.value;}}/>:<TextField className={classes.marginTop} label={title[key]} {...input} />));
                              } 
                      }
                    </Field>))
                  
                }
                  <FormControl className={classes.root}>
                        <InputLabel htmlFor="workers-simple">Worker</InputLabel>
                        <Select
                            value = { values['workerSelected']?values['workerSelected']:this.state.worker }
                            onChange = {(e) => { values['workerSelected'] = e.target.value; this.setState({[e.target.name]: e.target.value});}}
                            inputProps = {{
                              name: 'worker',
                              id: 'workers-simple'
                            }
                            }>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                       {
                            workersList.map((worker) => <MenuItem value={worker.id}>{worker.name}</MenuItem>)
                        }
                        </Select>
                    </FormControl>
                </CardContent>
                 <CardActions>
                 <Button size="small" color="primary" type="submit" disabled={values.id?false:(submitting || pristine)} onClick={()=>{if(!values.id){handleSubmit(values);form.reset();}}}>Save</Button>
                 <Button size="small" onClick={() => history.goBack()}>Cancel</Button>
                 {<pre>{JSON.stringify(values,0,2)}</pre>}
                </CardActions>
                 </form>
        </Card>
      </Modal>
    )}
  </Form>);

}

};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withStyles(styles),
)(BoatEditor);
