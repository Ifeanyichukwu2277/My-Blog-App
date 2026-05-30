import { Link } from "react-router-dom"
const Missing = () => {
  return (
    <div className="glass-panel mx-auto max-w-2xl rounded-3xl p-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/80">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-white">Page Not Found</h1>
      <p className="mt-4 text-slate-300">The page you are looking for does not exist.</p>
      <p className="mt-6">
        <Link to="/" className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 hover:border-sky-300/40 hover:bg-sky-400/10 hover:text-white">
          Go to Home
        </Link>
      </p>
    </div>
  )
}

export default Missing