import Link from 'next/link'

type Props = {
  name: string
  href: string
  classes?: string
}

/**
 * ブログ一覧の各記事を読むためのボタンのコンポーネントです
 * @param {Object} props - コンポーネントのプロパティ
 * @param {string} props.name - ボタンの表示名
 * @param {string} props.href - ボタンのリンク先のURL
 * @param {string} [props.classes] - クラス名（オプション）
 * @returns {JSX.Element} - 記事を読むためのボタンを表示する <a> 要素
 */
export const PostReadButton = (props: Props) => {
  const classes = props.classes
    ? props.classes
    : 'text-md text-center py-3 px-4 bg-gray-900 text-gray-50 rounded-lg'
  return (
    <Link className={classes} href={props.href}>
      {props.name}
    </Link>
  )
}
