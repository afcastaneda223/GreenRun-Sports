import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Container, Themebtn,
} from './styles/styles.style';
import GlobalStyle from './styles/global.style';
import { themes } from './styles/themes.style';
import Signup from './Signup';
import { AuthProvider } from '../context/AuthContext';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const getOppositeTheme = () => ((currentTheme === 'light') ? 'dark' : 'light');

  return (
    <AuthProvider>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />
        <Container>
          <Themebtn onClick={() => setCurrentTheme(getOppositeTheme())}>
            <h1>
              {(currentTheme === 'light') ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
            </h1>
          </Themebtn>
          <Signup />
        </Container>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
