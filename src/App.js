import './App.css';
import usePosts from './hooks/usePosts';
import SinglePost from './components/SinglePost'

function App() {
  const allPosts = usePosts();
  
  return (
    <div className="app-wrapper">
      <header className='app-header'>
        <h1>Blogginlägg (React + API)</h1>
      </header>
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
