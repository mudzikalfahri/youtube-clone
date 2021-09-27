import {
  MenuRounded,
  HomeSharp,
  ExploreOutlined,
  SubscriptionsOutlined,
  VideoLibraryOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function SideBar() {
  return (
    <StyledSidebar>
      <CircleIcon>
        <MenuRounded style={{ color: "white" }} />
      </CircleIcon>
      <div className="bot-menu">
        <div className="square-icon">
          <HomeSharp style={{ color: "white", marginBottom: "2px" }} />
          <p>Beranda</p>
        </div>
        <div className="square-icon">
          <ExploreOutlined style={{ color: "white", marginBottom: "2px" }} />
          <p>Eksplorasi</p>
        </div>
        <div className="square-icon">
          <SubscriptionsOutlined
            style={{ color: "white", marginBottom: "2px" }}
          />
          <p>Subscription</p>
        </div>
        <div className="square-icon">
          <VideoLibraryOutlined
            style={{ color: "white", marginBottom: "2px" }}
          />
          <p>Koleksi</p>
        </div>
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100vh;
  background-color: #202020;
  .bot-menu {
    width: 100%;
    margin-top: 20px;
    .square-icon {
      line-height: 0px;
      display: flex;
      flex-direction: column;
      font-size: 10px;
      color: white;
      width: 100%;
      padding: 14px 0;
      background-color: #202020;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: #3d3d3d;
      }
    }
  }
`;

const CircleIcon = styled.div`
  padding: 2px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  border-radius: 50%;
  &:hover {
    background-color: #3d3d3d;
  }
`;

export default SideBar;
