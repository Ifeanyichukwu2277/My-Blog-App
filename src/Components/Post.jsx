import { Link } from "react-router-dom"

const Post = ({ post }) => {
  return (
    <article className="glass-panel group rounded-3xl p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-sky-300/30">
       <Link to={`/post/${post.id}`} className="block">
         <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">
           Post {post.id}
         </p>
         <h2 className="text-xl font-semibold text-white transition-colors group-hover:text-sky-200">
           {post.title}
         </h2>
         <p className="mt-2 text-sm text-slate-400">{post.datetime}</p>
       </Link>
       <p className="postBody mt-4 text-sm leading-6 text-slate-300">
        {post.body.length <= 25
         ? post.body :  `${(post.body).slice(0, 25)}...`
         
        }
       </p>
    </article>
  )
}

export default Post