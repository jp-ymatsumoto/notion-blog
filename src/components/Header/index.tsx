import Link from 'next/link'
import { GlobalNavigation } from '@/components//GlobalNavigation'

export const Header = () => {
  const name = 'ゆまのプログラミングブログ'
  const items = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="flex flex-col w-full text-gray-50">
      <div className="flex flex-col items-center bg-gray-900 w-full">
        <h1 className="text-4xl my-12">
          <Link href="/">{name}</Link>
        </h1>
      </div>
      <div className="flex flex-col items-center bg-gray-600 w-full">
        <GlobalNavigation items={items} />
      </div>
    </header>
  )
}
