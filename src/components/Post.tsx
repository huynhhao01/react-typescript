import { memo, useState } from "react";
import type { Post as PostModel } from "./../types/post.type";

interface Props {
  post: PostModel;
}

const Post = ({ post }: Props) => {
  const [editingTitle, setEditingTitle] = useState(false);
  const [titleText, setTitleText] = useState(post.title);

  const showInput = (value: boolean) => {
    setEditingTitle(value);
  };

  const handleChange = (e: any) => {
    setTitleText(e.target.value);
  };

  return (
    <div>
      {editingTitle ? (
        <div>
          <input type="text" value={titleText} onChange={handleChange} />
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
