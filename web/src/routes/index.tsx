import { createFileRoute } from '@tanstack/react-router'

function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 h-screen">

      <div className="h-full bg-[url('/assets/images/chancespopup.jpeg')] bg-cover bg-center"></div>

      <div className="mx-auto max-w-4xl gap-8 px-24 py-16">
        <div className='mx-auto'>
          <div><h2 className="text-4xl font-bold mb-6">Your local pizza dealer</h2>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Come visit us at one of our popups or book us for your next party!

            </p></div>
          <div><img src='./assets/goodboylogoblack.png' className="w-125 h-auto object-cover mx-auto" /></div>
        </div>



      </div>

    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Home,
})
