import React, { Component } from 'react';
import { increment, decrement, reset } from 'actions/counter';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <div>当前计数为(显示redux计数){this.props.counter.count}</div>
        <button
          onClick={() => {
            console.log('调用自增函数');
          }}
        >
          自增
        </button>
        <button
          onClick={() => {
            console.log('调用自减函数');
          }}
        >
          自减
        </button>
        <button
          onClick={() => {
            console.log('调用重置函数');
          }}
        >
          重置
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(increment());
    },
    reset: () => {
      dispatch(reset());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
