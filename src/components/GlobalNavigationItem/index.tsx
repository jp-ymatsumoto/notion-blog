import Link from 'next/link'

type Props = {
  name: string
  href: string
}

export const GlobalNavigationItem = (props: Props) => {
  return (
    <div className="text-xl md:text-2xl px-1 md:px-2 py-1 md:py-2 text-gray-50 inline-block hover:text-yellow-300">
      <Link href={props.href}>{props.name}</Link>
    </div>
  )
}
