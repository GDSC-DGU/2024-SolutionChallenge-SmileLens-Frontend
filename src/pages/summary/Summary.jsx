import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './style';
import BackIcon from '../../assets/images/icon/back.png';

const SummaryWrapperStyle = {
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

const ButtonStyle = {
  width: 137.23,
  height: 34,
  position: 'absolute',
  background: '#D61F27',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 8,
  backdropFilter: 'blur(4px)',
};

const renderArrowBackCircle = () => (
  <div className="ArrowBackCircle1" style={ArrowBackCircleStyle}>
    <img src={BackIcon} style={{ width: 25, height: 25 }} alt="Back Icon" />
  </div>
);

const renderButton = (text, to, state) => (
  <Link to={to} state={state}>
    <div style={{ ...ButtonStyle, left: to === "/voice" ? 0 : 158 }}>
      <div style={{ ...ButtonStyle, borderRadius: 25 }} />
      <div style={{ ...ButtonStyle, height: 7.26, top: 11, textAlign: 'center', color: 'white', fontSize: 16, fontWeight: '700' }}>{text}</div>
    </div>
  </Link>
);



const renderText = (text) => (
  <div style={{ width: 257, height: 7.26, left: 0, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>{text}</div>
);

const renderSummaryContent = (summary) => {
  const summaryHeight = summary ? summary.length * 50 : 0; 
  const frameHeight = Math.max(summaryHeight + 400, 455);

  return (
    <React.Fragment>
      <div className="Frame10" style={{ width: 331, height: frameHeight, left: 20, top: 150, position: 'relative' }}>
        <div className="Landing" style={{ width: 319, height: frameHeight, left: 0, top: 0, position: 'absolute', background: '#FCF8F7', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, backdropFilter: 'blur(42px)' }} />
        <div className="SummaryText" style={{ width: 319, left: 3, top: 90, position: 'absolute', color: '#484747', fontSize: 15, fontFamily: 'Noto Sans KR', fontWeight: '500', wordWrap: 'break-word', lineHeight: '1.6' }}>
          {summary && summary.length > 0 ? (
            summary.map((item, index) => (
              <React.Fragment key={index}>
                <p>{item}</p>
                {index !== summary.length - 1 && <br />} 
              </React.Fragment>
            ))
          ) : (
            <p>요약 내용이 없습니다.</p>
          )}
        </div>
        <div className="Group446" style={{ width: 294.23, height: 34, left: 12, top: 26, position: 'absolute' }}>
        {renderButton("음성으로 변환하기", "/voice")}
        {renderButton("내용 원문 보기", "/letter")}        
        </div>
      </div>
    </React.Fragment>
  );
};


const Summary = () => {
const location = useLocation();
const { summary } = location.state;

  return (
    <S.SummaryWrapper style={SummaryWrapperStyle}>
      <div className="Frame9" style={FrameStyle}>
        {renderArrowBackCircle()}
        <div className="Ai" style={{ width: 360, height: 7.26, left: 0, top: 97, position: 'absolute', textAlign: 'center', color: '#484747', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '900', wordWrap: 'break-word', lineHeight: '1.3' }}>문서 요약이 완료되었습니다.<br />원하는 변환 방식을 선택해주세요!</div>
        {renderSummaryContent(summary)}
      </div>
    </S.SummaryWrapper>
  );
};

export default Summary;
