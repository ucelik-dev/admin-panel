
import { createSupabaseForServerComponent } from "@/lib/supabase.server";
import NavBarItems from "./NavbarItems";
import { redirect } from "next/navigation";

const NavBar = async () => {

  const supabase = createSupabaseForServerComponent();
  const { data: { session } } = await supabase.auth.getSession();
  
  const userSession = session?.user;

  return (
    <NavBarItems userSession={userSession}/>
  );
};

export default NavBar;
