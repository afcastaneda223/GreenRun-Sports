import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Container, Cardwrap, Themebtn, Cardimg,
} from './styles/styles.style';
import GlobalStyle from './styles/global.style';
import { themes } from './styles/themes.style';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const getOppositeTheme = () => ((currentTheme === 'light') ? 'dark' : 'light');

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      <Container>
        <Cardwrap>
          <Themebtn onClick={() => setCurrentTheme(getOppositeTheme())}>
            <h1>
              {(currentTheme === 'light') ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
            </h1>
          </Themebtn>
          <Cardimg>
            <h1>cardimg</h1>
          </Cardimg>
        </Cardwrap>
      </Container>
    </ThemeProvider>
  );
};

export default App;
