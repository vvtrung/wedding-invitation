import React from 'react';
import { Button, Divider, message, Modal } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
} from '../Config';
import GroovePaper from '../Assets/GroovePaper.png';

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-left: 42px;
  padding-right: 42px;
  padding-bottom: 18px;
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 1.5vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 24px;
`;

const SubContent = styled.p`
  font-size: 1.3vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
`;

const ContactButton = styled.div`
  display: inline-block;
  text-align: center;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
`;

const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = React.useState<boolean>(false);
  const [brideVisible, setBrideVisible] = React.useState<boolean>(false);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>GỬI LỜI CHÚC MỪNG</Title>
      </Divider>
      <Content>Quà Cô Dâu Chú Rể</Content>
      <ContactButton onClick={() => setGroomVisible(true)}>
        <CheckCircleTwoTone style={{ fontSize: 64, marginBottom: 16 }} twoToneColor="#829fe0" />
        <br />
        <SubContent>Xác minh STK chú rể</SubContent>
      </ContactButton>
      <ContactButton onClick={() => setBrideVisible(true)}>
        <CheckCircleTwoTone style={{ fontSize: 64, marginBottom: 16 }} twoToneColor="#fe7daf" />
        <br />
        <SubContent>Xác minh STK cô dâu</SubContent>
      </ContactButton>
      <Modal
        title={<b>STK chú rể</b>}
        visible={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div>
          <b>{GROOM_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('copied')}
            >
              {GROOM_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
      <Modal
        title={<b>STK cô dâu</b>}
        visible={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div>
          <b>{BRIDE_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('copied')}
            >
              {BRIDE_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
    </Wrapper>
  );
};

export default CongratulatoryMoney;
