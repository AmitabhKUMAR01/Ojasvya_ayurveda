import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface CollectionHeaderProps {
  title: string
  description?: string
  totalCount: number
  breadcrumbs: BreadcrumbItem[]
}

export default function CollectionHeader({
  title,
  description,
  totalCount,
  breadcrumbs,
}: CollectionHeaderProps) {
  return (
    <div className="border-b border-gold/15 bg-sage/20 py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-charcoal/60">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1
              return (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-forest transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-charcoal font-medium" aria-current={isLast ? 'page' : undefined}>
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && <ChevronRight className="w-3 h-3 text-charcoal/40" />}
                </li>
              )
            })}
          </ol>
        </nav>

        {/* Title and Product Count */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">
            {title}
          </h1>
          <span className="text-xs md:text-sm font-sans text-charcoal/60 uppercase tracking-wider">
            {totalCount} {totalCount === 1 ? 'Product' : 'Products'}
          </span>
        </div>

        {description && (
          <p className="mt-3 text-sm md:text-base text-charcoal/70 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
