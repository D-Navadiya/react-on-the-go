import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

function AppProviders({ children }) {
  return (
    <ChakraProvider>
      <Router>{children}</Router>
    </ChakraProvider>
  );
}

export { AppProviders };
