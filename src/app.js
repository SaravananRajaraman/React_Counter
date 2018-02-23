import React from "react";
import { connect } from "react-redux";


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  color: 'darkblue'
};

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.btnClick}>{this.props.name}</button>
    )
  }
};

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props); // prints out whatever is inside props

  }

  Add(){
    this.props.ADD();
  }
 
  render() {
    return (
      <div style={styles}>        
        <Button btnClick={this.Add.bind(this)} name='+' />
        {/*<Button btnClick={this.Add} name='+' />*/}
        <br />
        <h2> {this.props.math}  </h2>
        <Button btnClick={() => this.props.SUB()} name='--' />
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    math: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ADD: () => {
      dispatch({
        type: "ADD",
        payload: 1
      });
    },
    SUB: () => {
      dispatch({
        type: "SUB",
        payload: 1
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
