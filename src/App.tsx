import React from 'react';
import Navigation from './Navigation';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './Services';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
