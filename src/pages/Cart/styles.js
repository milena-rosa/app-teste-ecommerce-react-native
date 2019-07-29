import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  margin: 15px;
  padding: 10px;
  border-radius: 4px;
  background: #fff;
`;

export const Products = styled.View``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  background: #fff;
`;

export const ProductSubtotal = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 16px;
  text-align: right;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;

export const TotalText = styled.Text`
  color: #999;
  font-weight: bold;
  text-align: center;
`;

export const TotalAmount = styled.Text`
  margin: 0 5px 0 30 px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

export const Order = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 12px;
  border-radius: 4px;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
