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

function Header() {
  return (
    <StyledHeader>
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
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  max-width: 1440px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #202020;
  border-bottom: 1px solid #2f2f2f;
  .container {
    padding: 8px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-side {
      display: flex;
      align-items: center;
      .ytb-logo {
        margin-left: 5px;
        height: 25px;
        width: auto;
      }
    }
    .center {
      display: flex;
      width: 50%;
      justify-content: center;
      align-items: center;
      input {
        flex: 1;
        padding: 12px 10px;
        background: #191919;
        border: none;
      }
      .search-icon {
        border: 1px solid #282828;
        border-radius: 0px 3px 3px 0px;
        height: 40px;
        display: flex;
        padding: 0px 10px;
        align-items: center;
        justify-content: center;
        background-color: #282828;
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
`;

const CircleIcon = styled.div`
  padding: 2px;
  width: 35px;
  height: 35px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  border-radius: 50%;
  &:hover {
    background-color: #3d3d3d;
  }
`;

export default Header;
