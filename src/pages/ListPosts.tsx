import { useCallback, useEffect, useState } from "react";
import type { Post as PostModel } from "./../types/post.type";
import Post from "../components/Post";

const ListPosts = () => {
  const [listPosts, setListPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.status === 200) {
        const posts = await response.json();
        setListPosts(posts);
      }
    };
    fetchPosts();
  }, []);

  const savePost = useCallback(
    (post: PostModel) => {
      const curPostIdx = listPosts.findIndex(
        (item: PostModel) => item.id === post.id
      );
      if (curPostIdx >= 0) {
        const newList: Array<PostModel> = [...listPosts];
        newList[curPostIdx] = post;
        setListPosts(newList);
      }
    },
    [listPosts, setListPosts]
  );

  return (
    <div>
      <h2>List Posts</h2>
      {listPosts.map((item: PostModel, index: number) => (
        <Post key={index} post={item} savePost={savePost} />
      ))}
    </div>
  );
};

export default ListPosts;
