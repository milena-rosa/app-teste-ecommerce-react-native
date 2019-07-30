import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { HeaderContainer, Logo, Cart, ProductAmount } from './styles';

function Header({ cartSize, navigation }) {
  return (
    <HeaderContainer>
      <Logo />
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#fff" size={24} />
        <ProductAmount>{cartSize}</ProductAmount>
      </Cart>
    </HeaderContainer>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
