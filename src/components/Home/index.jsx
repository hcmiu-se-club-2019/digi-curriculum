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

function Home() {
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  );
}

export default Home;
