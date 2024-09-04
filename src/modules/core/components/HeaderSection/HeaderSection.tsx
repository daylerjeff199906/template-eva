import { Button } from '@/components/ui/button'
import { ArrowLeft, Plus } from 'lucide-react'

interface IHeaderSectionProps {
  showBackButton?: boolean
  disableAddButton?: boolean
}

export const HeaderSection = (props: IHeaderSectionProps) => {
  const { showBackButton, disableAddButton } = props
  return (
    <main className="py-6 border-b">
      <section className="container flex justify-between items-center">
        <div className="flex gap-3">
          {showBackButton && (
            <Button className="py-1 px-2 bg-transparent border text-gray-500 hover:bg-gray-100">
              <ArrowLeft size={20} />
            </Button>
          )}
          <section>
            <h1 className="text-2xl font-medium">Header section</h1>
            <h2 className="text-sm text-gray-500">
              This is a simple component that shows a header section with a
              title and a subtitle
            </h2>
          </section>
        </div>
        <div>
          {!disableAddButton && (
            <Button>
              <div className="flex gap-4">
                <Plus size={20} />
                <h3>Agregar</h3>
              </div>
            </Button>
          )}
        </div>
      </section>
    </main>
  )
}
