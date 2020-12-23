import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 350px;
  padding-bottom: 350px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  background-color: lightgrey;
`;

const Home = () => {
  return(
    <div>
      <Container />
    </div>
  )
}

export default Home;
