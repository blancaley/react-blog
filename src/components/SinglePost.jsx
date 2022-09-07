import { useState } from "react";

const SinglePost = ( { title, body } ) => {
  const [ showUserInfo, setShowUserInfo ] = useState(false);

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={toggleUserInfo}>Show author</button>
      {showUserInfo && <p>Test</p>}
    </div>
  );
}
 
export default SinglePost;