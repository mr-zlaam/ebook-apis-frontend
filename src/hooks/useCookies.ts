"use server";
import { cookies } from "next/headers";

export async function BiscuitCookie(token: string) {
  cookies().set({
    name: "accessToken",
    value: token,
    httpOnly: true,
  });
}
export async function DeleteBiscuitCookie(tokenName: string) {
  cookies().delete(tokenName);
}
