"use client";
import { PasswordInput } from "@/components/authentification/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getData, postData, urls } from "@/lib/utils";

const accountFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  oldPassword: z.string().min(8, {
    message: "Password must be at least 6 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 6 characters.",
  }),
  "confirm-password": z.string().min(8, {
    message: "Password must be at least 6 characters.",
  }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  username: "",
  email: "",
  oldPassword: "",
  password: "",
  "confirm-password": "",
};

export function AccountForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });


  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(urls.me);
        form.reset({
          username: data.username,
          email: data.email,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);


  function onSubmit(data: AccountFormValues | any) {
    if (data.password !== data["confirm-password"]) {
      alert("Passwords do not match");
      return;
    }
    postData(urls.updateAccount, data).then((data) => {
        form.reset({}); // Reset the form after submission
    });
    
  }

  return (
    <>
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings.
        </p>
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" disabled placeholder="email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput placeholder="oldPassword" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput placeholder="password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm-password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput placeholder="confirm-password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Update account</Button>
        </form>
      </Form>
    </>
  );
}
