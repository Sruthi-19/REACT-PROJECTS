import styled from "styled-components";

const UL = styled.ul`
  li:nth-child(3) {
    color: ${(props) => props.color};
  }
  li:hover {
    color: ${(props) => props.hover};
  }
`;

const ChildElementExample = () => {
  return (
    <UL color="green" hover="yellow">
      <li>Ankit</li>
      <li>Ankit</li>
      <li>Ankit</li>
      <li>Ankit</li>
    </UL>
  );
};

export default ChildElementExample;
