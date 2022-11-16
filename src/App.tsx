import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import styled from 'styled-components';

const MainContainer = styled.div`
    background-color: #9E9D9E;
    padding:20px;
`

function App(): JSX.Element {
  return (
    <MainContainer>
      <Board />
    </MainContainer>
  );
}

export default App;
