import "./Profile.css";
import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/RightBar/RightBar";

function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <TopBar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={`${PF}post/3.jpeg`} alt="" />
                            <img className="profileUserImg" src={`${PF}person/7.jpeg`} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;