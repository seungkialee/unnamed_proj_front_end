import React, { Component } from "react";
import { connect } from "react-redux";

const Errors = props => {
  let errors = props.result.error;
  let errorMap = errors.map(msg => <div>{msg}</div>);
  return <div>{errorMap}</div>;
};

const mapStateToProps = state => {
  return { result: state.result };
};

export default connect(mapStateToProps)(Errors);
