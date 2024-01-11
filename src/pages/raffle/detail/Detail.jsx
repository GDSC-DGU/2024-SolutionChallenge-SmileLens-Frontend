import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/raffleApplyment/header/Header';
import RaffleDetail from '../../../components/raffleApplyment/detail/Detail';
import ProfileImg from '../../../assets/images/raffleApplyment/profile.png';

// api
import axios from '../../../api/axios';

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`user/raffle-products/${id}`);
      console.log(response.data.result);
      setData(response.data.result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header title={'래플'} />
      {data && (
        <RaffleDetail
          title={data.raffleProductTitle}
          startDate={data.startDate}
          endDate={data.endDate}
          raffleImg={data.raffleProductThumbnail}
          price={data.raffleProductPrice}
          profileImg={ProfileImg}
          profileName={data.creatorName}
          content={data.raffleProductContent}
        />
      )}
    </>
  );
}

export default Detail;
