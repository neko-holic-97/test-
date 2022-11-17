import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPost } from "../redux/features/postSlice";

const Post = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  const [visible, setVisible] = useState(5);

  const handleLoad = () => {
    setVisible((prevState) => prevState + 5);
  };

  return (
    <>
    {loading ? <h1>Loading...</h1> : (
        <>
        <button onClick={()=> navigate("/create")}>Create Post Here</button>
          {posts.slice(0, visible).map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))}
          <button onClick={handleLoad}>Load more</button>
        </>
    )}
    </>
  );
};

export default Post;
