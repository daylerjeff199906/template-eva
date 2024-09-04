import { Button } from '@/components/ui/button'
import { ArrowLeft, Plus } from 'lucide-react'

interface IHeaderSectionProps {
  title?: string
  subtitle?: string
  showBackButton?: boolean
  disableAddButton?: boolean
  labelAddButton?: string
  renderLeftSection?: React.ReactNode
  renderRightSection?: React.ReactNode
}

export const HeaderSection = (props: IHeaderSectionProps) => {
  const {
    showBackButton,
    disableAddButton,
    subtitle,
    title,
    labelAddButton,
    renderLeftSection,
    renderRightSection,
  } = props

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
            <h1 className="text-2xl font-medium">
              {title || 'Header Section'}
            </h1>
            <h2 className="text-sm text-gray-500">{subtitle || 'Subtitle'}</h2>
          </section>
          {renderLeftSection && (
            <section
              id="left-section"
              className=""
            >
              {renderLeftSection}
            </section>
          )}
        </div>
        <div className="flex items-center gap-4">
          {renderRightSection && (
            <section id="right-section">{renderRightSection}</section>
          )}
          {!disableAddButton && (
            <Button>
              <div className="flex gap-4 items-center">
                <Plus size={20} />
                <h3>{labelAddButton || 'Create'}</h3>
              </div>
            </Button>
          )}
        </div>
      </section>
    </main>
  )
}
