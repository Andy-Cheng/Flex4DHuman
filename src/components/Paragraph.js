import styled from 'styled-components';
import { Typography } from 'antd';

const { Paragraph: AntdParagraph } = Typography;

const Paragraph = styled(AntdParagraph)`
  width: 100%;
  margin-top: 16px;
  font-size: 18px;
`;

export default Paragraph;
