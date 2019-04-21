import React, { PureComponent } from 'react';
import { Image, View, Text, StyleSheet, FlatList} from 'react-native';
import { connect } from 'react-redux';
import FlatListDataSecond from './../../data/FlatListDataSecond';

class ProductItem extends PureComponent 
{
   render() {
        return (
            <View style = { styles.list_product_item }>
                    <View style={ styles.product_list_image }>
                        <Image 
                            style={ styles.product_image } 
                            source={{ uri: this.props.item.image }}>
                        </Image>
                    </View>
                    <View style={ styles.list_info_product }>
                        <Text style= { styles.list_product_name} > { this.props.item.name } </Text>
                        <Text style = { styles.list_product_name_shop } > { this.props.item.name_shop } </Text>
                        <Text  style = { styles.list_product_price }> { this.props.item.price } </Text>
                    </View>
            </View>
        );
   }
}

class ListProduct extends PureComponent {
      render() {
        return (
            <View>
                <FlatList
                    data =  { FlatListDataSecond }
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

export default connect()(ListProduct)

const styles = StyleSheet.create({
    list_product_item: {
        borderBottomWidth: 1, 
        borderBottomColor: "red", 
        padding: 10,
        flexDirection:"row" 
    },
    product_list_image: {
        flex: 2, 
        justifyContent: "center",
    },
    product_image: {
        width:100, 
        height:100,
        borderRadius: 50
    },
    list_info_product: {
        flex: 5
    },
    list_product_name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    list_product_name_shop: {
        fontStyle: "italic"
    },
    list_product_price: {
        color: "red",
        fontWeight: 'bold'
    }
});