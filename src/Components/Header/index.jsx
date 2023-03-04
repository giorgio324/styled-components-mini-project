import { StyledHeader, Logo, Nav, Image } from './styles';
import { Container } from '../global styles/Container.styles';
import { Button } from '../global styles/Button';
import { Flex } from '../global styles/Flex';
import logo from '../../images/logo.svg';
import screenMockup from '../../images/screen-mockups.svg';
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt='' />
          <Button>try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>build the community your fans will love</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              enim, dicta cumque quae minus voluptate nesciunt mollitia corporis
              esse qui nobis nisi a repellendus ipsa quo? Dicta fugit quaerat
              numquam nam laudantium ea minima beatae placeat, eveniet, saepe
              officia perspiciatis?
            </p>
            <Button bg='#ff0099' color='#fff'>
              get started for free
            </Button>
          </div>
          <Image src={screenMockup} />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
