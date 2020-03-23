import Counter from '../components/counter'
import {increment,decrement} from '../redux/action_creators'
import {connect} from 'react-redux'
//完整写法
// function mapReduxStateToProps(state){
//     return {count:state}
// }
// const mapReduxMethodToProps=dispatch=>({
//     increment:value=>dispatch(increment(value)),
//     decrement:value=>dispatch(decrement(value))
// })
//export default connect(mapReduxStateToProps,mapReduxMethodToProps)(Counter)
//简写

export default connect(state=>({count:state}),{increment,decrement})(Counter)