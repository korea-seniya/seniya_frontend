import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CheckoutPage from './pages/payment/CheckoutPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  </StrictMode>,
)
