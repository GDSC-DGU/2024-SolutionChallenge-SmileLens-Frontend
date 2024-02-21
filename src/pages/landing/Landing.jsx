import React from 'react';
import styled from 'styled-components';
import * as S from './style'; // Assuming this is a file with additional styled components
import NebulaIcon from '../../assets/images/logo/logo.png';
import { Link } from 'react-router-dom';

const LandingWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const ContainerStyle = {
  width: 360,
  height: 477.08,
  position: 'relative',
  top: '50%',
  transform: 'translateY(-120%)',
};

const ButtonContainerStyle = {
  width: 257,
  height: 34.08,
  left: 51,
  top: 370,
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'inline-flex',
};

const ButtonStyle = {
  width: 256.70,
  height: 34.08,
  left: 0,
  top: 0,
  position: 'absolute',
  background: '#D61F27',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 8,
  backdropFilter: 'blur(4px)',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'inline-flex',
};

const NebulaIconContainerStyle = {
  width: 270,
  height: 254,
  left: 45,
  top: 88,
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const NebulaIconWrap = styled.img`
  width: 100%;
  max-width: 220px;
  height: auto;
  position: relative;
  margin-top: 5px;
  margin-bottom: 11px;
`;

const renderButton = () => (
  <div style={ButtonStyle}>
    <div style={{ width: 256.70, height: 34.08, borderRadius: 8 }} />
  </div>
);

const renderLinkButton = (text, to) => (
  <div style={{ width: 257, height: 7.26, left: 0, top: 10, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {text}
    </Link>
  </div>
);

const renderStyledLinkButton = (text, to) => (
  <div style={{ width: 257, height: 7.26, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#484747', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word', marginTop: '10px' }}>
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {text}
    </Link>
  </div>
);


function Landing() {
  return (
    <S.LandingWrapper style={LandingWrapperStyle}>
      <div style={ContainerStyle}>
        <div style={ButtonContainerStyle}>
          {renderButton()}
          {renderLinkButton("문서 변환하기", "/select")}
        </div>
        <div style={{ width: 257, height: 34.08, left: 51, top: 443, position: 'absolute' }}>
          <div style={{ width: 256.70, height: 34.08, left: 0, top: -25, position: 'absolute', background: 'rgba(214, 31, 39, 0.22)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, backdropFilter: 'blur(4px)', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
            {renderStyledLinkButton("서비스 이용 안내 보러가기", "/introduce")}
          </div>
        </div>
        <div style={NebulaIconContainerStyle}>
          <NebulaIconWrap src={NebulaIcon} />
        </div>
        <div style={{ left: 90, top: 22, position: 'absolute', color: '#484747', fontSize: 40, fontFamily: 'Gugi', fontWeight: '400', wordWrap: 'break-word' }}>스마일렌즈</div>
        <div style={{ width: 360, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#484747', fontSize: 15, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>SmileLens</div>
      </div>
    </S.LandingWrapper>
  );
}

export default Landing;
