import { contacts, mails } from "@/components/mail/data"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { threadId } from "worker_threads"

export const urls = {
  register: "http://localhost:3333/api/auth/register",
  login: "http://localhost:3333/api/auth/login",
  logout: "http://localhost:3333/api/auth/logout",
  identifierMail: "http://localhost:3333/api/gmail/6iphermail/mail/identifier",
  generateAuthCode: "http://localhost:3333/api/6iphermail/generateAuthCode",
  github: "http://localhost:3333/api/auth/github",
  google: "http://localhost:3333/api/auth/google",
  discord: "http://localhost:3333/api/auth/discord",
  me: "http://localhost:3333/api/6iphermail/me",
  mails: "http://localhost:3333/api/gmail/6iphermail/mails",
  mail: "http://localhost:3333/api/gmail/6iphermail/mail/",
  threads: "http://localhost:3333/api/gmail/6iphermail/threads",
  whois: "http://localhost:3333/api/gmail/6iphermail/whois", 
  contacts: "http://localhost:3333/api/6iphermail/contacts",
  updateAccount: "http://localhost:3333/api/6iphermail/updateAccount",
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getData(url: string) {
  return fetch(url, {
    method: "GET", headers: {
      "Content-Type": "application/json",
    }, credentials: "include",
  },
  ).then((res) => res.json())
}

export async function postData(url: string, data: any, options?: RequestInit) {
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


export async function postDataV2(url: string, data: any, options?: RequestInit) {
  return fetch(url, {
    ...options,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",

    body: JSON.stringify(data),
  })
}