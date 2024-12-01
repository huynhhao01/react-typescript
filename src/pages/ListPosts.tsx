import { useCallback, useEffect } from "react";
import type { Post as PostModel, PostState } from "./../types/post.type";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import { fetchPosts } from "../store/reducers/postsReducer";
import { UserState } from "../types/user.type";
import { fetchUsers } from "../store/reducers/usersReducer";

const ListPosts = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  const { postIds, objPosts, objUsers, stage } = useSelector(
    (state: { posts: PostState; users: UserState }) => ({
      postIds: state.posts.ids,
      objPosts: state.posts.objList,
      objUsers: state.users.objList,
      stage: state.posts.stage,
    })
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
      {postIds.map((id: PostModel["id"]) => {
        const post = objPosts[id];
        const user = objUsers[post.userId];
        // console.log(post);
        console.log(objUsers);
        return <Post key={id} post={post} user={user} savePost={savePost} />;
      })}
    </div>
  );
};

export default ListPosts;
