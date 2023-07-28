import { styled } from "styled-components";

export const Layout = styled.div`
  padding: 5rem;
  // border: 1px solid red;
  width: 100vw;
  min-height: 450px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HStack = styled.div`
  display: flex;
  width: 100%;
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
