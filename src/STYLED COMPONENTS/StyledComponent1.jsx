import { Container, Text, Button } from "./Style";

const StyledComponent1 = ({ className, children }) => {
  return (
    <div>
      <h1  className={className}>GELLO HELLO</h1>
    </div>
    // <Container>
    //   <Text>Hello I'm from With Styled Component Example</Text>
    //   <Button>Submit</Button>
    //   <Button abc>Submit</Button>
    // </Container>
  );
};

export default StyledComponent1;
