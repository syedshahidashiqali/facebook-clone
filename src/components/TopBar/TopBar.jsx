import "./TopBar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

function TopBar() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);

    return (
        <div className="topBarContainer">
            <div className="topBarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Facebook</span>
                </Link>
            </div>
            <div className="topBarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input className="searchInput" type="text" placeholder="Search for friend, post or video" />
                </div>
            </div>
            <div className="topBarRight">
                <div className="topBarLinks">
                    <span className="topBarLink">Homepage</span>
                    <span className="topBarLink">Timeline</span>
                </div>
                <div className="topBarIcons">
                    <div className="topBarIconItem">
                        <Person />
                        <span className="topBarIconBadge">1</span>
                    </div>
                    <div className="topBarIconItem">
                        <Chat />
                        <span className="topBarIconBadge">2</span>
                    </div>
                    <div className="topBarIconItem">
                        <Notifications />
                        <span className="topBarIconBadge">1</span>
                    </div>                  
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img className="topBarImg" src={user.profilePicture ? `${PF}${user.profilePicture}` : `${PF}person/noAvatar.png`} alt="" />
                </Link>
            </div>
        </div>
    )
};

export default TopBar;
