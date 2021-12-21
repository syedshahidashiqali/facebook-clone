import "./RightBar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add } from "@mui/icons-material";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

function RightBar({ user }) {

  const { user:currentUser } = useContext(AuthContext);

  const [ friends, setFriends ] = useState([]);

  useEffect(() => {
    const getFriends = async() => {
      const url = "http://localhost:5000/api/v1";
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
            <button className="rightBarFollowButton">
              Follow <Add />
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
