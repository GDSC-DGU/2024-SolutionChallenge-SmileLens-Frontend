import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './style';
import axios from 'axios';
import BackIcon from '../../assets/images/icon/back.png';
import LeftIcon from '../../assets/images/icon/left.png';
import RightIcon from '../../assets/images/icon/right.png';
import OneIcon from '../../assets/images/icon/one.png';
import TwoIcon from '../../assets/images/icon/two.png';
import ThreeIcon from '../../assets/images/icon/three.png';
import summary from '../summary/Summary';

const VoiceWrapperStyle = {
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

const renderIcon = (src, speed) => (
  <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => handleSpeedChange(speed)}>
    <img src={src} style={{ width: 38, height: 39 }} alt="Icon" />
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

const Voice = () => {
  const location = useLocation();
  const { summary, all, file_path, all_text } = location.state || {};
  const [audioUrl, setAudioUrl] = useState("");
  const [speed, setSpeed] = useState(1);

  console.log(summary)
  console.log(all)
  console.log(file_path)
  console.log(all_text)

  const handlePlayButtonClick = () => {
    if (summary) {
      const utterance = new SpeechSynthesisUtterance(summary.join(" "));
      utterance.rate = speed; // 속도 설정
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Summary is undefined or empty.");
    }
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  return (
    <S.VoiceWrapper style={VoiceWrapperStyle}>
      <div className="Frame9" style={FrameStyle}>
        <Link to={{ pathname: "/summary", state: { summary, all, file_path, all_text } }}>
          {renderArrowBackCircle()}
        </Link>
        <div className="Ai" style={{ width: 360, height: 7.26, left: 0, top: 97, position: 'absolute', textAlign: 'center', color: '#484747', fontSize: 20, fontFamily: 'Noto Sans KR', fontWeight: '900', wordWrap: 'break-word', lineHeight: '1.3' }} onClick={handlePlayButtonClick} >문서 내용의<br />음성변환본입니다.</div>
        <div className="Landing" style={{ width: 319, height: 277, left: 20, top: 153, position: 'absolute', background: '#FCF8F7', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, backdropFilter: 'blur(42px)' }} />
        {renderGroup(
          <React.Fragment>

         

            <img
              className="Vector1"
              src={OneIcon}
              style={{ width: 38, height: 39, left: 52, top: 52, position: 'absolute', cursor: 'pointer' }}
              alt="One Icon"
              onClick={() => handleSpeedChange(0.5)}
            />
            <img
              className="Vector2"
              src={TwoIcon}
              style={{ width: 38, height: 39, left: 127, top: 52, position: 'absolute', cursor: 'pointer' }}
              alt="Two Icon"
              onClick={() => handleSpeedChange(1)}
            />
            <img
              className="Vector3"
              src={ThreeIcon}
              style={{ width: 38, height: 39, left: 202, top: 52, position: 'absolute', cursor: 'pointer' }}
              alt="Three Icon"
              onClick={() => handleSpeedChange(2)}
            />
            <div className="Group392" style={{ width: 292, height: 199, left: 0, top: 0, position: 'absolute' }}>
              <div style={{ width: 214, height: 29, left: 38, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(217, 217, 217, 0) 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, border: '1px #862735 solid', backdropFilter: 'blur(4px)' }}></div>
              <div style={{ width: 214, height: 7, left: 38, top: 10, position: 'absolute', textAlign: 'center', color: '#484747', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>말하기 속도</div>
              <div className="Group345" style={{ width: 292, height: 7, left: 0, top: 192, position: 'absolute' }}>
                <div style={{ width: 80, height: 7, left: 112, top: -30, position: 'absolute', textAlign: 'center', color: '#484747', fontSize: 20, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }} onClick={handlePlayButtonClick} >재생하기</div>
                <div style={{ width: 80, height: 7, left: 212, top: 0, position: 'absolute', textAlign: 'center', color: '#484747', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '350', wordWrap: 'break-word' }} >10초 뒤</div>
                <div style={{ width: 80, height: 7, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#484747', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '350', wordWrap: 'break-word' }}>10초 전</div>
              </div>
            </div>
            <img className="Vectora" src={LeftIcon} style={{ width: 48, height: 28, left: 14, top: 152, position: 'absolute' }} alt="Previous Button" />
            <img className="Vectorb" src={RightIcon} style={{ width: 48, height: 28, left: 230, top: 152, position: 'absolute' }} alt="Next Button" />
          </React.Fragment>
        )}
      </div>
    </S.VoiceWrapper>
  );
}

export default Voice;

