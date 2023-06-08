import { GlobalNavigationItem } from '@/components/GlobalNavigationItem'

type Props = {
  items: {
    name: string
    href: string
  }[]
}

export const GlobalNavigation = (props: Props) => {
  return (
    <nav className="my-3">
      {props.items.map((item) => (
        <GlobalNavigationItem
          name={item.name}
          href={item.href}
          key={item.href}
        />
      ))}
    </nav>
  )
}
