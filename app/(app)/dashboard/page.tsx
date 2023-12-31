import React from 'react'
import LineChart from './_components/LineChart';
import { createSupabaseForServerComponent, supabaseWithServiceRoleForServer } from '@/lib/supabase.server';
import PieChart from './_components/PieChart';
import { redirect } from 'next/navigation';

const DashboardPage = async () => {

  const supabase = createSupabaseForServerComponent();
  const { data: { session } } = await supabase.auth.getSession();
  if(!session?.user) redirect('/sign-in');

  // Pie Chart Data
  const { count:userAdmin } = await supabaseWithServiceRoleForServer
  .from('profiles')
  .select('*', { count: 'exact'})
  .eq('role','admin');

  const { count:userSuperAdmin } = await supabaseWithServiceRoleForServer
  .from('profiles')
  .select('*', { count: 'exact'})
  .eq('role','superadmin');




  // Line Chart Data
  const { data:businessList } = await supabaseWithServiceRoleForServer
    .from('business')
    .select('*');

  const { count, data, error } = await supabaseWithServiceRoleForServer
  .from('business')
  .select('*', { count: 'exact'})

  let counts:any = {};
  data?.forEach(el => counts[el.created_at] = 1  + (counts[el.created_at] || 0))
  //console.log(counts)

  
  return (
    <div className='flex flex-col md:flex-row gap-10 w-auto'>
      <div className='flex flex-1 justify-end'><LineChart counts={counts}/></div>
      <div className='flex flex-1 justify-start'><PieChart userAdmin={userAdmin!} userSuperAdmin={userSuperAdmin!}/></div>
    </div>
  )
}

export default DashboardPage