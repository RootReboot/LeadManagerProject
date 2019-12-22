import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  checkLeadErrorMessages = prevProps => {
    const { error, alert } = this.props;
    if (prevProps.error != error) {
      //Leads add error
      if (error.msg.name) {
        alert.error(`Name: ${error.msg.name.join()}`);
      }
      if (error.msg.email) {
        alert.error(`Email: ${error.msg.email.join()}`);
      }
      if (error.msg.message) {
        alert.error(`Message: ${error.msg.message.join()}`);
      }
      //Credentials
      if (error.msg.non_field_errors) {
        alert.error(error.msg.non_field_errors.join());
      }
      // LOGIN
      /*
      if (error.msg.detail) {
        alert.error(`Login: ${error.msg.detail}`);
      }
      */
    }
  };

  checkLeadSucessMessages = prevProps => {
    const { message, alert } = this.props;
    if (prevProps.message != message) {
      if (message.deleteLead) {
        alert.success(message.deleteLead);
      }
      if (message.addLead) {
        alert.success(message.addLead);
      }
    }
  };

  componentDidUpdate(prevProps) {
    this.checkLeadErrorMessages(prevProps);
    this.checkLeadSucessMessages(prevProps);
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errorsReducer,
  message: state.messagesReducer
});

export default connect(mapStateToProps)(withAlert()(Alerts));
