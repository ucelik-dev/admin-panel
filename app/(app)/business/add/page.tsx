import React from 'react'
import AddBusinessPage from '../_component/AddBusinessPage'
import { createSupabaseForServerComponent } from '@/lib/supabase.server';
import { redirect } from 'next/navigation';

const AddBusiness = async () => {
  const supabase = createSupabaseForServerComponent();
  const { data: { session } } = await supabase.auth.getSession();
  if(!session?.user) redirect('/sign-in');
  const userSession = session?.user;

  return (
    <AddBusinessPage session={userSession}/>
  )
}

export default AddBusiness