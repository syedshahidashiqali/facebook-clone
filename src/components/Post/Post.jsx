import './Post.css';
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";


function Post({ post }) {
    // post matching user logic
    // const a = Users.filter((user) => user.id === post.id)
    // console.log(a[0].username)
    const [ like, setLike ] = useState(post.like);
    const [ isLiked, setIsLiked ] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like -1 : like + 1);
        setIsLiked(!isLiked);
    };
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((user) => user.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter((user) => user.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" onClick={likeHandler} src="/assets/like.png" alt="" />
                        <img className="likeIcon" onClick={likeHandler} src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;