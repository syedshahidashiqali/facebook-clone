import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef, useState } from "react";
import axios from "axios";

function Share() {
    const url = "http://localhost:5000/api/v1";
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const descriptionRef = useRef();
    const [ file, setFile ] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            description: descriptionRef.current.value,
        };

        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.image = fileName;
            console.log(newPost);

            try{
                await axios.post(`${url}/upload`, data);
            } catch(err){
                console.log(err);
            }
        }

        try{
            await axios.post(`${url}/posts`, newPost);
            descriptionRef.current.value = "";
        } catch(err){
            console.log(err);
        }
    };

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={`${PF}${user.profilePicture}`} alt="" />
                    <input 
                        type="text" 
                        className="shareInput" 
                        placeholder={`What's in your mind ${user.username.toUpperCase()}?`}
                        ref={descriptionRef}
                    />
                </div>
                <hr className="shareHr" />
                <form onSubmit={submitHandler} className="shareBottom">
                    <div className="shareOptions">
                        <label className="shareOption" htmlFor="file">
                            <PermMedia htmlColor="tomato" className="shareOptionIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input 
                                onChange={(e) =>  setFile(e.target.files[0])}
                                style={{display:"none"}}
                                accept=".png,.jpeg,.jpg"
                                type="file" 
                                id="file" 
                            />
                        </label>
                        <div className="shareOption">
                            <Label  htmlColor="blue" className="shareOptionIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareOptionIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareOptionIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button type="submit" className="shareButton">Share</button>
                </form>
            </div>
        </div>
    )
};

export default Share;
