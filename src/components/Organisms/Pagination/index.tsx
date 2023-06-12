import { PaginationItem } from '@/components/atoms/PaginationItem'

type Props = {
  totalPages: number
  currentPage: number
}

export const Pagination = (props: Props) => {
  // const totalPages = await getPages(2)
  //   const pages = await getPages()
  //   const pageList = [...Array(pages)].map((i) => i + 1)

  const totalPages: number = Number.parseInt(props.totalPages.toString())
  const currentPage: number = Number.parseInt(props.currentPage.toString())
  let pageNumber = []
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumber.push(i)
    }
  }

  return (
    <nav className="flex flex-row gap-x-2">
      <PaginationItem label="<<" href="/" />
      {}

      {pageNumber.map((number) => (
        <PaginationItem
          label={number}
          href={`/?page=${number}`}
          key={number}
          isActived={number.toString() === props.currentPage.toString()}
        />
      ))}

      <PaginationItem label=">>" href="/" />
    </nav>
  )
}
