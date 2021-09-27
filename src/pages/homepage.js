import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import SideBar from "../components/sidebar";

function HomePage() {
  return (
    <Wrapper>
      <Header />
      <main>
        <SideBar />
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: #191919;
  max-width: 1440px;
  margin: auto;
  main {
  }
`;

export default HomePage;
