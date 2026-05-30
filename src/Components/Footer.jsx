import { Link } from "react-router-dom"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-8 border-t border-white/10 py-8 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="text-sm">&copy; {year} My App. All rights reserved.</p>
          <p className="mt-1 text-xs text-slate-500">Built with React & Tailwind</p>
        </div>

        <nav className="flex gap-4">
          <Link aria-label="Go to home" className="text-sm hover:text-white" to="/">Home</Link>
          <Link aria-label="About" className="text-sm hover:text-white" to="/about">About</Link>
          <Link aria-label="Create post" className="text-sm hover:text-white" to="/new-post">Write</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a className="text-sm hover:text-white" href="mailto:hello@example.com">Ifeanyichukwu Joshua</a>
          <a className="sr-only" href="https://github.com/" aria-label="GitHub" />
          <a className="text-slate-300 hover:text-white" href="https://github.com/" aria-label="GitHub" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .296a12 12 0 00-3.793 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.338.73-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.75.082-.74.082-.74 1.205.086 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.485.995.108-.774.42-1.3.763-1.6-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 016 0c2.29-1.553 3.296-1.23 3.296-1.23.656 1.653.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.476 5.92.43.372.815 1.102.815 2.222 0 1.605-.015 2.898-.015 3.292 0 .322.216.697.825.58A12.003 12.003 0 0012 .296" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer