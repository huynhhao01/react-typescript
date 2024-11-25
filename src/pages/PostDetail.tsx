import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Post as PostModel } from "./../types/post.type";

const PostDetail = () => {
  const param = useParams();
  const [post, setPost] = useState<PostModel | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${param.postId}`
      );
      if (response.status === 200) {
        const postData = await response.json();
        setPost(postData);
      }
    };
    fetchPosts();
  }, []);

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
