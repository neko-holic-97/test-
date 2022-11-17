import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../redux/features/postSlice";
import "../style/PostForm.css";

const PostForm = () => {
const [content, setContent] = useState({
    title: '',
    body: ''
})

const navigate = useNavigate()

const [showPost, setShowPost] = useState(false)

const dispatch = useDispatch();

const { posts, loading } = useSelector((state) => state.post);

const handleSubmit = (e)=>{
e.preventDefault()

dispatch(createPost({content}))

setContent({title: '', body: ''})
setShowPost(true)

}

const showPostFns = ()=>{
    return (
        <>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
       <h2>{posts[0].title}</h2>
              <p>{posts[0].body}</p>
            </div>
        )} 
        </>
    )
}


  return (<>
    <form action="" onSubmit={handleSubmit}>
      <div className="form-data">
        <label htmlFor="">Title Post:</label>
        <input
        value={content.title}
        onChange={e=> setContent({...content, title: e.target.value})}
        type="text" placeholder="Title post in here...." />
      </div>
      <div className="form-data">
        <label htmlFor="">Content Post:</label>
        <input
        value={content.body}
        onChange={e=> setContent({...content, body: e.target.value})}
        type="text" placeholder="Content post in here...." />
      </div>
      <button>Create</button>
      <span><button style={{padding: "8px 20px", fontSize: "10px"}} onClick={()=> navigate("/")}>Back to Home</button> </span>
    </form>

    <br />

    {showPost && <>{showPostFns()}</>}
    </>
  );
};

export default PostForm;
