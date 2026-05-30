const Header = ({title}) => {
  return (
    <header className="glass-panel mb-5 rounded-3xl px-6 py-6 sm:px-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/80">
        Daily notes and thoughts
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
        A compact blog layout with a crisp dark theme, glass panels, and easy navigation.
      </p>
    </header>
  )
}

export default Header