import "./Profile.css";
import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/RightBar/RightBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
    const [ user, setUser ] = useState({});

    const { username } = useParams();
    
    useEffect(() => {
        const url = "http://localhost:5000/api/v1";
        const fetchUser = async() => {
            const res = await axios.get(`${url}/users?username=${username}`);
            setUser(res.data);

        };
        fetchUser();
    },[username]);

    return (
        <div>
            <TopBar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={`${user.coverPicture}` || `${PF}person/noCover.png`} alt="" />
                            <img className="profileUserImg" src={`${user.profilePicture}` || `${PF}person/noAvatar.png`} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.description}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <RightBar user={user} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;