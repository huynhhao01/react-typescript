import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import type { Post as PostModel } from "./../types/post.type";

export const usePostDetail = () => {
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
  return post;
};

export const useListPost = () => {
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
  return {listPosts, setListPosts}
}