import { createFileRoute } from '@tanstack/react-router'
import { SimpleCarousel } from '@/components/SimpleCarousel'

function Catering() {
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center">
        <SimpleCarousel />
      </div>
      <div className="px-8 py-16">
        <h1 className="text-3xl font-bold">Catering Packages</h1>

        <p className="mt-2 text-neutral-600">Base Catering Package | $700</p>
        <ul className="mt-2 list-disc pl-6">
          <li>Up to 40 guests</li>
          <li>2 to 3 hours of service</li>
          <li>Pizza & Bread Buffet setup included</li>
          <li>Additional guests: $18 per person</li>
        </ul>

        <p className="mt-4 text-neutral-600">Apps, Salads & desserts</p>
        <ul className="mt-2 list-disc pl-6">
          <li>Priced upon request</li>
        </ul>

        <p className="mt-4 text-neutral-600">
          Service fee, local sales taxes, and travel beyond 20 miles not included
        </p>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/catering')({
  component: Catering,
})
