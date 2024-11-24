import { useEffect, useState } from "react";
import type {Post as PostModel} from './../types/post.type'
import Post from "../components/Post";

const ListPosts = () => {
  const [listPosts, setListPosts] = useState([]);

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

  return (
    <div>
      <h2>List Posts</h2>
      {listPosts.map((item: PostModel, index: number) => (
        <Post key={index} post={item}/>
      ))}
    </div>
  );
};

export default ListPosts;
