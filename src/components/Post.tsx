import { memo, useState } from "react";
import type { Post as PostModel } from "./../types/post.type";

interface Props {
  post: PostModel;
}

const Post = ({ post }: Props) => {
  const [editingTitle, setEditingTitle] = useState(false);

  const showInput = () => {
    setEditingTitle(true);
  };

  return (
    <div>
      <div>
        {editingTitle ? (
          <input type="text" value={post.title} />
        ) : (
          <b onClick={showInput}>{post.title}</b>
        )}
      </div>
      <p>{post.body}</p>
    </div>
  );
};

export default memo(Post);
