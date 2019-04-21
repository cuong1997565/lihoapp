import React, { PureComponent } from 'react';
import { Image, View, Text, StyleSheet, FlatList} from 'react-native';
import { connect } from 'react-redux';

class RewardsScreen extends PureComponent {
    render () {
        return (
            <View>
                <Text>Xin chào </Text>
            </View>
        )
    }
} 

export default connect()(RewardsScreen)
