export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-forest/20 border-t-forest rounded-full animate-spin" style={{ borderTopColor: 'var(--color-forest)' }} />
        <p className="text-sm text-charcoal/50 font-sans">Loading...</p>
      </div>
    </div>
  )
}
