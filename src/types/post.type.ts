export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type PostState = {
  list: Array<Post>;
  stage: "idle" | "loading" | "succeed" | "failed";
  error: boolean;
};
