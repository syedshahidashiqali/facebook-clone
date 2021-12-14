import "./RightBar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
function RightBar() {
    return (
        <div className="rightBar">
            <div className="rightBarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className="rightBarAd" src="/assets/ad.png" alt="" />
                <h4 className="rightBarTitle">Online Friends</h4>
                <ul className="rightBarFriendList">
                    {Users.map((user) => (
                        <Online key={user.id} user={user} />
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default RightBar;
