'use client'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Plus } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { IHeaderSection } from '@/types'

export const HeaderSection = (props: IHeaderSection.IHeaderSectionProps) => {
  const {
    showBackButton,
    disableAddButton,
    subtitle,
    title,
    labelAddButton,
    renderLeftSection,
    renderRightSection,
    hrefAddButton,
  } = props
  const router = useRouter()

  const handleBack = () => router.back()

  return (
    <main className="py-6 border-b bg-white">
      <section className="container flex justify-between items-center">
        <div className="flex gap-3">
          {showBackButton && (
            <Button
              className="py-1 px-2 bg-transparent border text-gray-500 hover:bg-gray-100"
              onClick={handleBack}
            >
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
            <Button asChild>
              <Link
                className="flex gap-4 items-center"
                href={hrefAddButton || '/'}
              >
                <Plus size={20} />
                <h3>{labelAddButton || 'Create'}</h3>
              </Link>
            </Button>
          )}
        </div>
      </section>
    </main>
  )
}
