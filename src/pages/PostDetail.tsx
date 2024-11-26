import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants";
import { useApis } from "../hooks/useApis";

const PostDetail = () => {
  const param = useParams();
  const { data: post } = useApis(BASE_URL + "/posts/" + param.postId);

  if (!post) {
    return null;
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
