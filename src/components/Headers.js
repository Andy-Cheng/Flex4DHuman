import styled from 'styled-components';
import { Typography } from 'antd';

const { Title: AntdTitle } = Typography;

const Header3 = styled(AntdTitle).attrs({
  level: 3
})`
  width: 100%;
  margin-top: 32px;
`;

export default Header3;
