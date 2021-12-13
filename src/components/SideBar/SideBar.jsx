import "./SideBar.css";
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from "@mui/icons-material";

function SideBar() {
    return (
        <div className="sideBar">
            <div className="sideBarWrapper">
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                        <RssFeed className="sideBarIcon" />
                        <span className="sideBarListItemText">Feed</span>
                    </li>
                    <li className="sideBarListItem">
                        <Chat className="sideBarIcon" />
                        <span className="sideBarListItemText">Chats</span>
                    </li>
                    <li className="sideBarListItem">
                        <PlayCircleFilledOutlined className="sideBarIcon" />
                        <span className="sideBarListItemText">Videos</span>
                    </li>
                    <li className="sideBarListItem">
                        <Group className="sideBarIcon" />
                        <span className="sideBarListItemText">Groups</span>
                    </li>
                    <li className="sideBarListItem">
                        <Bookmark className="sideBarIcon" />
                        <span className="sideBarListItemText">Bookmarks</span>
                    </li>
                    <li className="sideBarListItem">
                        <HelpOutline className="sideBarIcon" />
                        <span className="sideBarListItemText">Questions</span>
                    </li>
                    <li className="sideBarListItem">
                        <WorkOutline className="sideBarIcon" />
                        <span className="sideBarListItemText">Jobs</span>
                    </li>
                    <li className="sideBarListItem">
                        <Event className="sideBarIcon" />
                        <span className="sideBarListItemText">Events</span>
                    </li>
                    <li className="sideBarListItem">
                        <School className="sideBarIcon" />
                        <span className="sideBarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sideBarButton">Show More</button>
                <hr className="sideBarHr" />
                <ul className="sideBarFriendList">
                    <li className="sideBarFriendListItem">
                        <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sideBarFriendName">Jane Doe</span>
                    </li>
                    <li className="sideBarFriendListItem">
                        <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sideBarFriendName">Jane Doe</span>
                    </li>
                    <li className="sideBarFriendListItem">
                        <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sideBarFriendName">Jane Doe</span>
                    </li>
                    <li className="sideBarFriendListItem">
                        <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sideBarFriendName">Jane Doe</span>
                    </li>
                    <li className="sideBarFriendListItem">
                        <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sideBarFriendName">Jane Doe</span>
                    </li>
                    <li className="sideBarFriendListItem">
                        <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sideBarFriendName">Jane Doe</span>
                    </li>
                    <li className="sideBarFriendListItem">
                        <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sideBarFriendName">Jane Doe</span>
                    </li>
                    <li className="sideBarFriendListItem">
                        <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sideBarFriendName">Jane Doe</span>
                    </li>
                    <li className="sideBarFriendListItem">
                        <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sideBarFriendName">Jane Doe</span>
                    </li>
                    <li className="sideBarFriendListItem">
                        <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sideBarFriendName">Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default SideBar;
