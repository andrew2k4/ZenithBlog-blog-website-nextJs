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
import { Label } from "@/components/ui/label";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { LockKeyhole, Mail, User } from "lucide-react";
import Image, { ImageLoader } from "next/image";
import image1 from "../../../public/google.png";
import image2 from "../../../public/github-logo.png";

export default function signup() {
  return (
    <div className="flex flex-1 items-center justify-center w-full align-middle pt-10 bg-slate-50">
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
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <div className=" flex items-center  ">
                  <User className="absolute ml-2 text-muted-foreground size-5" />
                  <Input
                    type="text"
                    className="pl-9"
                    id="name"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">E-mail</Label>
                <div className=" flex items-center  ">
                  <Mail className="absolute ml-2 text-muted-foreground size-5" />
                  <Input
                    type="email"
                    className="pl-9"
                    id="email"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <div>
                  <div className=" flex items-center  ">
                    <LockKeyhole className="absolute ml-2 text-muted-foreground size-5" />
                    <Input
                      type="password"
                      className="pl-9"
                      id="name"
                      placeholder="Password"
                    />
                  </div>
                  <p
                    className=" text-muted-foreground font-medium"
                    style={{ fontSize: "11px" }}
                  >
                    Must contain 1 uppercase letter, 1number , min. 8 character
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Confirm Password</Label>
                <div className=" flex items-center  ">
                  <LockKeyhole className="absolute ml-2 text-muted-foreground size-5" />
                  <Input
                    type="password"
                    className="pl-9"
                    id="name"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-purple-600 hover:bg-purple-900">
            Sign Up
          </Button>
          <p className="text-sm text-muted-foreground text-center mt-3">
            Already a member
            <Link
              className="text-blue-600 font-semibold ml-1"
              href="/auth/login"
            >
              Sign In
            </Link>
          </p>
          <div className="flex w-full flex-row mt-4 items-center align-middle justify-center">
            <div className="h-[1px]  bg-slate-200   w-1/2" />
            <p className="text-center text-muted-foreground mx-1 my-0 p-0 ">
              Or
            </p>
            <div className="h-[1px]  bg-slate-200   w-1/2" />
          </div>
          <div className="flex-col gap-2 mt-3 flex">
            <Button variant="outline" className="w-full text-black ">
              <Image src={image1} alt="image" width={30} height={30} />
              Sign up with google
            </Button>
            <Button variant="outline" className="w-full text-black ">
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
    </div>
  );
}
