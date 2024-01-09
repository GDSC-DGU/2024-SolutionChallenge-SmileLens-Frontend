import { styled } from 'styled-components';

export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NicknameAndPhone = styled.div`
  display: flex;
  margin-top: 45px;
  margin-bottom: 30px;
  gap: 10px;
`;

export const PaymentNickname = styled.div`
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
`;
export const PaymentPhone = styled.div`
  color: #7f7f7f;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
`;
export const PaymentAddressTitle = styled.div`
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 10px;
`;
export const PaymentAddress = styled.div`
  color: #7f7f7f;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 30px;
  width: 240px;
`;
export const PaymentPoint = styled.div`
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 10px;
`;
export const PaymentMoneyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PaymentMoneyTitle = styled.div`
  color: #7f7f7f;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
`;
export const PaymentMoney = styled.div`
  color: #fff;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
`;

export const PaymentButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 0px;
  width: 273px;
  height: 33px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: linear-gradient(213deg, #7d3af1 32.82%, #dc8ae1 84.65%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(2px);
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 20px;
  margin-bottom: 16px;
  cursor: pointer;
`;

// 결제 모달창
export const PaymentModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 20%;
  width: 246px;
  height: 238px;
  border-radius: 24px;
  background: #d9d9d9;
  z-index: 2;
`;

export const PaymentModalTitle = styled.div`
  color: #000;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 35px;
`;
export const PaymentModalPhoneWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 8px;
  width: 190px;
`;
export const PaymentModalPhoneTitle = styled.div`
  color: #000;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
`;
export const PaymentModalPhone = styled.div`
  color: #7f7f7f;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
`;
export const PaymentModalAddressTitle = styled.div`
  color: #000;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
  width: 190px;
`;
export const PaymentModalAddress = styled.div`
  color: #7f7f7f;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
  width: 190px;
`;
export const PaymentModalButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 24px;
  gap: 28px;
`;
export const PaymentModalOkay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 77px;
  height: 33px;
  border-radius: 40px;
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  background: linear-gradient(213deg, #7d3af1 32.82%, #dc8ae1 84.65%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(2px);
  cursor: pointer;
`;
export const PaymentModalCancle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  width: 77px;
  height: 33px;
  color: #000;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
  background: #cdcdcd;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(2px);
  cursor: pointer;
`;
