import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { useState, useEffect } from "react";
import axios from "axios";

function Feed() {

    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get("http://localhost:5000/api/v1/posts/timeline/61b5f26629cf719d838f08e3");
            console.log(res);
        };
        fetchPosts();
    },[])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {/* {Posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))} */}
            </div>
        </div>
    )
};

export default Feed;
