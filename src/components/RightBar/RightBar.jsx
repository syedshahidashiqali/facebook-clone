import "./RightBar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const url = "https://social-app-backend.vercel.app/api/v1";

function RightBar({ user }) {

  const { user:currentUser, dispatch } = useContext(AuthContext);
  const [ followed, setFollowed ] = useState(currentUser.followings.includes(user?._id));

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser, user?._id]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`${url}/users/${user?._id}/unfollow`, {
          userId: currentUser?._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`${url}/users/${user?._id}/follow`, {
          userId: currentUser?._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
  };

  const [ friends, setFriends ] = useState([]);

  useEffect(() => {
    const getFriends = async() => {
      try{
        const res = await axios.get(`${url}/users/friends/${user?._id}`);
        setFriends(res.data);
      } catch(err){
        console.log(err);
      }
    };
    getFriends();
  }, [user?._id]);
  
  // RightBar for Home Page
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}gift.png`} alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightBarAd" src={`${PF}ad.png`} alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  // RightBar for Profile Page
  const ProfileRightBar = ()    => {
      return(
          <>
          {user?.username !== currentUser?.username && (
            <button className="rightBarFollowButton" onClick={handleClick}>
              { followed ? "Unfollow" : "Follow" }
              { followed ? <Remove /> : <Add /> }
            </button>
          )}
          <h4 className="rightBarTitle">User Information</h4>
          <div className="rightBarInfo">
              <div className="rightBarInfoItem">
                  <span className="rightBarInfoKey">City:</span>
                  <span className="rightBarInfoValue">{user.city}</span>
              </div>
              <div className="rightBarInfoItem">
                  <span className="rightBarInfoKey">From:</span>
                  <span className="rightBarInfoValue">{user.from}</span>
              </div>
              <div className="rightBarInfoItem">
                  <span className="rightBarInfoKey">Relationship:</span>
                  <span className="rightBarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "Other"}</span>
              </div>
          </div>
          <h4 className="rightBarTitle">User friends</h4>
          <div className="rightBarFollowings">
            {friends.map((friend, i) => {
              return(
                <Link 
                  style={{ textDecoration: "none", color: "#333" }}
                  to={`/profile/${friend.username}`} 
                  key={i}
                >
                  <div className="rightBarFollowing">
                      <img
                        className="rightBarFollowingImg" 
                        src={
                          friend.profilePicture
                          ? `${PF}${friend.profilePicture}`
                          : `${PF}person/noAvatar.png`
                        } 
                        alt="" 
                        />
                      <span className="rightBarFollowingName">{friend.username}</span>
                  </div>
              </Link>
              )
            })}
          </div>
          </>
      );
  };

  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default RightBar;
