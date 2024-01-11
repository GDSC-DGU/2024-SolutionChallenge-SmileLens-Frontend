import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';
import CompleteIcon from '../../../../assets/images/raffleApplyment/planet.png';

function Complete() {
  const location = useLocation();
  const response = location.state ? location.state : null;

  return (
    <>
      <S.CompleteWrapper>
        <S.HeaderTitle>결제 완료</S.HeaderTitle>
        <S.CompleteImg src={CompleteIcon} />
        <S.CompleteTitle>결제가 완료되었습니다!</S.CompleteTitle>
        <S.CompleteSubTitle>구매 감사합니다.</S.CompleteSubTitle>

        <S.CompleteContentBox>
          <S.CompleteContentBoxTitle>
            {response.raffleProductTitle}
          </S.CompleteContentBoxTitle>
          <S.CompleteContentBoxSubWrapper>
            <S.CompleteContentBoxSubTitle>
              결제 금액
            </S.CompleteContentBoxSubTitle>
            <S.CompleteContentBoxSub>
              {response.raffleProductPrice}원
            </S.CompleteContentBoxSub>
          </S.CompleteContentBoxSubWrapper>

          <S.CompleteContentBoxSubWrapper>
            <S.CompleteContentBoxSubTitle>
              주문 상태
            </S.CompleteContentBoxSubTitle>
            <S.CompleteContentBoxSub>결제 완료</S.CompleteContentBoxSub>
          </S.CompleteContentBoxSubWrapper>

          <S.CompleteContentBoxAddressTitle>
            주문 주소
          </S.CompleteContentBoxAddressTitle>
          <S.CompleteContentBoxAddress>
            {response.orderAddress}
          </S.CompleteContentBoxAddress>
        </S.CompleteContentBox>
      </S.CompleteWrapper>

      <S.CompleteButton to="/raffle">래플페이지로 돌아가기</S.CompleteButton>
    </>
  );
}

export default Complete;
