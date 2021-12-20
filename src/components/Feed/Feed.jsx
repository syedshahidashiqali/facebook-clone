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
        const url = "http://localhost:5000/api/v1";
        const fetchPosts = async() => {
            const res = username 
            ? await axios.get(`${url}/posts/profile/${username}`)
            : await axios.get(`${url}/posts/timeline/${user._id}`);
            setPosts(res.data)
        };
        fetchPosts();
    },[username, user._id, posts])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
};

export default Feed;
