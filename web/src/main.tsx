import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'
import { routeTree } from './routeTree.gen'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
  function gtag(...args: unknown[]): void
}

const GA_MEASUREMENT_ID = 'G-23YK4THCVN'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

router.subscribe('onLoad', ({ toLocation }) => {
  gtag('event', 'page_view', {
    page_path: toLocation.pathname,
    page_title: document.title,
    send_to: GA_MEASUREMENT_ID,
  })
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
