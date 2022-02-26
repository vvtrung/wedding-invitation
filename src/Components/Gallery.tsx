import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Divider } from 'antd';
import styled from 'styled-components';
import GalleryPhoto1 from '../Assets/GIA_6337.jpg';
import GalleryPhoto2 from '../Assets/GIA_6359.jpg';
import GalleryPhoto3 from '../Assets/GIA_6385.jpg';
import GalleryPhoto4 from '../Assets/GIA_6407.jpg';
import GalleryPhoto5 from '../Assets/GIA_6423.jpg';
import GalleryPhoto6 from '../Assets/GIA_6460.jpg';
import GroovePaper from '../Assets/GroovePaper.png';

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding: 42px;
  width: 100%;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>ALBUM HÌNH CƯỚI</Title>
      </Divider>
      <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} autoPlay />
    </Wrapper>
  );
};

export default Gallery;
