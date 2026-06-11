import React from 'react';
import { Layout } from 'antd';
import './App.less';
import Flex4DHuman from './Pages/StandalonePages/Flex4DHuman';

const { Content, Footer } = Layout;

const AppLayout = () => {
  // const [showHeader, setShowHeader] = useState(true);
  // const location = useLocation();


  return (
    <Layout style={{ backgroundColor: '#000', height: '100%' }}>
      <Content
        style={{
          color: '#fff'
        }}
      >
        <Flex4DHuman/>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: '#ffffff' }}>
        <br />
        <a href="https://github.com/Andy-Cheng/Flex4DHuman/tree/website" style={{ color: 'darkblue' }}>
          Website Source Code
        </a>
      </Footer>
    </Layout>
  );
};

const App = () => (
    <AppLayout />
);

export default App;
