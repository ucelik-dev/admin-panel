"use client";

import { useState } from "react";
import { supabaseForClientComponent } from "@/lib/supabase.client";
import { redirect, useRouter } from "next/navigation";
import getCurrentDate from "@/utils/getCurrentDate";


export default function AddBusinessPage({session}:{session:any}) {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState("");

  if(!session) redirect('/sign-in');
  let uuid = crypto.randomUUID();
  const router = useRouter();

  const handleImageSelected = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const filename = `${uuid}`;
    const currentDate = getCurrentDate();

    const { data, error} = await supabaseForClientComponent.from('business').insert([{ created_at:currentDate ,image:filename, title}]).select();
    if(!error){
      router.push('/business');
      router.refresh();

      if(data[0].id) {
        const { data:db } = await supabaseForClientComponent.storage
          .from("business")
          .upload(data[0].id + '/' + filename, image);
      }

    }

}



  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-10 sm:mt-20">
      <div className="w-full bg-white dark:bg-gray-400 rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-700">
              Add Business
            </h1>

              <div>
                <label>Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => handleImageSelected(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              
              <div>
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              
              <button
                type='submit'
                className="w-full text-md text-white rounded-lg bg-sky-500 font-medium !px-2 !py-2.5 text-center dark:bg-gray-200 dark:text-black"
              >
                Submit
              </button>
              
          </div>
        </form>
      </div>
    </div>
  );
}
