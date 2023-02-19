import { render, screen } from '@testing-library/react';
import About from './components/About/About';
import { Provider } from "react-redux"
import store from "../src/store"
import { StaticRouter } from "react-router-dom/server"
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from "./App"

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

test('renders learn react link', () => {
  render(<StaticRouter>
    <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
      {/* <About />
       */}
       <App />
    </Provider>
    </AlertProvider>
  </StaticRouter>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
