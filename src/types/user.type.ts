export interface User {
  id: number;
  name: string;
}

export type UserState = {
  ids: Array<User["id"]>;
  objList: { [key: User["id"]]: User };
  stage: "idle" | "loading" | "succeed" | "failed";
  error: boolean;
};
