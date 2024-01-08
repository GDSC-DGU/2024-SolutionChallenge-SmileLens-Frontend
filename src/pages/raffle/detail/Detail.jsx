import React from 'react';
import * as S from './style';
import Header from '../../../components/raffleApplyment/header/Header';
import RaffleDetail from '../../../components/raffleApplyment/detail/Detail';
import raffleImg from '../../../assets/images/raffleApplyment/raffleImg.png';
import ProfileImg from '../../../assets/images/raffleApplyment/profile.png';

function Detail() {
  return (
    <>
      <Header title={'래플'} />
      <RaffleDetail
        title={'영상 이벤트'}
        date={'2023.04.25 ~ 2023.10.27'}
        raffleImg={raffleImg}
        price={'응모 금액 : 1000원'}
        profileImg={ProfileImg}
        profileName={'도티'}
        content={
          'jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구jgl여름쩌구 여름쩌구 저쩌구어쩌구 저쩌구'
        }
      />
    </>
  );
}

export default Detail;
