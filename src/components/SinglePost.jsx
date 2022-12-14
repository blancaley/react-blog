import axios from "axios";
import { useState } from "react";
import UserInfo from "./UserInfo";

const SinglePost = ( { title, body, userId } ) => {
  const [ showUserInfo, setShowUserInfo ] = useState(false);
  const [ userInfo, setUserInfo ] = useState();

  const fetchUserInfo = async () => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUserInfo(data);
    } catch (error) {
      console.log(error);
    }
  }

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  }

  return (
    <div className="card">
      <div className="inner-card-main">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <button onClick={toggleUserInfo} className="author-btn">{showUserInfo ? "Hide": "Show"} author</button>
      {showUserInfo && <UserInfo fetchUserInfo={fetchUserInfo} userInfo={userInfo}/>}
    </div>
  );
}
 
export default SinglePost;