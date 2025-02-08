// "use client"
// import { useAppSelector } from '@/redux/hooks'
// import { useSession } from 'next-auth/react'
// import React from 'react'
// import Login from '../components/adminpanel/Login';
// import Loader from '../components/adminpanel/Loader';
// import Sidebar from '../components/adminpanel/Sidebar';
// const Layout = ({children} : {children: React.ReactNode}) => {
//     const isLoading = useAppSelector((store) => store.loadingReducer);
//     const {data: session} = useSession();
//     if (!session?.user){
//         return <Login />;
//     }
//   return (
//     <div className='flex'>
//         <Sidebar />
//         <div className='w-full h-full'>
//             {/* <Navbar /> */}
//             <div className='bg-gray-200 p-4 h-[calc(100vh-64px)]'>{children}</div>
//         </div>
//         {isLoading && <Loader />}
//     </div>
//   )
// }
// export default Layout

"use client";
import { useAppSelector } from '@/redux/hooks';
import { useSession } from 'next-auth/react';
import React from 'react';
import Login from '../components/adminpanel/Login';
import Loader from '../components/adminpanel/Loader';
import Sidebar from '../components/adminpanel/Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isLoading = useAppSelector((store) => store.loadingReducer);
  const { data: session } = useSession();

  if (!session?.user) {
    return <Login />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">{children}</div>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default Layout;
