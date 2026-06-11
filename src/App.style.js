import styled from 'styled-components';
import { Layout } from 'antd';

const { Header: _Header } = Layout;

export const Header = styled(_Header)`
  & > .ant-menu {
    line-height: normal;
    border-bottom: none;
  }
  @media screen and (max-width: 768px) {
    padding: 0 40px;
    & > .ant-menu > .ant-menu-item {
      margin: 0 10px;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 0 25px;
  }
`;

export const Title = styled.h5`
  margin-bottom: 0;
  font-size: 24px;
  @media screen and (max-width: 768px) {
    line-height: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
