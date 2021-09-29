import React from "react";
import styled from "styled-components";

function Thumbnail({ content }) {
  return (
    <StyledThumbnail className="container">
      <div className="top">
        <img src={content.image} alt="" className="image" />
      </div>
      <div className="bot">
        <div className="profile">
          <div className="circle">
            <img src={content.image} alt="" />
          </div>
        </div>
        <div className="content-title">
          <p className="title">{content.title}</p>
          <div className="channel">
            <p className="name">나징NAJING</p>
            <p className="views">461 rb x ditonton</p>
            <p className="date">1 minggu yang lalu</p>
          </div>
        </div>
      </div>
    </StyledThumbnail>
  );
}

const StyledThumbnail = styled.div`
  width: auto;
  height: 290px;
  display: flex;
  flex-direction: column;
  .top {
    height: 55%;
    .image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .bot {
    padding: 0.5rem 0;
    color: white;
    display: flex;
    .profile {
      .circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: blue;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .content-title {
      padding: 2px 10px;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      font-weight: 500;
      .title {
        margin-bottom: 8px;
      }
      .channel {
        font-weight: 400;
        color: #d7d7d7;
        p {
          margin-bottom: 3px;
        }
      }
    }
  }
`;

export default Thumbnail;
