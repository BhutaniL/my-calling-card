export function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 id={id} className="font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      <span className="h-1 w-12 rounded-full bg-primary" aria-hidden="true" />
    </div>
  )
}
