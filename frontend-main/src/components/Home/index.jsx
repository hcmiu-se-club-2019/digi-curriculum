import React, { useContext } from "react";
import styled from "styled-components";
import UserProvider from '../contexts/userProvider'
import _ from 'lodash'
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
  const userData = useContext(UserProvider.context);
  console.log(userData);
  return(
    <div>
      <Container>
        <h1>{_.isEmpty(userData) ? "PLEASE LOGIN!" : "Welcome " + userData.displayName}</h1>
      </Container>
    </div>
  )
}

export default Home;
