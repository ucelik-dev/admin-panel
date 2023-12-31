'use client'

import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../../components/Modal';
import { useRouter } from 'next/navigation';
import { supabaseForClientComponentWithRoleKey } from '@/lib/supabase.client';

const DeleteButton = ({userID}:{userID:string}) => {
    const router = useRouter();

    const [modal, setModal] = useState(false);

    const handleDelete = async () => {
        const { data, error } = await supabaseForClientComponentWithRoleKey.auth.admin.deleteUser(userID);
        setModal(false);
        router.refresh();
    }


  return (
    <>
    
    <button className="font-medium text-red-500 dark:text-blue-500 hover:underline" onClick={() => setModal(true)}><FaTrashAlt size="20"/></button>
    
    { modal && <Modal handleDelete={handleDelete} setModal={setModal}/> }

    </>
    )
}

export default DeleteButton