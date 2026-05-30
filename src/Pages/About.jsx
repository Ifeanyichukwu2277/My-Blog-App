import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="glass-panel mx-auto max-w-3xl rounded-3xl p-6 sm:p-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/80">About</p>
      <h1 className="text-3xl font-semibold text-white">About Us</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
        We are a small team passionate about sharing ideas, tutorials, and stories. Our goal is to create a welcoming space where contributors and readers can learn together.
      </p>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="text-lg font-medium text-white">Our Mission</h3>
          <p className="mt-2 text-sm text-slate-300">To make approachable technical writing and community-driven content that helps people build confidence and ship projects.</p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white">Core Values</h3>
          <ul className="mt-2 list-inside list-disc text-sm text-slate-300">
            <li>Clarity over cleverness</li>
            <li>Community contribution</li>
            <li>Practical, hands-on learning</li>
          </ul>
        </div>
      </section>

      <div className="mt-6 flex items-center gap-4">
        <Link to="/new-post" className="inline-flex rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-300">Contribute a post</Link>
        <a href="mailto:hello@example.com" className="text-sm text-slate-300 hover:text-white">Contact us</a>
      </div>
    </div>
  )
}

export default About