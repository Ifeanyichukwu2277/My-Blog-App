import Feed from "../Components/Feed"


const Home = ({posts}) => {
  return (
    <main className="space-y-6">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p className="glass-panel rounded-3xl px-6 py-10 text-center text-slate-300">
          No posts to display 
          </p>
        
      )}

    </main>
  )
}

export default Home