"use client";

import React from 'react';
import { Dialog, DialogContent } from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Checkbox } from "@/app/components/ui/checkbox";
import { X } from 'lucide-react';
import Logo from './Logo';

interface AuthModalsProps {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  onLoginClose: () => void;
  onRegisterClose: () => void;
  onSwitchToRegister: () => void;
  onSwitchToLogin: () => void;
}

export default function AuthModals({
  isLoginOpen,
  isRegisterOpen,
  onLoginClose,
  onRegisterClose,
  onSwitchToRegister,
  onSwitchToLogin,
}: AuthModalsProps) {
  return (
    <>
      <Dialog open={isLoginOpen} onOpenChange={onLoginClose}>
        <DialogContent className="sm:max-w-md p-0 gap-0">
          <button 
            onClick={onLoginClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <Logo />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Login</h2>
            </div>

            <form className="space-y-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3"
              />
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3"
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox id="remember" className="border-2" />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <button type="button" className="text-sm text-orange-500 hover:text-orange-600">
                  Forgot Password?
                </button>
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                Login
              </Button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or Sign in with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                  Facebook
                </Button>
              </div>

              <p className="text-center text-sm text-gray-600 mt-6">
                Don't have an account?{" "}
                <button 
                  type="button"
                  onClick={onSwitchToRegister}
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Sign up
                </button>
              </p>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isRegisterOpen} onOpenChange={onRegisterClose}>
        <DialogContent className="sm:max-w-md p-0 gap-0">
          <button 
            onClick={onRegisterClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <Logo />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Register</h2>
            </div>

            <form className="space-y-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <Input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3"
              />
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3"
              />
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3"
              />

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                Register
              </Button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or Sign up with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                  Facebook
                </Button>
              </div>

              <p className="text-center text-sm text-gray-600 mt-6">
                Already have an account?{" "}
                <button 
                  type="button"
                  onClick={onSwitchToLogin}
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Log in
                </button>
              </p>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}