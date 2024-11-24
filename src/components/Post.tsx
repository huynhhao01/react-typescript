import { memo } from "react";
import type { Post as PostModel } from "./../types/post.type";

interface Props {
  post: PostModel;
}

const Post = ({ post }: Props) => {
  return (
    <div>
      <b>{post.title}</b>
      <p>{post.body}</p>
    </div>
  );
};

export default memo(Post);
