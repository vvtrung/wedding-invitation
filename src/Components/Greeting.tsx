import React from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import {
  GROOM_NAME,
  BRIDE_NAME,
} from '../Config';
import GroovePaper from '../Assets/GroovePaper.png';

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Gretting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>LỄ THÀNH HÔN</Title>
      </Divider>
      <Content>
      Anh yêu em vì tất cả những gì em đang có
      <br/>tất cả những gì em đã có
      <br/>và tất cả những gì em chưa hiện hữu.
      </Content>
      <GroomBride>
        {GROOM_NAME}
        <br />
        {BRIDE_NAME}
      </GroomBride>
    </Wrapper>
  );
};

export default Gretting;
