import "./TopBar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
function TopBar() {
    return (
        <div className="topBarContainer">
            <div className="topBarLeft">
                <span className="logo">Facebook</span>
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
                <img className="topBarImg" src="/assets/person/1.jpeg" alt="" />
            </div>
        </div>
    )
};

export default TopBar;
