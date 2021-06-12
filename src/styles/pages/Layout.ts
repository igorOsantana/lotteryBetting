import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 15vh;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const LeftSection = styled.section`
  background-color: green;
  width: 45%;
  height: 65%;
`;

export const RightSection = styled.section`
  width: 25%;
  height: 65%;
`;
