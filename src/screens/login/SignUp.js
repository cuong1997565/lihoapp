import React, { PureComponent } from 'react';
import { Image, View, SafeAreaView, Alert, TouchableOpacity, Text } from 'react-native';
import { Navigation } from "react-native-navigation";
import { connect } from 'react-redux';
import R from 'res/R';

class SignUp extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: R.colors.bgWhite }}>
               
            </SafeAreaView>
        )
    }
}


export default connect()(SignUp)