import React, { PureComponent } from 'react';
import { Slider,  View, Text, StyleSheet,  Platform, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Navigation } from "react-native-navigation";
import { connect } from 'react-redux';

import { Input, Header } from 'react-native-elements';
import ItemProduct from './../product/ItemProduct';
import ListProduct from './../product/ListProduct';
import { TabView, SceneMap } from 'react-native-tab-view';
import R from 'res/R';

class MyRewardScreen extends PureComponent {

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
                    centerComponent={{ text: 'My Reward', style: { color: '#fff' } }}
                    containerStyle={{ marginTop: Platform.OS === 'ios' ? -0 : - 25, backgroundColor: R.colors.bgApp }}
                />
                <ScrollView>
                    <View>
                        {/* menu */}
                        <MenuItem></MenuItem>
                        {/* end menu */}
                        
                        {/* item product  */}
                        <ItemProduct></ItemProduct>
                        {/*end item product  */}
                        {/* slider */}
                        <Slider
                        style={{width: 200, height: 40}}
                        minimumValue={50}
                        maximumValue={200}
                        minimumTrackTintColor="red"
                        maximumTrackTintColor="green"
                        />
                        {/* end slider */}
                        {/* button */}
                        <Button
                            title="AVAILABLE E-VOUCHER(S)"
                            color="#AA0000"
                            accessibilityLabel="Learn more about this purple button"
                        />
                        {/*end button */}
                        <ListProduct></ListProduct>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

class MenuItem extends PureComponent {
    _onPress = () => {
        Navigation.popToRoot("RewardsScreen");
    }
    render() {
        return (
        <View style={ styles.menu }>
            <View style={ styles.left }>
                <Text style={ styles.menu_left }>rewards</Text>
            </View> 
            {/* <View style={ styles.center }>
                <Text style={ styles.menu_center }>catalogue</Text>
            </View>  */}
            <TouchableOpacity  style={ styles.center } onPress={this._onPress}>
                    <Text style={ styles.menu_center }>catalogue</Text>
            </TouchableOpacity>
            <View style={ styles.right }>
                <Text style={ styles.menu_right }>history</Text>
            </View>
        </View>
        );
    }
}


export default connect()(MyRewardScreen)

const styles = StyleSheet.create({
    menu: {
        borderBottomColor: "red", 
        flexDirection: "row",
        backgroundColor: "#D3D3D3"
    },
    left: {
        padding: 10,
        // justifyContent: "center",
        flex: 2,
        borderBottomWidth: 3,
        borderBottomColor: 'red',
    },
    center: {
        padding: 10,
        justifyContent: "center",
        flex: 2,
        borderBottomWidth: 3,
        borderBottomColor: 'grey',
    },
    right: {
        padding: 10,
        justifyContent: "center",
        flex: 2,
        borderBottomWidth: 3,
        borderBottomColor: 'grey',
    },
    menu_left:{
        textTransform:'uppercase',
        fontSize: 18,
        color:"red",
    },
    menu_center:{
        textTransform:'uppercase',
        fontSize: 18,
        color:"grey",
    },
    menu_right:{
        textTransform:'uppercase',
        fontSize: 18,
        color:"grey",
    },
})