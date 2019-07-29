import styled from 'styled-components/native';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const Product = styled.View`
  width: 220px;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  background: #fff;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
  background: ${colors.primary};
`;

export const AddButtonText = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${darken(0.03, colors.primary)};
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0 4px 0 10px;
`;
