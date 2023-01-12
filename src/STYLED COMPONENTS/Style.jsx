import styled from "styled-components";

export const Container = styled.div`
  background-color: #eeee;
  padding: 12px;
  margin: 12px;
`;

export const Text = styled.p`
  color: #000;
`;

export const Button = styled.button`
  background: ${(props) => (props.abc ? "palevioletred" : "white")};
  color: ${(props) => (props.abc ? "purple" : "black")};
  border-radius: 20px;
`;
