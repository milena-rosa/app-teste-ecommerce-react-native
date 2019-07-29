import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';
import colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: ${colors.darker};
  flex-direction: row;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-height: 64px;
  background: ${colors.darker};
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  width: 24px;
  height: 24px;
`;

export const ProductAmount = styled.Text`
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  padding: 2px;
  border-radius: 9px;

  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  text-align: center;

  overflow: hidden;
`;
