import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text
} from 'react-native';
import {connect} from 'react-redux';
function mapStateToProps(state)
{
    return{
        counter:state.counter
    }
}
function mapDispatchToProps(dispatch)
{
  return{
    incrementCount:()=>dispatch({type:'Increase'}),
    decrementCount:()=>dispatch({type:'Decrease'}),
    resetCount:()=>dispatch({type:'Reset'})
  }

}
class CounterApp extends Component {

  render() {
    return (
      <SafeAreaView styles={styles.container}>
        <Button
          title="increment"
          onPress={() => this.props.incrementCount()}
        />
        <Text>{this.props.counter}</Text>
        <Button
          title="decrement"
          onPress={() => this.props.decrementCount()}
        />
        <Button
          title="Reset"
          onPress={() => this.props.resetCount()}
        />
      </SafeAreaView>
    );
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
