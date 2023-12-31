'use client'

import Link from 'next/link'

const HamburgerMenu = ({setIsMenuOpen, userSession}:{setIsMenuOpen: (state:boolean) => void, userSession:any}) => {


  return (
    <section className="flex md:hidden absolute z-50 bg-sky-500 w-full h-[calc(100%-4.4rem)] mt-[-10px] p-0">

          <div className="flex flex-col gap-6 px-5 py-5 w-screen text-white items-center text-lg">
              {userSession && 
                <div className="flex flex-col items-center text-sm gap-2">
                    <span className="font-semibold text-gray-700">{userSession.email}</span>
                    <span className="font-semibold text-gray-700">{userSession.user_metadata.role}</span>
                </div>
              }
              <hr className='border-1 border-gray-100 w-full'/>
                <Link href='/dashboard' onClick={() => setIsMenuOpen(false)}>DASHBOARD</Link>
                <Link href='/admin' onClick={() => setIsMenuOpen(false)}>ADMIN MANAGEMENT</Link>
                <Link href='/business' onClick={() => setIsMenuOpen(false)}>BUSINESS MANAGEMENT</Link>
          </div>

      </section>
  )
}

export default HamburgerMenu