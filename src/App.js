import { ThemeProvider } from 'styled-components';
import { Container } from './Components/global styles/Container.styles';
import GlobalStyles from './Components/global styles/Global';
import Header from './Components/Header';
import content from './Data/content';
import Card from './Components/Card';
import Footer from './Components/Footer';
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
