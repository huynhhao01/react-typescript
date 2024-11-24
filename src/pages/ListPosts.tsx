import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

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
      {listPosts.map((item: Post) => (
        <div>
          <b>{item.title}</b>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ListPosts;
