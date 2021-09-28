import React from "react";
import styled from "styled-components";

function Categories() {
  const items = [
    "Semua",
    "Live",
    "Video Mix",
    "Tips Kecantikan",
    "Sepak bola",
    "Pariwisata",
  ];
  return (
    <StyledCategories className="cat-nav">
      <div className="categories">
        {items.map((item, idx) => (
          <div key={idx} className="category">
            {item}
          </div>
        ))}
      </div>
    </StyledCategories>
  );
}

const StyledCategories = styled.div`
  width: 100%;
  padding: 12px 0;
  background-color: #202020;
  position: fixed;
  border-bottom: 1px solid #515151;
  top: 60px;
  .categories {
    display: flex;
    max-width: 1440px;
    margin: auto;
    padding-left: 100px;
    align-items: center;
    .category {
      margin-right: 10px;
      padding: 6px 12px;
      min-width: fit-content;
      background-color: #3d3d3d;
      border: 1px solid #515151;
      color: white;
      font-size: 14px;
      border-radius: 20px;
    }
  }
`;
export default Categories;
