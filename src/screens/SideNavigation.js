import React, { PureComponent } from 'react';
import { Image, View, SafeAreaView, Alert, TouchableOpacity, Text, StyleSheet, TouchableHighlight, Platform, FlatList } from 'react-native';
import { Navigation } from "react-native-navigation";
import { connect } from 'react-redux';
import { Input, Header } from 'react-native-elements';
import R from 'res/R';

var componentId="PayScreen";
class SideNavigation extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <View style={styles.containSide}>
                <Header
                    containerStyle={{ marginTop: Platform.OS === 'ios' ? -0 : - 25, backgroundColor: R.colors.bgApp, marginBottom: 0 }}
                />

                <ItemSide name={"PAY | $23.50"} id={1} parent={this} />
                <ItemSide name={"PRE-ORDER"} id={2} parent={this} />
                <ItemSide name={"MY REWARDS"} id={3} parent={this} />
                <ItemSide name={"DEALS"} id={4} parent={this} />
                <ItemSide name={"SPIN THE WHEEL"} id={5} parent={this} />
                <ItemSide name={"MESSAGES"} id={6} parent={this} />
                <ItemSide name={"OUR BRANDS"} id={7} parent={this} />
                <ItemSide name={"SETTING"} id={8} parent={this} />
                <View style={[styles.containSide, { flex: 1, justifyContent: 'flex-end' }]}>
                    <Text style={[styles.textItem, { fontSize: 11 }]}> ⓒ LiHO Tea 2019. All rights reserved</Text>
                </View>
            </View>
        )
    }
}

class ItemSide extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isSelect: false
        }
    }
    _onPress = (id) => {
      
        switch (id) {
            case 1:
                Navigation.setStackRoot(componentId, {
                    component: {
                        name: "LiHOTea.PayScreen",
                        id:"PayScreen",
                        options:{
                            animations:{
                                push:{
                                    enabled:false
                                }
                            }
                        }
                    }
                });
                componentId="PayScreen";
                break;
            case 2:
                Navigation.setStackRoot(componentId, {
                    component: {
                        name: "LiHOTea.PreOrderScreen",
                        id:"PreOrderScreen",
                        options:{
                            animations:{
                               push:{
                                   enabled:false
                               }
                            }
                        }
                    },
                
                });
                componentId="PreOrderScreen";
                break;
                case 3:
                
                Navigation.setStackRoot(componentId, {
                    component: {
                        name: "LiHOTea.MyRewardScreen",
                        id:"MyRewardScreen",
                        options:{
                            animations:{
                                push:{
                                    enabled:false
                                }
                            }
                        }
                    }
                });
                componentId="MyRewardScreen";
                break;

             
            

        }
        Navigation.mergeOptions("SideNavigation", {
            sideMenu: {
                left: {
                    visible: false,
                    enabled: false
                },
            },
        }
        )
    }
    render() {
        return (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={this._onPress.bind(this, this.props.id)}
                    // onPressIn={() => this.setState({ isSelect: true })}
                    // onPressOut={() => this.setState({ isSelect: false })}
                    style={{ backgroundColor: this.state.isSelect ? R.colors.textSelect : R.colors.bgApp, flex: 1 }}>
                    <Text style={styles.textItem}>{this.props.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(SideNavigation)

const styles = StyleSheet.create({
    containSide: {
        backgroundColor: R.colors.bgApp,
        flex: 1
    },
    textItem: {
        margin: 10,
        padding: 5,
        color: R.colors.textWhite,
        fontSize: R.dimension.largeFont,
    }
})

