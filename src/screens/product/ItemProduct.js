import React, { PureComponent } from 'react';
import { Image, View, Text, StyleSheet, FlatList} from 'react-native';
import { connect } from 'react-redux';
import WirefRameData from './../../data/wirefRameData';

class ProductItem extends PureComponent {
    render() {
        return (
            <View>
                <View style={ styles.item }>
                    <View style={{flex: 3, justifyContent: "center"}}>
                        <Image 
                            style={{ width: 125, height: 125 }} 
                            source={{ uri: this.props.item.image }}>
                        </Image>
                    </View>
                    <View style={{flex: 6}}>
                        <Text style={styles.name_item_product}> { this.props.item.name }  </Text>
                        <Text style={styles.price_item_product}>{ this.props.item.price } </Text>
                        <Text style={{ color:"black" }}>{ this.props.item.date }</Text>
                    </View>
                </View>
                <View style={{paddingLeft:10}}>
                    <Text  style={{ fontSize:18, textTransform:'uppercase',color:'grey',fontWeight:'bold' }}> { this.props.item.name_shop } </Text>
                    <Text> { this.props.item.address_shop } </Text>
                </View> 
            </View>
        );
    }
}


class ItemProduct extends PureComponent {
      render() {
        return (
            <View>
                <FlatList
                    data =  { WirefRameData }
                    renderItem = {({ item, index }) => {
                    return (
                        <ProductItem 
                        item={item}
                        index = {index}
                        ></ProductItem>
                    );
                    }}
                ></FlatList>
            </View>
        );
      }
}

export default connect()(ItemProduct)

const styles = StyleSheet.create({
    item: {
        padding: 10,
        flexDirection:"row",
        marginTop: 15 
    },
    
    name_item_product : {
        textTransform:'capitalize', 
        color:'black', 
        fontWeight: 'bold', 
        fontSize: 18
    },
    price_item_product : {
        fontSize: 55,
        fontWeight: 'bold',
        color: 'black'
    }
});