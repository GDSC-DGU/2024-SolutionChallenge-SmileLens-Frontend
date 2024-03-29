import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './style';
import BackIcon from '../../assets/images/icon/back.png';
import SummaryIcon from '../../assets/images/icon/summary.png';
import CategoryIcon from '../../assets/images/icon/category.png';
import axios from '../../api/axios';
import Summary from '../summary/Summary'

const SelectWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const FrameStyle = {
  width: 360,
  height: 501.08,
  top: -200,
  position: 'relative',
};

const ArrowBackCircleStyle = {
  width: 120,
  height: 120,
  left: -20,
  top: 45,
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const ButtonsCtaSecondaryStyle1 = {
  width: 256.70,
  height: 34.08,
  left: 0,
  top: -1,
  position: 'absolute',
  background: '#D61F27',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 8,
  backdropFilter: 'blur(4px)',
};

const ButtonsCtaSecondaryStyle2 = {
  width: 256.70,
  height: 34.08,
  left: 50,
  top: 503,
  position: 'absolute',
  background: '#862735',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 8,
  backdropFilter: 'blur(4px)',
};

const GroupStyle = {
  width: 319,
  height: 139,
  left: 20,
  top: 172,
  position: 'absolute',
};

const renderArrowBackCircle = () => (
  <div className="ArrowBackCircle1" style={ArrowBackCircleStyle}>
    <img src={BackIcon} style={{ width: 25, height: 25 }} alt="Back Icon" />
  </div>
);

const renderButton1 = () => (
  <div style={ButtonsCtaSecondaryStyle1} />
);

const renderButton2 = (selectedFile, handleConvertDocument) => {
  const text = "문서 변환하기";

  if (selectedFile) {
    return (
      <div style={ButtonsCtaSecondaryStyle2} onClick={() => handleConvertDocument(selectedFile)}>
        <div style={{ width: 257, height: 7.26, left: 0, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>{text}</div>
      </div>
    );
  } else {
    return null;
  }
};



const renderText = (text) => (
  <div style={{ width: 257, height: 7.26, left: 0, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>{text}</div>
);

const renderGroup = (content) => (
  <div className="Group434" style={GroupStyle}>{content}</div>
);

const Select = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      console.log('문서 선택이 완료되었습니다:', file.name);
    }
  };

  const handleConvertDocument = async (selectedFile) => {
    if (!selectedFile) {
      console.error('업로드된 파일이 없습니다.');
      return;
    }

    const formData = new FormData();
    const fileName = `file_${Date.now()}.png`;
    formData.append('image', selectedFile, fileName);

    try {
      alert('문서 변환 중입니다. 창을 닫지 않고, 잠시만 기다려주세요...');

      const response = await axios.post('http://127.0.0.1:8000/api/v1/convert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('서버 응답:', response.data);

const { summary, all, file_path, all_text } = response.data;

      console.log('요약:', summary);
      console.log('전체:', all);
      console.log('파일 경로:', file_path);
      console.log('전체 텍스트:', all_text);

      alert('문서 변환이 완료되었습니다.');


      navigate('/summary', { state: { summary, all, file_path, all_text }});

    } catch (error) {
      console.error('서버 요청 실패:', error);
      console.error('에러 상세 정보:', error.response);
      alert('문서 변환에 실패했습니다.');
    }
  };

  return (
    <S.SelectWrapper style={SelectWrapperStyle}>
      <div className="Frame9" style={FrameStyle}>
        <Link to="/upload">
          {renderArrowBackCircle()}
        </Link>

        <div style={{ width: 257, height: 34.08, left: 51, top: 460, position: 'absolute' }}>
          {renderButton1()}
          {selectedFile ? (
            renderText(selectedFile.name)
          ) : (
            renderText("문서 업로드하기")
          )}
          <input 
            id="fileInput"
            type="file" 
            onChange={handleFileChange} 
            style={{ opacity: 0, width: '100%', height: '100%', position: 'absolute', cursor: 'pointer' }} 
          />
        </div>

        {renderButton2(selectedFile, handleConvertDocument)}

        <div className="Ai" style={{ width: 360, height: 7.26, left: 0, top: 97, position: 'absolute', textAlign: 'center', color: '#484747', fontSize: 20, fontFamily: 'Noto Sans KR', fontWeight: '900', wordWrap: 'break-word', lineHeight: '1.3' }}>변환하고자 하는 문서를<br />선택해보세요!</div>
        <div className="DocumentType" style={{width: 360, height: 7.26, left: 0,       top: 80,
          position: 'absolute',
          textAlign: 'center',
          color: '#7d7d7d',
          fontSize: 12,
          fontFamily: 'Noto Sans KR',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3'
        }}>
          [ PDF / JPEG / PNG ]
        </div>
    
        <div className="Landing" style={{ width: 319, height: 277, left: 20, top: 153, position: 'absolute', background: '#FCF8F7', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, backdropFilter: 'blur(42px)' }} />
    
        {renderGroup(
          <React.Fragment>
            <div className="Group413" style={{ width: 224.90, height: 113.47, left: 47, top: 18, position: 'absolute' }}>
              <div style={{width: 224.90, height: 213.47, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(217, 217, 217, 0) 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 16, border: '1px #862735 solid', backdropFilter: 'blur(4px)' }}></div>
   
            </div>
            <div className="Group433" style={{ width: 319, height: 113, left: 0, top: 126, position: 'absolute' }}>
              <div className="TextToSpeechSharp1" style={{ width: 48.06, height: 48.06, left: 137, top: 32, position: 'absolute' }}>
                <img src={CategoryIcon} style={{ width: 80, height: 80, left: -15, top: -70, position: 'absolute' }} alt="CategoryIcon" />
              </div>
            </div>

          </React.Fragment>
        )}
      </div>
    </S.SelectWrapper>
    );
    }
    
    export default Select;
    
