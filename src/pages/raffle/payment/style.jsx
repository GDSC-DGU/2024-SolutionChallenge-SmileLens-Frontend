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
