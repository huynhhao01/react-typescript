import { memo, useState } from "react";
import type { Post as PostModel } from "./../types/post.type";

interface Props {
  post: PostModel;
  savePost: (post: PostModel) => void;
}

const Post = ({ post, savePost }: Props) => {
  const [editingTitle, setEditingTitle] = useState(false);
  const [editingBody, setEditingBody] = useState(false);
  const [titleText, setTitleText] = useState(post.title);
  const [bodyText, setBodyText] = useState(post.body);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleText(e.target.value);
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBodyText(e.target.value);
  };

  const handleSavePost = () => {
    savePost({ ...post, title: titleText, body: bodyText });
    setEditingTitle(false);
    setEditingBody(false);
  };

  return (
    <div>
      <div>
        {editingTitle ? (
          <>
            <input type="text" value={titleText} onChange={handleTitleChange} />
            <button onClick={handleSavePost}>Save</button>
          </>
        ) : (
          <b onClick={() => setEditingTitle(true)}>
            <i>{post.title}</i>
          </b>
        )}
      </div>
      <div>
        {editingBody ? (
          <>
            <input type="text" value={bodyText} onChange={handleBodyChange} />
            <button onClick={handleSavePost}>Save</button>
          </>
        ) : (
          <p onClick={() => setEditingBody(true)}>{post.body}</p>
        )}
      </div>
    </div>
  );
};

export default memo(Post);
