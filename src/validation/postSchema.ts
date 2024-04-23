import { object, string } from "zod";

export const postSchema = object({
  username: string()
    .min(3, { message: "username must contain at least 3 characters." })
    .max(10, { message: "Username must not be more than 10 characters." })
    .regex(new RegExp(/^[a-z0-9_]+$/), {
      message: "Username must not container special character.",
    }),
});
