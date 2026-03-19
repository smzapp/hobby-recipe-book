export default function SearchBar({ search, setSearch }: any) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search recipes..."
      className="w-full p-2 border border-gray-400 focus-visible:border-indigo-400  rounded-xl"
    />
  )
}
