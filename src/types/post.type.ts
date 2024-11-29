export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export type PostState = {
  list: Array<Post>;
  users: Array<User>;
  stage: "idle" | "loading" | "succeed" | "failed";
  error: boolean;
};
