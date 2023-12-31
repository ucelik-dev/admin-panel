"use client";

import { useState } from "react";
import { supabaseForClientComponent } from "@/lib/supabase.client";
import { redirect, useRouter } from "next/navigation";

export default function AddUserPage({session}:{session:any}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  if(!session) redirect('/sign-in');

  const handleSignUp = async () => {

    const data = await supabaseForClientComponent.auth.signUp({
      email,
      password,
      options: {
        data: {
          role,
        },
      },
    })

    if(!data.error){
      router.push('/sign-in');
      router.refresh();
    }

}

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-10 sm:mt-20">
      <div className="w-full bg-white dark:bg-gray-400 rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-700">
            Add User
          </h1>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
            </div>
            
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
            </div>

            <div>
              <label>Role</label>
              <select id="role" name="role" onChange={(e) => setRole(e.target.value)}
              className="bg-gray-50 block w-full rounded-md p-2 ring-1 ring-gray-300 !outline-none">
                  <option value=""></option>
                  <option value="admin">Admin</option>
                  <option value="superadmin">Super Admin</option>
              </select>
            </div>

            
            
            {error && <div><p className='text-red-500'>{error}</p></div>}
            
            <button
              onClick={handleSignUp}
              className="w-full text-md text-white rounded-lg bg-sky-500 font-medium !px-2 !py-2.5 text-center dark:bg-gray-200 dark:text-black"
            >
              Submit
            </button>
            
        </div>
      </div>
    </div>
  );
}
