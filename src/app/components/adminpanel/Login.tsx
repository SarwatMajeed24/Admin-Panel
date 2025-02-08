// "use client"
// import { FcGoogle } from "react-icons/fc";

// import React from 'react'
// import { signIn } from "next-auth/react";

//  const Login = () => {
//   return (
//     <div className="bg-black min-h-screen grid place-items-center">
//         <button className="bg-white px-8 py-4 flex gap-2 items-center" onClick={() => signIn("google")}>
//             <FcGoogle size={30}/>Sign In With Google
//             </button>
//     </div>
//   )
// }
// export default Login


"use client"
import { FcGoogle } from "react-icons/fc";
import React from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'; // Import useRouter

const Login = () => {
  const router = useRouter(); // Initialize router

  const handleSignIn = async () => {
    const result = await signIn("google", { callbackUrl: "/admin/dashboard" }); // Add callbackUrl for automatic redirect
    console.log(result); // Log result to check if it's successful
    if (result?.ok) {
      // Redirect after successful login
      router.push("/admin/dashboard");
    } else {
      // Handle errors (optional)
      console.log('Error signing in', result);
    }
  }

  return (
    <div className="bg-black min-h-screen grid place-items-center">
      <button 
        className="bg-white px-8 py-4 flex gap-2 items-center" 
        onClick={handleSignIn} // Trigger sign-in on click
      >
        <FcGoogle size={30}/>Sign In With Google
      </button>
    </div>
  );
}

export default Login;
