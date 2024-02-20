import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './style';
import BackIcon from '../../assets/images/icon/back.png';
import CategoryIconIcon from '../../assets/images/icon/category.png';

const LetterWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const FrameStyle = {
  width: 360,
  height: 501.08,
  top: -200,
  position: 'relative',
};

const ArrowBackCircleStyle = {
  width: 120,
  height: 120,
  left: -20,
  top: 45,
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const ButtonsCtaSecondaryStyle = {
  width: 256.70,
  height: 34.08,
  left: 0,
  top: -1,
  position: 'absolute',
  background: '#F3AF31',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 8,
  backdropFilter: 'blur(4px)',
};

const GroupStyle = {
  width: 319,
  height: 139,
  left: 20,
  top: 172,
  position: 'absolute',
};

const renderArrowBackCircle = () => (
  <div className="ArrowBackCircle1" style={ArrowBackCircleStyle}>
    <img src={BackIcon} style={{ width: 25, height: 25 }} alt="Back Icon" />
  </div>
);

const renderButton = () => (
    <Link to="/summary">
  <div style={ButtonsCtaSecondaryStyle} />
  </Link>
);

const renderText = (text) => (
  <div style={{ width: 257, height: 7.26, left: 0, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>{text}</div>
);

const renderGroup = (content) => (
  <div className="Group434" style={GroupStyle}>{content}</div>
);

function Letter() {
  return (
    <S.LetterWrapper style={LetterWrapperStyle}>
      <div className="Frame9" style={FrameStyle}>
      <Link to="/summary"> 
      {renderArrowBackCircle()}
    </Link>
    
      
        <div className="Ai" style={{ width: 360, height: 7.26, left: 0, top: 97, position: 'absolute', textAlign: 'center', color: '#484747', fontSize: 20, fontFamily: 'Noto Sans KR', fontWeight: '900', wordWrap: 'break-word', lineHeight: '1.3' }}>문서 내용의 원문입니다.</div>
        <div className="Landing" style={{ width: 319, height: 277, left: 20, top: 153, position: 'absolute', background: '#FCF8F7', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, backdropFilter: 'blur(42px)' }} />
        {renderGroup(
          <React.Fragment>
          
          <div className="Group413" style={{ width: 224.90, height: 113.47, left: 47, top: 18, position: 'absolute' }}>
          <div style={{width: 224.90, height: 213.47, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(217, 217, 217, 0) 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 16, border: '1px #862735 solid', backdropFilter: 'blur(4px)' }}></div>
          <div style={{ width: 124.90, height: 23.75, left: 50, top: 145.65, position: 'absolute', textAlign: 'center', color: '#862735', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>AI-api 연동</div>
        </div>
        <div className="Group433" style={{ width: 319, height: 113, left: 0, top: 126, position: 'absolute' }}>
        
        </div>

          </React.Fragment>
        )}
      </div>
    </S.LetterWrapper>
  );
}

export default Letter;

