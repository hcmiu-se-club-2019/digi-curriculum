import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EditLinkWrapper = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: grid;
  font-weight: bold;
`;

const EditLink = styled.div`
  border: 3px solid black;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Pathway = styled.div`
  padding-top: 350px;
  padding-bottom: 350px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  background-color: lightgrey;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <EditLinkWrapper>
          Warning: This page is under construction
          <Link to="/curriculum/edit">
            <EditLink>Edit Curriculum</EditLink>
          </Link>
        </EditLinkWrapper>
        <Pathway>Pathway</Pathway>
      </div>
    );
  }
}

export default Home;
