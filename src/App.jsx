import { useState, useEffect } from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import NewPost from './Pages/NewPost'
import PostPage from './Pages/PostPage'
import Missing from './Pages/Missing'
import { Routes, Route, useNavigate } from 'react-router-dom'
import {format} from 'date-fns'

function App() {

  const [posts, setPosts] = useState ([
    {
      id: "1",
      title: "My First Post",
      datetime: "May 29, 2026 11:17:36 AM",
      body: "This is my first post"
    },

    {
      id: "2",
      title: "My Second Post",
      datetime: "May 29, 2026 11:17:36 AM",
      body: "This is my second post"
    },

    {
      id: "3",
      title: "My Third Post",
      datetime: "May 29, 2026 11:17:36 AM",
      body: "This is my third post"
    },

    {
      id: "4",
      title: "My Fourth Post",
      datetime: "May 29, 2026 11:17:36 AM",
      body: "This is my fourth post"
    }
    
  ])

  const [search, setSearch] = useState ("");
  const [searchResults, setSearchResults] = useState ([]);
  const [postTitle, setPostTitle] = useState ('');
  const [postBody, setPostBody] = useState ('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? (parseInt(posts[posts.length - 1].id, 10) + 1).toString() : '1';
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody('');
    navigate('/');
  }


  const handleDelete = (id) => {
    const postList = posts.filter(p => p.id !== id);
    setPosts(postList);
    navigate('/');
  }

  useEffect(() => {
    if (search) {
      const filteredResults = posts.filter(post =>
        (post.body).toLowerCase().includes(search.toLowerCase()) ||
        ((post.title).toLowerCase()).includes(search.toLowerCase())
      )
      setSearchResults(filteredResults.reverse())
    } else {
      setSearchResults(posts.slice().reverse())
    }
  }, [posts, search])
  return (
    <div className="page-shell text-slate-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute -right-24 top-72 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-32 left-[30%] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Header title="My Blog" />
      <NavBar search={search} setSearch={setSearch} />

      <main className="content-shell">
        <Routes>
          <Route path="/" element={<Home posts={searchResults} />} />
          <Route path="/about" element={<About />} />
          <Route path="/new-post" element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} />} />
          <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
