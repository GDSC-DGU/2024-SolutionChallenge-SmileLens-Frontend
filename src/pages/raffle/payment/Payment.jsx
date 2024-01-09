import React, { useState } from 'react';
import * as S from './style';
import Header from '../../../components/raffleApplyment/header/Header';

function Payment() {
  const [isMpdalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isMpdalOpen && (
        <S.PaymentModal>
          <S.PaymentModalTitle>이 정보가 맞으신가요?</S.PaymentModalTitle>
          <S.PaymentModalPhoneWrapper>
            <S.PaymentModalPhoneTitle>주문 번호</S.PaymentModalPhoneTitle>
            <S.PaymentModalPhone>010-0000-0000</S.PaymentModalPhone>
          </S.PaymentModalPhoneWrapper>
          <S.PaymentModalAddressTitle>주문 주소</S.PaymentModalAddressTitle>
          <S.PaymentModalAddress>
            서울특별시 강남구 강남동 강남빌딩 1010동 101호
          </S.PaymentModalAddress>

          <S.PaymentModalButton>
            <S.PaymentModalOkay onClick={closeModal}>확인</S.PaymentModalOkay>
            <S.PaymentModalCancle onClick={closeModal}>
              취소
            </S.PaymentModalCancle>
          </S.PaymentModalButton>
        </S.PaymentModal>
      )}

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
      <S.PaymentButton onClick={openModal}>결제하기</S.PaymentButton>
    </>
  );
}

export default Payment;
