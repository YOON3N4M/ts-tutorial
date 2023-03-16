import React, { Component } from "react";
import Counter from "./Counter";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  padding:0;
  margin:0;
}
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Button danger={false} />
        <Button danger />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Button = styled.button<{ danger: boolean }>`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props: any) => (props.danger ? "#e74c3c" : "2ecc71")};
`;

export default App;
