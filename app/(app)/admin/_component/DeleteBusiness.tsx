'use client'

import { FaTrashAlt } from 'react-icons/fa'
import { useRouter } from 'next/navigation';
import { supabaseForClientComponent } from '@/lib/supabase.client';

const DeleteButton = ({businessID, businessImage}:{businessID:string, businessImage:string}) => {
    const router = useRouter();
    const handleDelete = async () => {
        const { data: businessData } = await supabaseForClientComponent.from('business').delete().eq('id', businessID);
        const { data: imageData } = await supabaseForClientComponent.storage.from('business').remove([`${businessID}/${businessImage}`]);
        router.refresh();
    }


  return (
      <button className="font-medium text-red-500 dark:text-blue-500 hover:underline" onClick={handleDelete}><FaTrashAlt size="20"/></button>
  )
}

export default DeleteButton