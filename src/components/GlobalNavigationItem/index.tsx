import Link from 'next/link'

type Props = {
  name: string
  href: string
}

export const GlobalNavigationItem = (props: Props) => {
  return (
    <div className="text-2xl px-2 py-2 text-gray-50 inline-block hover:text-yellow-300">
      <Link href={props.href}>{props.name}</Link>
    </div>
  )
}
