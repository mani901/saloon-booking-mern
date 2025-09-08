// components/AuthDialog.jsx
import { Button } from "@/components/ui/button";
import { Chromium } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function AuthModal() {
  // This state is ONLY for tab switching — does NOT control modal visibility
  const [activeTab, setActiveTab] = useState("login");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300">
          {activeTab === "login" ? "Login" : "Sign Up"}
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-gray-900 border border-gray-700 text-gray-300 sm:max-w-[450px] rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-white text-center">
            {activeTab === "login" ? "Welcome back" : "Create your account"}
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-center">
            {activeTab === "login"
              ? "Log in to book your next appointment."
              : "Join us in just a few seconds."}
          </DialogDescription>
        </DialogHeader>

        {/* Tabs for Login / Signup */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full mt-6"
        >
          <TabsList className="grid w-full grid-cols-2 bg-gray-800 p-1 rounded-full mb-6">
            <TabsTrigger
              value="login"
              className="text-white rounded-full data-[state=active]:bg-orange-600 data-[state=active]: data-[state=active]:shadow-sm"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="text-white rounded-full data-[state=active]:bg-orange-600 data-[state=active]: data-[state=active]:shadow-sm"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login" className="mt-0">
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="login-email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 rounded-full"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="login-password" className="text-gray-300">
                  Password
                </Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 rounded-full"
                />
              </div>

              <div className="text-right">
                <button
                  type="button"
                  className="text-orange-400 underline text-sm hover:text-orange-300 bg-transparent border-none cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              <Button
                type="submit"
                className="text-white w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 font-semibold py-2.5 rounded-full mt-2"
              >
                Log In
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-3 border border-gray-600 bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white py-2.5 rounded-full transition-colors"
              >
                <Chromium className="h-5 w-5" />
                Login with Google
              </Button>
            </form>
          </TabsContent>

          {/* Signup Tab */}
          <TabsContent value="signup" className="mt-0">
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="signup-name" className="text-gray-300">
                  Full Name
                </Label>
                <Input
                  id="signup-name"
                  placeholder="John Doe"
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 rounded-full"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="signup-email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 rounded-full"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="signup-password" className="text-gray-300">
                  Password
                </Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 rounded-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-black font-semibold py-2.5 rounded-full mt-2"
              >
                Sign Up
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
