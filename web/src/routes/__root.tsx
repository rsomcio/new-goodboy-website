import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

function RouterDevtools() {
  return (
    <TanStackRouterDevtools position="bottom-right" />
  )
}

function NavBar() {
  return (
    <nav className="border-b border-neutral-200 px-6 py-4">
      <div className="mx-auto flex max-w-4xl items-center gap-6">
        <Link to="/" className="text-lg font-bold">Goodboy Pizza</Link>
        <div className="flex gap-4">
          <Link to="/" className="text-sm hover:underline" activeProps={{ className: 'font-bold' }}>Home</Link>
          <Link to="/about" className="text-sm hover:underline" activeProps={{ className: 'font-bold' }}>About</Link>
          <Link to="/shop" className="text-sm hover:underline" activeProps={{ className: 'font-bold' }}>Shop</Link>
          <Link to="/catering" className="text-sm hover:underline" activeProps={{ className: 'font-bold' }}>Catering</Link>
          <Link to="/menu" className="text-sm hover:underline" activeProps={{ className: 'font-bold' }}>Menu</Link>
        </div>
      </div>
    </nav>
  )
}

function Router() {
  return (
    <>
      <NavBar />
      <main className="mx-auto">
        <Outlet />
      </main>
      <RouterDevtools />
    </>
  )
}

export const Route = createRootRouteWithContext()({
  component: Router,
})
