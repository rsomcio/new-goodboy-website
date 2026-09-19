import { createFileRoute } from '@tanstack/react-router'

function Menu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-4xl px-8 py-16">
      <div className="flex items-center justify-center">
        <img src="/assets/images/main.png" alt="Specials" className="w-[90%]" />
      </div>
      <div className="flex items-center justify-center">
        <img src="/assets/images/specials.png" alt="Menu" className="w-[90%]" />
      </div>
    </div>
  )
}

export const Route = createFileRoute('/menu')({
  component: Menu,
})
