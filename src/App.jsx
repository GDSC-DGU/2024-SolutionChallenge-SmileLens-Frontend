import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import BackGroundImg from './assets/images/background/background.png';
import NebulaIcon from './assets/images/background/smilelens.png';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  position: relative; /* 새로 추가한 div 요소의 position을 상대적(relative)으로 설정 */
  background-color: white;
  background-repeat: repeat;
  background-image: url(${BackGroundImg});
  background-size: cover;
  & > div {
    width: 325px;
    height: 671px;
    position: relative;
    background: #FCF8F7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    backdrop-filter: blur(42px);
  }
`;


const Content = styled.div`
  margin-top: 15px;
  margin-bottom: 20px; /* Content 하단에 여백 추가 */
  flex-grow: 1;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 1px solid rgba(117, 119, 132, 0.25);
  background: rgba(25, 25, 28, 0.5);
  box-shadow: 4px 4px 4px 0px #000;
  backdrop-filter: blur(5px);
  margin-top: -25px;
`;

const Back = styled.div``;

const NebulaIconWrap = styled.img`
  max-width: 130px; 
   position: relative;
  margin-top: 5px;
  margin-bottom: 11px;
`;

const Layout = () => {
  return (
    <>
      <Back>
        <Wrapper>
          <NebulaIconWrap src={NebulaIcon} />
          <br />
          <Content>
            <Outlet />
          </Content>
  
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
