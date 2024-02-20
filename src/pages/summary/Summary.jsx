import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './style';
import BackIcon from '../../assets/images/icon/back.png';
import CategoryIconIcon from '../../assets/images/icon/category.png';

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

const renderButton1 = (text) => (
    <Link to="/voice">
    <div style={{ width: 137.23, height: 34, left: 0, top: 0, position: 'absolute', background: '#D61F27', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, backdropFilter: 'blur(4px)' }}>
      <div style={{ width: 137.23, height: 34, left: 0, top: 0, position: 'absolute', borderRadius: 25 }} />
      <div style={{ width: 137, height: 7.26, left: 0, top: 11, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>{text}</div>
    </div>
    </Link>
  );

  const renderButton2 = (text) => (
    <Link to="/letter">
    <div style={{ width: 137.23, height: 34, left: 158, top: 0, position: 'absolute', background: '#D61F27', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, backdropFilter: 'blur(4px)' }}>
      <div style={{ width: 137.23, height: 34, left: 0, top: 0, position: 'absolute', borderRadius: 25 }} />
      <div style={{ width: 137, height: 7.26, left: 0, top: 11, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>{text}</div>
    </div>
    </Link>
  );

const renderText = (text) => (
  <div style={{ width: 257, height: 7.26, left: 0, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>{text}</div>
);

const renderGroup = (content) => (
  <div className="Group434" style={GroupStyle}>{content}</div>
);

const renderSummaryContent = () => (
    <React.Fragment>
      <div className="Frame10" style={{ width: 331, height: 455, top: -30, position: 'relative' }}>
        <div className="Landing" style={{ width: 319, height: 455, left: 0, top: 0, position: 'absolute', background: '#FCF8F7', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, backdropFilter: 'blur(42px)' }} />
        <div className="394712Gdsc30000094712394712" style={{ width: 319, height: 27, left: 12, top: 90, position: 'absolute', color: '#484747', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '500', wordWrap: 'break-word', lineHeight: '1.3' }}>총 합계 : 394712원<br />구매 목록 : 바나나, 사과<br />요약문 : GDSC 마트에서 바나나와 사과를 구매했으며, <br />이는 각각 300000원, 94712원입니다. 따라서 총 합계는 394712원입니다.</div>
        <div className="Group446" style={{ width: 294.23, height: 34, left: 12, top: 26, position: 'absolute' }}>
          {renderButton1("음성으로 변환하기")}
          {renderButton2("내용 원문 보기")}
        </div>
      </div>
    </React.Fragment>
  );

function Summary() {
  return (
    <S.SummaryWrapper style={SummaryWrapperStyle}>
      <div className="Frame9" style={FrameStyle}>
        {renderArrowBackCircle()}
        <div className="Ai" style={{ width: 360, height: 7.26, left: 0, top: 97, position: 'absolute', textAlign: 'center', color: '#484747', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '900', wordWrap: 'break-word', lineHeight: '1.3' }}>문서 요약이 완료되었습니다.<br />원하는 변환 방식을 선택해주세요!</div>
        {renderGroup(renderSummaryContent())}
        </div>
        </S.SummaryWrapper>
      );
    }
    
    export default Summary;
    
