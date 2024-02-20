import React from 'react';
import styled from 'styled-components';
import * as S from './style';
import BackIcon from '../../assets/images/icon/back.png';
import TTSIcon from '../../assets/images/icon/tts.png';
import TTS2Icon from '../../assets/images/icon/tts2.png';
import SummaryIcon from '../../assets/images/icon/summary.png';
import { Link } from 'react-router-dom'

const IntroduceWrapperStyle = {
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
  background: '#D61F27',
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
    <div style={ButtonsCtaSecondaryStyle}>
      <Link to="/upload" style={{ textDecoration: 'none', color: 'white' }}>
        {renderText("문서 변환하기")}
      </Link>
    </div>
  );

const renderText = (text) => (
  <div style={{ width: 257, height: 7.26, left: 0, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>{text}</div>
);

const renderGroup = (content) => (
  <div className="Group434" style={GroupStyle}>{content}</div>
);

function Introduce() {
  return (
    <S.IntroduceWrapper style={IntroduceWrapperStyle}>
      <div className="Frame9" style={FrameStyle}>
        {renderArrowBackCircle()}
        <div style={{ width: 257, height: 34.08, left: 51, top: 460, position: 'absolute' }}>
          {renderButton()}
        </div>
        <div className="Ai" style={{ width: 360, height: 7.26, left: 0, top: 97, position: 'absolute', textAlign: 'center', color: '#484747', fontSize: 20, fontFamily: 'Noto Sans KR', fontWeight: '900', wordWrap: 'break-word', lineHeight: '1.3' }}>저희 서비스는<br />AI가 연동된 기능을 제공해요!</div>
        <div className="Landing" style={{ width: 319, height: 277, left: 20, top: 153, position: 'absolute', background: '#FCF8F7', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, backdropFilter: 'blur(42px)' }} />
        {renderGroup(
          <React.Fragment>
            <div className="Group413" style={{ width: 124.90, height: 113.47, left: 26, top: 0, position: 'absolute' }}>
              <div style={{ width: 124.90, height: 113.47, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(217, 217, 217, 0) 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 16, border: '1px #862735 solid', backdropFilter: 'blur(4px)' }}></div>
              <div style={{ width: 124.90, height: 23.75, left: 0, top: 75.65, position: 'absolute', textAlign: 'center', color: '#862735', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>문서 내 글자들을<br />음성으로 변환합니다.</div>
            </div>
            <div className="Group357" style={{ width: 124.90, height: 113.47, left: 167.10, top: 0, position: 'absolute' }}>
              <div style={{ width: 124.90, height: 113.47, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(217, 217, 217, 0) 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 16, border: '1px #862735 solid', backdropFilter: 'blur(4px)' }}></div>
              <div style={{ width: 124.90, height: 23.75, left: 0, top: 75.65, position: 'absolute', textAlign: 'center', color: '#862735', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>문서 내 내용들을<br />간단하게 요약합니다.</div>
            </div>
            <div className="Group433" style={{ width: 319, height: 113, left: 0, top: 126, position: 'absolute' }}>
              <div className="Group357" style={{ width: 319, height: 113, left: 0, top: 0, position: 'absolute' }}>
                <div style={{ width: 149, height: 113, left: 85, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(217, 217, 217, 0) 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 16, border: '1px #862735 solid', backdropFilter: 'blur(4px)' }}></div>
                <div style={{ width: 319, height: 23.75, left: 0, top: 75.65, position: 'absolute', textAlign: 'center', color: '#862735', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>변환기로 요약된 내용들을<br />음성으로 변환합니다.</div>
              </div>
              <div className="TextToSpeechSharp1" style={{ width: 48.06, height: 48.06, left: 137, top: 16, position: 'absolute' }}>
            <img src={TTSIcon} style={{ width: 40, height: 40, left: -67, top: -120, position: 'absolute' }} alt="Summary Icon" />
            </div>
              <div className="TextToSpeechSharp2" style={{ width: 48.06, height: 48.06, left: 137, top: 16, position: 'absolute' }}>
                <img src={TTS2Icon} style={{ width: 48.06, height: 48.06 }} alt="TTS Icon" />
              </div>
            </div>
            <div className="VoiceMailSolid1" style={{ width: 43, height: 43, left: 68, top: 25, position: 'absolute' }}>
              <img src={SummaryIcon} style={{ width: 44, height: 36, left: 141, top: 0, position: 'absolute' }} alt="TTS2 Icon" />
            </div>
          </React.Fragment>
        )}
      </div>
    </S.IntroduceWrapper>
  );
}

export default Introduce;

