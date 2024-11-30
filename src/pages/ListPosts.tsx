import { useCallback, useEffect } from "react";
import type { Post as PostModel, PostState } from "./../types/post.type";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import { fetchPosts } from "../store/reducers/postsReducer";

const ListPosts = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { ids, objList, stage } = useSelector(
    (state: { posts: PostState }) => state.posts
  );

  const savePost = useCallback((post: PostModel) => {
    // const curPostIdx = listPosts.findIndex(
    //   (item: PostModel) => item.id === post.id
    // );
    // if (curPostIdx >= 0) {
    //   const newList: Array<PostModel> = [...listPosts];
    //   newList[curPostIdx] = post;
    //   setListPosts(newList);
    // }
  }, []);

  if (stage === "loading") {
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
      {ids.map((id: PostModel["id"]) => (
        <Post key={id} post={objList[id]} savePost={savePost} />
      ))}
    </div>
  );
};

export default ListPosts;
