import axios from 'axios';
import './App.css';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { posts } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return posts;
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts();
  }, [])
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
