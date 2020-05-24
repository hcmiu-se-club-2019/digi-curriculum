import React, { Component } from 'react'
import styled from 'styled-components'
import CurriculumDropSource from './CurriculumDropSource'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Toolbar = styled.div`
  display: flex;
  border-bottom: solid 1px blue;
  background-color: whitesmoke;
`

const InfoDisp = styled.div`
  display: flex;
  width: 75%;
`

const Info = styled.div`
  padding-top: 5px;
  flex-basis: 100%;
  font-size: x-small;
  text-align: center;
  border-right: 1px solid blue;
`

const BtnGroup = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
`

export default class CurriculumDropPanel extends Component {
  render() {
    return (
      <Container>
        <Toolbar>
          <InfoDisp>
            <Info>
                <h6>Major</h6>
                <p>Industrial Engineering and Management</p>
            </Info>
            <Info>
                <h6>Sub Major</h6>
                <p>Logistics and Supply Chain Management</p>
            </Info>
            <Info>
                <h6>Program</h6>
                <p>International University</p>              
            </Info>
          </InfoDisp>
          <BtnGroup>
            <button className='btn btn-danger btn-sm btn-block m-2'>Discard Change</button>
            <button className='btn btn-info btn-sm btn-block m-2'>Reset</button>
            <button className='btn btn-primary btn-sm btn-block m-2'>Save Change</button>
          </BtnGroup>
        </Toolbar>
        <CurriculumDropSource />
      </Container>
    )
  }
}
