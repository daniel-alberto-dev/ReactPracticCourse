import React , {Component} from 'react'
import {connect} from 'react-redux'
import {Add2} from './redux/actions/actionCreates'

class Counter extends Component {
    render() {
        return (
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <div>
                    <button onClick={() => this.props.Counter(+1)}>Add</button>
                    <button onClick={() => this.props.Counter(-1)}>Sub</button>
                </div>
            </div>
        )
    }
}
 function mapStateToProps(state) {
     return {
         counter: state.counter2.counter2
     }
 }

 function mapDispatchToProps(dispatch) {
     return {
         Counter: (number) => dispatch(Add2(number))
     }

 }


export default connect(mapStateToProps, mapDispatchToProps) (Counter)