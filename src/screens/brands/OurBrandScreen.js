import React, { PureComponent } from 'react';
import { Image, View, SafeAreaView, Alert, TouchableOpacity, Text, StyleSheet, TouchableHighlight, Platform } from 'react-native';
import { Navigation } from "react-native-navigation";
import { connect } from 'react-redux';
import { Input, Header } from 'react-native-elements';
import R from 'res/R';

class OurBrandScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    _onPressNavigtion = () => {
        Navigation.mergeOptions("SideNavigation", {
            sideMenu: {
                left: {
                    visible: true,
                    enabled: true
                },
            },
        }
        )
    }

    render() {
        return (
            <View style={R.palette.background}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: this._onPressNavigtion }}
                    centerComponent={{ text: 'Our Brands', style: { color: '#fff' } }}
                    containerStyle={{ marginTop: Platform.OS === 'ios' ? -0 : - 25, backgroundColor: R.colors.bgApp }}
                />
                <Text>Our Brands</Text>
            </View>
        )
    }
}


export default connect()(OurBrandScreen)

const styles = StyleSheet.create({

})