import { usePostDetail } from "../hooks/useApis";

const PostDetail = () => {
  const post = usePostDetail();

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
