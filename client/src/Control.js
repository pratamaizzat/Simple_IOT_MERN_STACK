import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getControl, addControl } from './actions/control';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import IndicatorOn from './IndicatorOn';
import IndicatorOff from './IndicatorOff';
import { withStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import './Control.css';

const GreenCheckbox = withStyles({
  root: {
    color: indigo[400],
    '&$checked': {
      color: indigo[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Control = ({
  getControl,
  addControl,
  control: {
    gpio
  }
}) => {
  useEffect(() => {
    getControl();
  }, [getControl]);

  const [formData, setFormData] = useState({
    gpio1: true,
    gpio2: true,
    gpio3: true,
    gpio4: true,
    gpio5: true,
    gpio6: true,
    gpio7: true,
    gpio8: true
  })
  
  const {
    gpio1,
    gpio2,
    gpio3,
    gpio4,
    gpio5,
    gpio6,
    gpio7,
    gpio8
  } = formData;

  // const onChange = e => setFormData({
  //   ...formData, [e.target.name]: e.target.value
  // });
  return (
    <Fragment>
      {gpio === null ? ( <Spinner/> ) : ( <Fragment>
        <div className='indicator'>
          {gpio.gpio1 !== false ? (<IndicatorOn/>) : (<IndicatorOff/>)}
          {gpio.gpio2 !== false ? (<IndicatorOn/>) : (<IndicatorOff/>)}
          {gpio.gpio3 !== false ? (<IndicatorOn/>) : (<IndicatorOff/>)}
          {gpio.gpio4 !== false ? (<IndicatorOn/>) : (<IndicatorOff/>)}
          {gpio.gpio5 !== false ? (<IndicatorOn/>) : (<IndicatorOff/>)}
          {gpio.gpio6 !== false ? (<IndicatorOn/>) : (<IndicatorOff/>)}
          {gpio.gpio7 !== false ? (<IndicatorOn/>) : (<IndicatorOff/>)}
          {gpio.gpio8 !== false ? (<IndicatorOn/>) : (<IndicatorOff/>)}
        </div>
        <div className='form_input'>
          <form onSubmit={e => {
            e.preventDefault();
            addControl(formData);
          }}>
            <div className='form_gpio'>
              <div className='gpio1'>
                <FormControlLabel
                control={
                  <GreenCheckbox 
                  checked={gpio1} 
                  name="gpio1" 
                  value={gpio1}
                  onChange={() => {
                    setFormData({...formData, gpio1: !gpio1});
                  }} />}
                label="GPIO 1"
                labelPlacement="bottom"
                />
              </div>
              <div className='gpio2'>
                <FormControlLabel
                control={
                  <GreenCheckbox 
                  checked={gpio2} 
                  name="gpio2" 
                  value={gpio2}
                  onChange={() => {
                    setFormData({...formData, gpio2: !gpio2});
                  }} />}
                label="GPIO 2"
                labelPlacement="bottom"
                />
              </div>
              <div className='gpio3'>
                <FormControlLabel
                control={
                  <GreenCheckbox 
                  checked={gpio3} 
                  name="gpio3" 
                  value={gpio3}
                  onChange={() => {
                    setFormData({...formData, gpio3: !gpio3});
                  }} />}
                label="GPIO 3"
                labelPlacement="bottom"
                />
              </div>
              <div className='gpio4'>
                <FormControlLabel
                control={
                  <GreenCheckbox 
                  checked={gpio4} 
                  name="gpio4" 
                  value={gpio4}
                  onChange={() => {
                    setFormData({...formData, gpio4: !gpio4});
                  }} />}
                label="GPIO 4"
                labelPlacement="bottom"
                />
              </div>
              <div className='gpio5'>
                <FormControlLabel
                control={
                  <GreenCheckbox 
                  checked={gpio5} 
                  name="gpio5" 
                  value={gpio5}
                  onChange={() => {
                    setFormData({...formData, gpio5: !gpio5});
                  }} />}
                label="GPIO 5"
                labelPlacement="bottom"
                />
              </div>
              <div className='gpio6'>
                <FormControlLabel
                control={
                  <GreenCheckbox 
                  checked={gpio6} 
                  name="gpio6" 
                  value={gpio6}
                  onChange={() => {
                    setFormData({...formData, gpio6: !gpio6});
                  }} />}
                label="GPIO 6"
                labelPlacement="bottom"
                />
              </div>
              <div className='gpio7'>
                <FormControlLabel
                control={
                  <GreenCheckbox 
                  checked={gpio7} 
                  name="gpio7" 
                  value={gpio7}
                  onChange={() => {
                    setFormData({...formData, gpio7: !gpio7});
                  }} />}
                label="GPIO 7"
                labelPlacement="bottom"
                />
              </div>
              <div className='gpio8'>
                <FormControlLabel
                control={
                  <GreenCheckbox 
                  checked={gpio8} 
                  name="gpio8" 
                  value={gpio8}
                  onChange={() => {
                    setFormData({...formData, gpio8: !gpio8});
                  }} />}
                label="GPIO 8"
                labelPlacement="bottom"
                />
              </div>
            </div>
            <div className='button_submit'>
              <Button variant='outlined' color='primary' type='submit'>Send</Button>                
            </div>
          </form>
        </div>
      </Fragment>)}
    </Fragment>
  )
}

Control.propTypes = {
  getControl: PropTypes.func.isRequired,
  addControl: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  control: state.control
})

export default connect(mapStateToProps, { getControl, addControl }) (Control)
