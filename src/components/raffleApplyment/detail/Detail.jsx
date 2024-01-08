import React from 'react';
import * as S from './style';

function Detail(props) {
  return (
    <S.DetailWrapper>
      <S.DetailTitle>{props.title}</S.DetailTitle>
      <S.DetailDate>{props.date}</S.DetailDate>
      <S.DetailContentWrapper>
        <S.DetailContentImg src={props.raffleImg} />
        <S.DetailContentHeader>
          <S.DetailContentPrice>{props.price} </S.DetailContentPrice>
          <S.DetailContentProfile>
            <S.DetailContentProfileImg src={props.profileImg} />
            <S.DetailContentProfileName>
              {props.profileName}
            </S.DetailContentProfileName>
          </S.DetailContentProfile>
        </S.DetailContentHeader>
        <S.DetailContent>{props.content}</S.DetailContent>
      </S.DetailContentWrapper>
      <S.ApplyButton>신청하기</S.ApplyButton>
    </S.DetailWrapper>
  );
}

export default Detail;
