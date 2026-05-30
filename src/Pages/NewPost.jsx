
const NewPost = ({handleSubmit, postBody, setPostBody, postTitle, setPostTitle}) => {
  return (
    <main className="mx-auto max-w-3xl">
      <div className="glass-panel rounded-3xl p-6 sm:p-8">
      <h2 className="text-3xl font-semibold text-white">Create New Post</h2>
      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
        <label htmlFor="postTitle" className="text-sm font-medium text-slate-200">Title</label>
        <input 
         id="postTitle"
         type="text"
         required
         value={postTitle}
         onChange={(e) => setPostTitle(e.target.value)}
         className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500"
         />
        </div>

        <div className="space-y-2">
         <label htmlFor="postBody" className="text-sm font-medium text-slate-200">Body</label>
         <textarea 
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          className="min-h-44 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500"
          />
        </div>
        <button type="submit" className="inline-flex rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
          Submit
        </button>
      </form>
      </div>
    </main>
  )
}

export default NewPost