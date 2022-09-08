import { useEffect } from "react";

const UserInfo = ({ fetchUserInfo, userInfo }) => {

  useEffect(() => {
    if (userInfo) return;
    fetchUserInfo();
  }, []);

  return (
    <div>
      <p>{userInfo?.name} | {userInfo?.email} | {userInfo?.address?.city}</p>
    </div>
  );
}
 
export default UserInfo;