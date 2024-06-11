import { type ClassValue, clsx } from "clsx"
import exp from "constants"
import { register } from "module"
import { twMerge } from "tailwind-merge"

export const urls = {
  register: "http://localhost:3333/api/auth/register",
  login: "http://localhost:3333/api/auth/login",
  logout: "http://localhost:3333/api/auth/logout",

}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getData(url: string) {
  return fetch(url, {
    method: "GET", headers: {
      "Content-Type": "application/json",
    }, credentials: "include"
  },
  ).then((res) => res.json())
}

export function postData(url: string, data: any, options?: RequestInit) {
  return fetch(url, {
    ...options,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",

    body: JSON.stringify(data),
  }).then((res) => res.json())
}