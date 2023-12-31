import { createSupabaseForServerComponent, supabaseWithServiceRoleForServer } from '@/lib/supabase.server';
import Link from 'next/link';
import DeleteUser from './_component/DeleteUser';
import { redirect } from 'next/navigation';

const AdminPage = async () => {

    const supabase = createSupabaseForServerComponent();
    const { data: { session } } = await supabase.auth.getSession();
    if(!session?.user) redirect('/sign-in');
    const sessionUser = session?.user;



    if(sessionUser?.user_metadata.role === 'admin') {
        var { data } = await supabaseWithServiceRoleForServer
        .from('profiles')
        .select('*')
        .eq('role','admin');
    } else {
        var { data } = await supabaseWithServiceRoleForServer
        .from('profiles')
        .select('*')
    }
    
     

  return (
    <div>
        {sessionUser?.user_metadata.role === 'superadmin' &&
            <Link href="/admin/add">
                <button className='cursor-pointer text-sm bg-sky-500 p-2 rounded-lg text-gray-100 mb-3 hover:bg-sky-600'>Add User</button>
            </Link>
        }
        
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Email</th>
                    <th scope="col" className="px-6 py-3 hidden sm:flex">Role</th>
                    <th scope="col" className="px-6 py-3">Last Sign in</th>
                    {sessionUser?.user_metadata.role === 'superadmin' &&
                        <th scope="col" className="px-6 py-3">Action</th>
                    }
                </tr>
            </thead>
            <tbody>
            {data?.map((user) => (
                <tr key={user.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {user.email}
                        <div className='text-gray-400 sm:hidden'>{user.role}</div>
                    </th>
                    <td className="px-6 py-4 hidden sm:flex">
                        {user.role}
                    </td>
                    <td className="px-6 py-4">
                    {user.last_sign_in?.slice(0,10)} {user.last_sign_in?.slice(11,19)}
                    </td>
                    {sessionUser?.user_metadata.role === 'superadmin' &&
                    <td className="px-6 py-4">
                        <DeleteUser userID={user.id}/>
                    </td>
                    }
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default AdminPage