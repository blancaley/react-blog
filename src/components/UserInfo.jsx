import { useEffect } from "react";

const UserInfo = ({ fetchUserInfo, userInfo }) => {

  useEffect(() => {
    if (userInfo) return;
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