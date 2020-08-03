import React, {Component} from 'react'
import './App.scss'
import {connect} from 'react-redux'
import Counter from './Counter'
import {Add, Sub, addAsync} from './redux/actions/actionCreates'

class App extends Component {

  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.AddCounter}>Добавить 1</button>
          <button onClick={this.props.SubCounter}>Вычесть 1</button>
          <hr/>
          <button onClick={() => this.props.onAddAsync(100)}> Добавить 100</button>
        </div>
        <Counter/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
     AddCounter: () => dispatch(Add()),
     SubCounter: () => dispatch(Sub()),
     onAddAsync: (number) => dispatch(addAsync(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)
