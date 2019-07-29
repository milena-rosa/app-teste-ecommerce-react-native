import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import { formatPrice } from '../../util/format';
import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  renderProduct = ({ item }) => (
    <Product key={item.id}>
      <ProductImage source={{ uri: item.image }} />
      <ProductTitle>{item.title}</ProductTitle>
      <ProductPrice>{item.formattedPrice}</ProductPrice>
      <AddButton onPress={() => this.handleAddProduct(item)}>
        <ProductAmount>
          <Icon name="add-shopping-cart" color="#fff" size={20} />
          <ProductAmountText>0</ProductAmountText>
        </ProductAmount>
        <AddButtonText>Adicionar</AddButtonText>
      </AddButton>
    </Product>
  );

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          keyExtractor={item => String(item.id)}
          data={products}
          extraData={this.props}
          horizontal
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

export default connect()(Home);
