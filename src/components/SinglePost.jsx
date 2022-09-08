import { useState } from "react";
import UserInfo from "./UserInfo";

const SinglePost = ( { title, body, userId } ) => {
  const [ showUserInfo, setShowUserInfo ] = useState(false);

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={toggleUserInfo}>Show author</button>
      {showUserInfo && <UserInfo userId={userId}/>}
    </div>
  );
}
 
export default SinglePost;