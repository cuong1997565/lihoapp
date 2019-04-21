import React, { PureComponent } from 'react';
import { Image, View, SafeAreaView, Alert, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import R from 'res/R';
export default class ProfileUser extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Input
                    placeholder='Full name'
                    leftIcon={<Image source={require('../../assets/menu.png')}
                        style={{ width: 20, height: 25 }}
                    />}
                    inputStyle={styles.text}
                    leftIconContainerStyle={{ marginRight: 10 }}

                />
                <Input
                    placeholder='Email'
                    leftIcon={<Image source={require('../../assets/menu.png')}
                        style={{ width: 20, height: 25 }}
                    />}
                    inputStyle={mStyle.text}
                    leftIconContainerStyle={{ marginRight: 10 }}

                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: R.dimension.smallFont
    }
})