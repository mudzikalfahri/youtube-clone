import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Categories from "../components/categories";
import SideBar from "../components/sidebar";
import Thumbnail from "../components/thumbnail";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://imdb-api.com/en/API/Top250Movies/k_mehpfl78")
      .then((res) => res.json())
      .then((response) => setData(response.items))
      .catch((err) => console.log(err.message));
  }, []);

  console.log(data);

  return (
    <Wrapper>
      <SideBar />
      <Categories />
      <main className="contents">
        {data
          .filter((dat, id) => id <= 20)
          .map((single, idx) => (
            <Thumbnail content={single} key={idx} />
          ))}
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
