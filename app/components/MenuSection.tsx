import { MenuCard } from "./MenuCard"

type MenuItem = {
  id: number
  name: string
  price: number
  description: string
}

type MenuSectionProps = {
  title: string
  items: MenuItem[]
}

export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

