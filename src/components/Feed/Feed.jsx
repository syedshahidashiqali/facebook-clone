import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Feed({ username }) {

    const [ posts, setPosts ] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const url = "https://mern-social-media-api.herokuapp.com/api/v1";
        const fetchPosts = async() => {
            const res = username 
            ? await axios.get(`${url}/posts/profile/${username}`)
            : await axios.get(`${url}/posts/timeline/${user._id}`);
            setPosts(res.data.sort((post1, post2) => {
                return new Date(post2.createdAt) - new Date(post1.createdAt);
            }));
        };
        fetchPosts();
    },[username, user._id]);
    return (
        <div className="feed">
            <div className="feedWrapper">
            {(!username || username === user.username) && <Share />}
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
};

export default Feed;
