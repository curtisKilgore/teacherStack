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

export default connect(mapStateToProps)(Alert);
