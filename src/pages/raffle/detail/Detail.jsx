import React from 'react';
import * as S from './style';
import Header from '../../../components/raffleApplyment/header/Header';
import ProfileImg from '../../../assets/images/raffleApplyment/profile.png';
import raffleImg from '../../../assets/images/raffleApplyment/raffleImg.png';

function Detail() {
  return (
    <>
      <Header title={'래플'} />
      <S.DetailWrapper>
        <S.DetailTitle>영상 이벤트</S.DetailTitle>
        <S.DetailDate>2023.04.25 ~ 2023.10.27</S.DetailDate>
        <S.DetailContentWrapper>
          <S.DetailContentImg src={raffleImg} />
          <S.DetailContentHeader>
            <S.DetailContentPrice>응모 금액 : 1000원 </S.DetailContentPrice>
            <S.DetailContentProfile>
              <S.DetailContentProfileImg src={ProfileImg} />
              <S.DetailContentProfileName>도티</S.DetailContentProfileName>
            </S.DetailContentProfile>
          </S.DetailContentHeader>
          <S.DetailContent>
            여러분 안녕하세요 :) 도티입니다 무더운 여름 잘 보내고 계신가요?
            어쩌구 저쩌구 skdflskdjglksd;fsk;glflgkjsldfjgn;ldfkjgm;lkfjgdl;kf
            여러분 안녕하세요 :) 도티입니다 무더운 여름 잘 보내고 계신가요?
            어쩌구 저쩌구 skdflskdjglksd;fsk;glflgkjsldfjgn;ldfkjgm;lkfjgdl;kf
          </S.DetailContent>
        </S.DetailContentWrapper>
        <S.ApplyButton>신청하기</S.ApplyButton>
      </S.DetailWrapper>
    </>
  );
}

export default Detail;
