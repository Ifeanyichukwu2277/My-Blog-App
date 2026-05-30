import { useParams, Link } from "react-router-dom"


const PostPage = ({ posts, handleDelete }) => {
const { id } = useParams() 
const post = posts.find(post => post.id.toString() === id)
  return (
    <main className="PostPage">
     <article className="post">
      { post &&
           <>
           <h2>{post.title}</h2>
           <p className="postDate">{post.datetime} </p>
           <p className="postBody">{post.body} </p>
           <button
           onClick = {() => handleDelete(post.id)}
           className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-full border border-rose-400/40 bg-rose-500/10 px-5 py-2.5 text-sm font-semibold text-rose-100 shadow-[0_12px_40px_rgba(244,63,94,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-300/60 hover:bg-rose-500/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:translate-y-0">
             Delete Post
           </button>
           </>
       }

       {!post &&
        <>
           <h2> page not found</h2>
           <p> Well that's quite Unusual</p>
           <p>
          <Link to="/">Go to home</Link>
           </p>
        </>
       }
     </article>
    </main>
  )
}

export default PostPage