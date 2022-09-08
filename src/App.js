import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react'
import SinglePost from './components/SinglePost'

function App() {
  const [ allPosts, setAllPosts ] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setAllPosts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts();
  }, []);
  
  return (
    <div className="app-wrapper">
      <div className='cards-container'>
        {allPosts.map((p, i) => <SinglePost 
          key={i} 
          title={p.title} 
          body={p.body}
          userId={p.userId}
          />)
        }
      </div>
    </div>
  );
}

export default App;
