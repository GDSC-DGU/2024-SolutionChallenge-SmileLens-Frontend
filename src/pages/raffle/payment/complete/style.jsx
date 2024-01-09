import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const CompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HeaderTitle = styled.div`
  display: flex;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 8px;
`;

export const CompleteImg = styled.img`
  width: 50px;
  margin-top: 60px;
`;

export const CompleteTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 20px;
`;

export const CompleteSubTitle = styled.div`
  color: #7f7f7f;
  text-align: center;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 20px;
`;
export const CompleteContentBox = styled.div`
  width: 237px;
  border-radius: 10px;
  background: #fff;
  margin-top: 20px;
  padding: 18px;
`;
export const CompleteContentBoxTitle = styled.div`
  color: #000;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 18px;
`;
export const CompleteContentBoxSubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const CompleteContentBoxSubTitle = styled.div`
  color: #000;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
`;
export const CompleteContentBoxSub = styled.div`
  color: #000;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
`;
export const CompleteContentBoxAddressTitle = styled.div`
  color: #000;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 5px;
`;
export const CompleteContentBoxAddress = styled.div`
  color: #7f7f7f;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
  width: 190px;
`;

export const CompleteButton = styled(Link)`
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
