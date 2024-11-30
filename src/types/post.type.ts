export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type PostState = {
  ids: Array<Post["id"]>;
  objList: { [key: Post["id"]]: Post };
  stage: "idle" | "loading" | "succeed" | "failed";
  error: boolean;
};
