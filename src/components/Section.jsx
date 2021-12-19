import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
function Section({
  title,
  description,
  backgroundImg,
  leftButton,
  rightButton,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
    <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Fade bottom>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftButton}</LeftButton>
          {rightButton && <RightButton>{rightButton}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/img/down-arrow.svg" />
      </Buttons>
      </Fade>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/img/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url(${props.bgImage})`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: #171a20;
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
