import { Link } from "react-router-dom"
const Missing = () => {
  return (
    <div className="glass-panel mx-auto max-w-2xl rounded-3xl p-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/80">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-white">Page Not Found</h1>
      <p className="mt-4 text-slate-300">The page you are looking for does not exist.</p>
    <p> <link to = "/">Go to Home</link></p> 
    </div>
  )
}

export default Missing