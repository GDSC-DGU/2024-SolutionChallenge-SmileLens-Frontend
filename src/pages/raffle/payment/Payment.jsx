import React from 'react';
import * as S from './style';
import Header from '../../../components/raffleApplyment/header/Header';

function Payment() {
  return (
    <>
      <Header title={'결제'} />
      <S.PaymentWrapper>
        <S.NicknameAndPhone>
          <S.PaymentNickname>닉네임</S.PaymentNickname>
          <S.PaymentPhone>000-0000-0000</S.PaymentPhone>
        </S.NicknameAndPhone>
        <S.PaymentAddressTitle>주소</S.PaymentAddressTitle>
        <S.PaymentAddress>
          서울특별시 강남구 강남동 강남빌딩 1010동 101호1010동 101호 1010동
          101호1010동 101호
        </S.PaymentAddress>

        <S.PaymentPoint>포인트</S.PaymentPoint>
        <S.PaymentMoneyWrapper>
          <S.PaymentMoneyTitle>잔액</S.PaymentMoneyTitle>
          <S.PaymentMoney>1,000</S.PaymentMoney>
        </S.PaymentMoneyWrapper>
        <S.PaymentMoneyWrapper>
          <S.PaymentMoneyTitle>결제 금액</S.PaymentMoneyTitle>
          <S.PaymentMoney>1,000</S.PaymentMoney>
        </S.PaymentMoneyWrapper>
      </S.PaymentWrapper>
      <S.PaymentButton>결제하기</S.PaymentButton>
    </>
  );
}

export default Payment;
