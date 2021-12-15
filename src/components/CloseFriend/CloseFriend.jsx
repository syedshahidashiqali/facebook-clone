import "./CloseFriend.css";

function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sideBarFriendListItem">
      <img className="sideBarFriendImg" src={PF+user.profilePicture} alt="" />
      <span className="sideBarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;