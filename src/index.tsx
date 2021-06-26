import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
