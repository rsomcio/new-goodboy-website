import { createFileRoute } from '@tanstack/react-router'

function About() {
  return (
    <div className="mx-auto max-w-4xl gap-8 px-24 py-16">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-2 text-neutral-600">Learn more about us.</p>
    </div>
  )
}

export const Route = createFileRoute('/about')({
  component: About,
})
