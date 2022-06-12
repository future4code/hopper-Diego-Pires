import React from "react";
import styled from "styled-components";

const OptionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

function OptionButtons(props) {
  return (
    <OptionButtonsContainer>
      <button onClick={props.onClickNo}>Não</button>
      <button onClick={props.onClickYes}>Sim</button>
    </OptionButtonsContainer>
  );
}

export default OptionButtons;