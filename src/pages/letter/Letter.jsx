import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './style';
import BackIcon from '../../assets/images/icon/back.png';

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
  const { summary, all, file_path, all_text } = useLocation().state;

  // 콘솔에 summary, all, file_path, all_text 출력
  console.log("summary:", summary);
  console.log("all:", all);
  console.log("file_path:", file_path);
  console.log("all_text:", all_text);

  return (
    <S.LetterWrapper style={LetterWrapperStyle}>
      <div className="Frame9" style={FrameStyle}>
      <Link to={{ pathname: "/summary", state: { summary, all, file_path, all_text } }}>
      {renderArrowBackCircle()}
    </Link>    
        <div className="Ai" style={{ width: 360, height: 7.26, left: 0, top: 97, position: 'absolute', textAlign: 'center', color: '#484747', fontSize: 20, fontFamily: 'Noto Sans KR', fontWeight: '900', wordWrap: 'break-word', lineHeight: '1.3' }}>문서 내용의 원문입니다.</div>
        <div className="Landing" style={{ width: 319, height: 277, left: 20, top: 153, position: 'absolute', background: '#FCF8F7', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, backdropFilter: 'blur(42px)' }} />
        {renderGroup(
          <React.Fragment>
            <div className="Group413" style={{ width: 224.90, height: 113.47, left: 47, top: 8, position: 'absolute' }}>
             </div>
             <div className="Group433" style={{ width: 319, height: 113, left: 10, top: 0, position: 'absolute',fontSize: 15, lineHeight: '1.5' }}>
             {all_text} {/* all_text 표시 */}
         </div>
         
          </React.Fragment>
        )}
      </div>
    </S.LetterWrapper>
  );
}

export default Letter;
