import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import NavBar from './components/layouts/NavBar.jsx';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  background-color: white;
  background-repeat: repeat;
`;

const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Back = styled.div`
  background-color: grey;
`;

const Layout = () => {
  return (
    <>
      <Back>
        <Wrapper>
          <Content>
            <Outlet />
          </Content>
          <NavBar />
        </Wrapper>
      </Back>
    </>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
