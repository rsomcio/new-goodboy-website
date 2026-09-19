import { createFileRoute } from '@tanstack/react-router'

function Shop() {
  return (
    <div className="mx-auto max-w-4xl gap-8 px-24 py-16">
      <h1 className="text-3xl font-bold">Shop</h1>
      <p className="mt-2 text-neutral-600">Browse our products.</p>
    </div>
  )
}

export const Route = createFileRoute('/shop')({
  component: Shop,
})
