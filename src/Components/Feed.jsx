import Post from "./Post"

const Feed = ({posts}) => {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
     {posts.map(post => (
        <Post key ={post.id} post={post}/>
     ))}
    </div>
  )
}

export default Feed