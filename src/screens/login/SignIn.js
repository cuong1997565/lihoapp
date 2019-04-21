import React, { PureComponent } from 'react';
import { Image, View, SafeAreaView, Alert, TouchableOpacity, Text, StyleSheet, TouchableHighlight, Platform } from 'react-native';
import { Navigation } from "react-native-navigation";
import { connect } from 'react-redux';
import { Input, Header } from 'react-native-elements';
import R from 'res/R';
import * as appActions from "../../reducers/app/actions";


class SignIn extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  _onPress=()=>{
    this.props.dispatch(appActions.login());
  }

  render() {
    return (
      <View style={[R.palette.background,{justifyContent:'center',alignItems:'center'}]}>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={this._onPress}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default connect()(SignIn)

const styles = StyleSheet.create({

})