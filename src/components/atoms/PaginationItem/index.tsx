import Link from 'next/link'

type Props = {
  label: string | number
  href: string
  isActived?: boolean
  classes?: string
}

/**
 * ページネーションのボタンのコンポーネントです
 * @param {Object} props - コンポーネントのプロパティ
 * @param {string | number} props.label - ボタンの表示ラベル
 * @param {string} props.href - ボタンのリンク先URL
 * @param {boolean} [props.isActived] - ボタンのアクティブ状態（オプション）
 * @param {string} [props.classes] - ボタンのクラス名（オプション）
 * @returns {JSX.Element} - ページネーションのボタンを表示する <a> 要素
 */
export const PaginationItem = (props: Props) => {
  const classes = props.classes
    ? props.classes
    : ' text-md text-center text-gray-900 py-1 px-1 '

  return (
    <button
      className={`w-10 h-10 ${props.isActived && 'bg-gray-200 rounded-sm'}`}
    >
      <Link className={classes} href={props.href}>
        {props.label}
      </Link>
    </button>
  )
}
