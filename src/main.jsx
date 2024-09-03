import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/product.jsx'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)