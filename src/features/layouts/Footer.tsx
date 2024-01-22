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
import Layout from "@/app/layout/layout";

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
            Enter your detail to register
          </CardDescription>
          <div className="h-[1px]  bg-slate-200   w-full " />
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input id="name" placeholder="Username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">E-mail</Label>
                <Input id="name" placeholder="E-mail" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <div>
                  <Input id="name" placeholder="Password" />
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
                <Input id="name" placeholder="Confirm Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-purple-600 hover:bg-purple-900">
            Deploy
          </Button>
          <div className="flex  w-full flex-row mt-4 items-center align-middle justify-center">
            <div className="h-[1px]  bg-slate-200   w-1/2" />
            <p className="text-center text-muted-foreground mx-1 my-0 p-0 ">
              Or
            </p>
            <div className="h-[1px]  bg-slate-200   w-1/2" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
