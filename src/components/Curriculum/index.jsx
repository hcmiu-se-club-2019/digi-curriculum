import React, { Component, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import UserProvider from "../contexts/userProvider";
import _ from "lodash";

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

// class Home extends Component {

//   render() {
//     return (
//       <div>
//         <EditLinkWrapper>
//           Warning: This page is under construction
//           <Link to="/curriculum/edit">
//             <EditLink>Edit Curriculum</EditLink>
//           </Link>
//         </EditLinkWrapper>
//         <Pathway>Pathway</Pathway>
//       </div>
//     );
//   }
// }

const CurriculumPage = () => {
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
};

const RedirectFunction = () => {
  return <Redirect to="/" />;
};

const Home = () => {
  // const userData = useContext(UserProvider.context);
  // console.log(userData);
  // if (_.isEmpty(userData)) return <RedirectFunction />;
  // else return <CurriculumPage />;
  return <CurriculumPage />
};

export default Home;
