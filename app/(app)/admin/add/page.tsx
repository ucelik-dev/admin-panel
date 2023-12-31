import React from 'react'

import { createSupabaseForServerComponent } from '@/lib/supabase.server';
import { redirect } from 'next/navigation';
import AddUserPage from '../_component/AddUserPage';

const AddBusiness = async () => {
  const supabase = createSupabaseForServerComponent();
  const { data: { session } } = await supabase.auth.getSession();
  if(!session?.user) redirect('/sign-in');
  const userSession = session?.user;

  return (
    <AddUserPage session={userSession}/>
  )
}

export default AddBusiness