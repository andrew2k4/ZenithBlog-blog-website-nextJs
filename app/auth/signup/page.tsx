"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { LockKeyhole, Mail, User } from "lucide-react";
import Image from "next/image";
import image1 from "../../../public/google.png";
import image2 from "../../../public/github-logo.png";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { signIn } from "next-auth/react";

const SignupSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must contain at least 3 characters")
      .max(50, "Username must contain at most 50 characters"),
    email: z.string().email("This is not an email"),
    password: z
      .string()
      .min(8, "Password must contain at least 8 characters")
      .max(16, "Password must contain at most 16 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

type SignupValues = z.infer<typeof SignupSchema>;

export default function Signup() {
  const form = useZodForm({
    schema: SignupSchema,
  });
  return (
    <Card className="w-[370px]">
      <CardHeader className="text-center flex items-center justify-between ">
        <div className="w-14 h-14 rounded-full border-2 p-1 items-center flex justify-center bg-slate-50">
          <PersonIcon
            sx={{ fontSize: 35 }}
            className="bg-white rounded-full border-2 p-1"
          />
        </div>
        <CardTitle className=" text-xl">Create a new account</CardTitle>
        <CardDescription className="pb-6 ">
          Enter your details to register
        </CardDescription>
        <div className="h-[1px]  bg-slate-200   w-full " />
      </CardHeader>

      <CardContent>
        <Form form={form} onSubmit={() => ""}>
          <div className="grid w-full items-center gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="Username">Username</FormLabel>
                  <FormControl>
                    <div className=" flex items-center  ">
                      <User className="absolute ml-2 text-muted-foreground size-5" />
                      <Input
                        type="text"
                        className="pl-9"
                        id="username"
                        placeholder="Username"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="Email">E-mail</FormLabel>
                  <FormControl>
                    <div className=" flex items-center -mt-2">
                      <Mail className="absolute ml-2 text-muted-foreground size-5" />
                      <Input
                        type="email"
                        className="pl-9"
                        id="email"
                        placeholder="E-mail"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="Password">Password</FormLabel>
                  <FormControl>
                    <div className=" flex items-center  ">
                      <LockKeyhole className="absolute ml-2 text-muted-foreground size-5" />
                      <Input
                        type="password"
                        className="pl-9"
                        id="password"
                        placeholder="Password"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="Password">
                    Password Confirmation
                  </FormLabel>
                  <FormControl>
                    <div className=" flex items-center  ">
                      <LockKeyhole className="absolute ml-2 text-muted-foreground size-5" />
                      <Input
                        type="password"
                        className="pl-9"
                        id="passwordConfirm"
                        placeholder="Password"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full bg-purple-600 hover:bg-purple-900 mt-2">
              Sign up
            </Button>
          </div>
        </Form>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground text-center ">
          Already a member
          <Link className="text-blue-600 font-semibold ml-1" href="/auth/login">
            Log In
          </Link>
        </p>
        <div className="flex w-full flex-row mt-4 items-center align-middle justify-center">
          <div className="h-[1px]  bg-slate-200   w-1/2" />
          <p className="text-center text-muted-foreground mx-1 my-0 p-0 ">Or</p>
          <div className="h-[1px]  bg-slate-200   w-1/2" />
        </div>
        <div className="flex-col gap-2 mt-3 flex">
          <Button
            variant="outline"
            className="w-full text-black "
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <Image src={image1} alt="image" width={30} height={30} />
            Sign up with google
          </Button>
          <Button
            variant="outline"
            className="w-full text-black "
            onClick={() => signIn("github", { callbackUrl: "/" })}
          >
            <Image
              src={image2}
              alt="image"
              width={21}
              height={21}
              className="ml-2 mr-[4px]"
            />
            Sign up with google
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
