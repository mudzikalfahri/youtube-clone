import React from "react";
import styled from "styled-components";
import {
  MenuRounded,
  SearchRounded,
  Mic,
  VideoCallOutlined,
  AppsOutlined,
  NotificationsOutlined,
} from "@material-ui/icons";

function HomePage() {
  return (
    <Wrapper>
      <div className="header">
        <div className="container">
          <div className="left-side">
            <CircleIcon>
              <MenuRounded style={{ color: "white" }} />
            </CircleIcon>
            <img
              src="https://i.ibb.co/gPT863s/ytb-logo.png"
              className="ytb-logo"
              alt="logo"
            />
          </div>
          <div className="center">
            <input type="text" placeholder="Telusuri" />
            <div className="search-icon">
              <SearchRounded style={{ color: "white", margin: "0px 10px" }} />
            </div>
            <div className="mic-icon">
              <Mic style={{ color: "white" }} />
            </div>
          </div>
          <div className="right-side">
            <CircleIcon>
              <VideoCallOutlined style={{ color: "white" }} />
            </CircleIcon>
            <CircleIcon>
              <AppsOutlined style={{ color: "white" }} />
            </CircleIcon>
            <CircleIcon>
              <NotificationsOutlined style={{ color: "white" }} />
            </CircleIcon>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: #272727;
  max-width: 1440px;
  margin: auto;
  .header {
    padding: 8px 20px;
    background-color: #272727;
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left-side {
        display: flex;
        align-items: center;
        margin-right: 100px;
        .ytb-logo {
          margin-left: 5px;
          height: 25px;
          width: auto;
        }
      }
      .center {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        margin-right: 100px;
        input {
          flex: 1;
          padding: 12px 10px;
          background: #191919;
          border: none;
        }
        .search-icon {
          border: 1px solid #424242;
          border-radius: 0px 3px 3px 0px;
          height: 40px;
          display: flex;
          padding: 0px 10px;
          align-items: center;
          justify-content: center;
          background-color: #424242;
        }
        .mic-icon {
          margin: 0px 10px;
          padding: 2px;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: #191919;
        }
      }
      .right-side {
        display: flex;
        align-items: center;
      }
    }
  }
`;

const CircleIcon = styled.div`
  padding: 2px;
  width: 35px;
  height: 35px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #272727;
  border-radius: 50%;
  &:hover {
    background-color: #424242;
  }
`;

export default HomePage;
