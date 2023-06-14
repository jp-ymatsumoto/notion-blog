export const ProfileSidebar = () => {
  const name = process.env.PROFILE_NAME
    ? process.env.PROFILE_NAME
    : '佐々木太郎'
  const description = process.env.PROFILE_DESCRIPTION
    ? process.env.PROFILE_DESCRIPTION
    : '私はシステムエンジニアです'

  return (
    <aside className="flex flex-col w-60 border-gray-900 border bg-gray-800 text-gray-50">
      <img className="w-full h-32" src="/image.jpg" alt="プロフィール写真" />

      <h2 className="text-xl font-bold text-center my-2 px-2">{name}</h2>

      <p className="text-md my-2 px-4">{description}</p>
    </aside>
  )
}
