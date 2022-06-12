import React from "react";
import styled from "styled-components";

const MenuBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  align-items: center;
  padding: 0 8px;
`;

function MenuBar(props) {
  return (
    <MenuBarContainer>
      <button onClick={() => props.goToChooseProfilePage()}>
        Escolher pessoas
      </button>
      <p>Astromatch</p>
      <button onClick={() => props.goToMatchListPage()}>Lista</button>
    </MenuBarContainer>
  );
}

export default MenuBar;
