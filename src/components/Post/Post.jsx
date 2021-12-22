import './Post.css';
import { MoreVert } from "@mui/icons-material";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';


function Post({ post }) {
    const url = "https://social-app-backend.vercel.app/api/v1";
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    // post matching user logic
    // const a = Users.filter((user) => user.id === post.id)
    // console.log(a[0].username)
    const [ like, setLike ] = useState(post.likes.length);
    const [ isLiked, setIsLiked ] = useState(false);
    const [ user, setUser ] = useState({});
    const { user: currentUser } = useContext(AuthContext);

    const likeHandler = () => {
        try{
            axios.put(`${url}/posts/${post._id}/like`, { userId: currentUser._id });
        } catch(err){
            console.log(err);
        }
        setLike(isLiked ? like -1 : like + 1);
        setIsLiked(!isLiked);
    };

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id])
    useEffect(() => {
        const fetchUser = async() => {
            const res = await axios.get(`${url}/users?userId=${post.userId}`);
            setUser(res.data);

        };
        fetchUser();
    },[post.userId]);
    
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img className="postProfileImg" src={user.profilePicture ? `${PF}${user.profilePicture}` : `${PF}/person/noAvatar.png`} alt="" />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.description}</span>
                    <img className="postImg" src={PF+post?.image} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" onClick={likeHandler} src={`${PF}/like.png`} alt="" />
                        <img className="likeIcon" onClick={likeHandler} src={`${PF}/heart.png`} alt="" />
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