import { useCallback, useEffect, useState } from "react";
import type { Post as PostModel } from "./../types/post.type";
import Post from "../components/Post";
import { useApis } from "../hooks/useApis";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { fetchPosts } from "../store/reducers/postsReducer";

const ListPosts = () => {
  // const state = useSelector(state => state);
  // console.log('State list post: ', state);

  const {
    data: listPosts = [],
    setData: setListPosts,
    loading,
  } = useApis(BASE_URL + "/posts");

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

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

  if (loading) {
    return (
      <>
        <h2>List Posts</h2>
        <p>Loading...</p>
      </>
    );
  }
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
