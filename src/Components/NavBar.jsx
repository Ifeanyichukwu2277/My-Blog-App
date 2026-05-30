import { Link } from "react-router-dom"

const Navbar = ({search, setSearch}) => {
  return (
    <nav className="glass-panel flex flex-col gap-4 rounded-3xl px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
      <form className="flex-1" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search" className="sr-only">Search posts</label>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-200">
          <span className="text-sky-300">⌕</span>
          <input
            id="search"
            type="text"
            placeholder="Search posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm placeholder:text-slate-400"
          />
        </div>
      </form>

      <ul className="flex flex-wrap gap-2 text-sm font-medium">
        <li>
          <Link className="rounded-full border border-white/10 px-4 py-2 text-slate-200 hover:border-sky-300/40 hover:bg-sky-400/10 hover:text-white" to="/">home</Link>
        </li>
        <li>
          <Link className="rounded-full border border-white/10 px-4 py-2 text-slate-200 hover:border-sky-300/40 hover:bg-sky-400/10 hover:text-white" to="/new-post">Post</Link>
        </li>
        <li>
          <Link className="rounded-full border border-white/10 px-4 py-2 text-slate-200 hover:border-sky-300/40 hover:bg-sky-400/10 hover:text-white" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar