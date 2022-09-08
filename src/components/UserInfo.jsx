import { useEffect, useState } from "react";
import axios from "axios";

const UserInfo = ({ userId }) => {
  const [ userInfo, setUserInfo ] = useState({});

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUserInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserInfo();
  }, []);

  return (
    <div>
      <p>{userInfo?.name}</p>
      <p>{userInfo?.email}</p>
      <p>{userInfo?.address?.city}</p>
    </div>
  );
}
 
export default UserInfo;