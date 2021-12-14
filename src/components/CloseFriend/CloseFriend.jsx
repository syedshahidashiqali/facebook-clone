import "./CloseFriend.css";

function CloseFriend({ user }) {
  return (
    <li className="sideBarFriendListItem">
      <img className="sideBarFriendImg" src={user.profilePicture} alt="" />
      <span className="sideBarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;