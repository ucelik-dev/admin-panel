import { createSupabaseForServerComponent, supabaseWithServiceRoleForServer } from "@/lib/supabase.server"
import Link from "next/link";
import Image from "next/image"
import DeleteBusiness from "../admin/_component/DeleteBusiness";
import { redirect } from "next/navigation";

const BusinessPage = async() => {
  
  const supabase = createSupabaseForServerComponent();
  const { data: { session } } = await supabase.auth.getSession();
  if(!session?.user) redirect('/sign-in');

  const { data:businessList } = await supabaseWithServiceRoleForServer
  .from('business')
  .select('*');

  return (
    <div className="pb-10">

      <Link href="/business/add">
          <button className='cursor-pointer text-sm bg-sky-500 p-2 rounded-lg text-gray-100 mb-3 hover:bg-sky-600'>Add Business</button>
      </Link>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3">Image</th>
                  <th scope="col" className="px-6 py-3">Title</th>
                  <th scope="col" className="px-6 py-3">Action</th>
              </tr>
          </thead>
          <tbody>
          {businessList?.map((business:any) => (
              <tr key={business.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4 w-20">
                    <Image src={`https://beyrsfyeozhbwdxwvbqh.supabase.co/storage/v1/object/public/business/${business.id}/${business.image}`} width={30} height={30} alt="" className="w-auto h-auto"/>
                  </td>
                  <td className="px-6 py-4">
                    {business.title}
                  </td>
                  <td className="px-6 py-4">
                    <DeleteBusiness businessID={business.id} businessImage={business.image}/>
                  </td>
              </tr>
          ))}
          </tbody>
      </table>
  </div>
  )
}

export default BusinessPage