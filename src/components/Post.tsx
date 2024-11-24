import { memo, useState } from "react";
import type { Post as PostModel } from "./../types/post.type";

interface Props {
  post: PostModel;
}

const Post = ({ post }: Props) => {
  const [editingTitle, setEditingTitle] = useState(false);

  const showInput = (value: boolean) => {
    setEditingTitle(value);
  };

  return (
    <div>
      {editingTitle ? (
        <div>
          <input type="text" value={post.title} />
          <button onClick={() => showInput(false)}>Save</button>
        </div>
      ) : (
        <b onClick={() => showInput(true)}>{post.title}</b>
      )}
      <p>{post.body}</p>
    </div>
  );
};

export default memo(Post);
