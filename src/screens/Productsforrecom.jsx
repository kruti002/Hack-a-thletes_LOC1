import React from "react";
import styled from "styled-components";
import "./productrecom.css";
export default function ProductsforRe({ tag, title, text, action, author }) {
  function handleCardClick() {
    alert("you clicked a card");
  }
  return (
    <article
      class="card"
      style={{ cursor: "pointer", marginRight: "10px" }}
      onClick={handleCardClick}
    >
      <img
        class="card__background"
        src="https://i.imgur.com/QYWAcXk.jpeg"
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div class="card__content | flow">
        <div class="card__content--container | flow">
          <h2 class="card__title">{title}</h2>
          <p class="card__description">{text}</p>
        </div>
      </div>
    </article>
  );
}

const Wrapper = styled.div`
  width: 90%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
