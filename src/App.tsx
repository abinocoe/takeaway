import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ArticlesPage from './components/ArticlesPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticlesPage />
    </QueryClientProvider>
  );
}

export default App;
