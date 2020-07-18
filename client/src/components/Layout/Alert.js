import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
  alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.altertType}`}>
        {alert.msg}
      </div>
    ));
};

Alert.proptypes = {
  alerts: Proptypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default Alert;
