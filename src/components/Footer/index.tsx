import { Copyright } from '@/components/Copyright'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full bg-gray-900">
      <Copyright year={2023} name={'ゆまのプログラミングブログ'} />
    </footer>
  )
}
