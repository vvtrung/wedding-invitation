import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Divider, message } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import {
  WEDDING_INVITATION_URL,
} from '../Config';
import GroovePaper from '../Assets/GroovePaper.png';

declare global {
  interface Window {
    Kakao: any;
  }
}

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-left: 42px;
  padding-right: 42px;
  padding-bottom: 42px;
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const KakaoTalkShareButton = styled(Button)`
  background: #fee500;
  border-color: #fee500;
  color: #181600;
  &:hover {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
  &:focus {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
`;

const LinkShareButton = styled(Button)`
  background: #53acee;
  border-color: #53acee;
  color: #ffffff;
  &:hover {
    background-color: #9fcbed !important;
    border-color: #9fcbed !important;
    color: #ffffff !important;
  }
  &:focus {
    background-color: #9fcbed !important;
    border-color: #9fcbed !important;
    color: #ffffff !important;
  }
`;

const Share = () => {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>CHIA SẺ LỜI MỜI</Title>
      </Divider>
      <CopyToClipboard text={WEDDING_INVITATION_URL}>
        <LinkShareButton
          style={{ margin: 8 }}
          icon={<LinkOutlined />}
          size="large"
          onClick={() => message.success('copied.')}
        >
          Chia sẻ liên kết
        </LinkShareButton>
      </CopyToClipboard>
    </Wrapper>
  );
};

export default Share;
