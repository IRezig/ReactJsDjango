import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

export class Profile extends Component {
  state = {
    
  };

  static propTypes = {
    
  };

  onSubmit = (e) => {
    
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    
    const {  } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Hello</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { createMessage })(Profile);