import { useState, useEffect } from "react";
import axios from "axios";

const usePosts = () => {
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

  return allPosts;
}
 
export default usePosts;