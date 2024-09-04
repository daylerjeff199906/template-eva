import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const HeaderSection = () => {
  return (
    <main className="py-6 border-b">
      <section className="container flex justify-between items-center">
        <div className="flex gap-3">
          <Button className="py-1 px-2 bg-transparent border text-gray-500 hover:bg-gray-100">
            <ArrowLeft size={20} />
          </Button>
          <section>
            <h1 className="text-2xl font-medium">Header section</h1>
            <h2 className="text-sm text-gray-500">
              This is a simple component that shows a header section with a
              title and a subtitle
            </h2>
          </section>
        </div>
        <div>
          <Button>Click me</Button>
        </div>
      </section>
    </main>
  )
}
