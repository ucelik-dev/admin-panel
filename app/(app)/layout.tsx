import React from "react";
import NavBar from "./components/Navbar";

export default async function RootLayout({ children }: React.PropsWithChildren) {
  
  return (
    <html lang="en">
      <body>

      <NavBar />
        <main className='px-5 py-10 h-[500px] mt-20'>
          {children}
        </main>

      </body>
    </html>
  );
}
