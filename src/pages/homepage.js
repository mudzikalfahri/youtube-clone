import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Categories from "../components/categories";
import SideBar from "../components/sidebar";
import Thumbnail from "../components/thumbnail";

function HomePage() {
  let id = useParams();
  console.log(id);

  return (
    <Wrapper>
      <SideBar />
      <Categories />
      <main className="contents">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: #191919;
  margin: auto;
  main {
    max-width: 1440px;
    margin: auto;
    padding-top: 140px;
    padding-left: 100px;
    padding-right: 30px;

    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 1rem;
    row-gap: 2rem;
  }
`;

export default HomePage;
