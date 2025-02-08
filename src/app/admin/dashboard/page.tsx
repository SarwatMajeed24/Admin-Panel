// "use client"
// import { setProduct } from '@/redux/features/productSlice';
// import { setLoading } from '@/redux/features/loadingSlice';
// import { useAppDispatch } from '@/redux/hooks';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import ProductRow from '@/app/components/adminpanel/ProductRow';
// import Popup from '@/app/components/adminpanel/Popup';
// export interface IProduct{
//   _id: string,
//   imgsrc: string,
//   filekey: string,
//   name: string,
//   price: string,
//   category: string,
// }

// const Dashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [openPopup, setOpenPopup] = useState(false);
//   const [updateTable, setUpdateTable] = useState(false);

//   const dispatch = useAppDispatch();

//   useEffect(() => {
//       dispatch(setLoading(true));
//       axios
//       .get("/api/get_products")
//       .then((res) => setProduct(res.data))
//       .catch((err)=> console.log(err))
//       .finally(() => dispatch(setLoading(false)));
//   }, [updateTable]);

//   return (
//     <div>
//     <div className="bg-white h-[calc(100vh-96px)] rounded-lg p-4]">
//       <h2 className='text-3xl'>All Products</h2>
//       <div className='mt-4 h-[calc(100vh-100px)] overflow-y-auto'>
//         <table className='w-full'>
//           <thead>
//             <tr className='text-gray-500 border-t border-[#ececec]'>
//               <th>SR No.</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Picture</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product: IProduct, index)=>(
//               <ProductRow 
//               key={product._id}
//               srNo={index+1}
//               setOpenPopup = {setOpenPopup}
//               setUpdateTable= {setUpdateTable}
//               product={product}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     {openPopup && (
//       <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />
//     )}
//     </div>
//   );
// };
// export default Dashboard;


// "use client";
// import { setProduct } from '@/redux/features/productSlice';
// import { setLoading } from '@/redux/features/loadingSlice';
// import { useAppDispatch } from '@/redux/hooks';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import ProductRow from '@/app/components/adminpanel/ProductRow';
// import Popup from '@/app/components/adminpanel/Popup';

// export interface IProduct {
//   _id: string;
//   imgsrc: string;
//   filekey: string;
//   name: string;
//   price: string;
//   category: string;
// }

// const Dashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [openPopup, setOpenPopup] = useState(false);
//   const [updateTable, setUpdateTable] = useState(false);

//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     dispatch(setLoading(true));
//     axios
//       .get("/api/get_products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.log(err))
//       .finally(() => dispatch(setLoading(false)));
//   }, [updateTable, dispatch]);  // Add dispatch here

//   return (
//     <div>
//       <div className="bg-white h-[calc(100vh-96px)] rounded-lg p-4]">
//         <h2 className="text-3xl">All Products</h2>
//         <div className="mt-4 h-[calc(100vh-100px)] overflow-y-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="text-gray-500 border-t border-[#ececec]">
//                 <th>SR No.</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Picture</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product: IProduct, index) => (
//                 <ProductRow
//                   key={product._id}
//                   srNo={index + 1}
//                   setOpenPopup={setOpenPopup}
//                   setUpdateTable={setUpdateTable}
//                   product={product}
//                 />
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {openPopup && <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />}
//     </div>
//   );
// };

// export default Dashboard;

// "use client"
// import { setProduct } from '@/redux/features/productSlice';
// import { setLoading } from '@/redux/features/loadingSlice';
// import { useAppDispatch } from '@/redux/hooks';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import ProductRow from '@/app/components/adminpanel/ProductRow';
// import Popup from '@/app/components/adminpanel/Popup';
// export interface IProduct{
//   _id: string,
//   imgsrc: string,
//   filekey: string,
//   name: string,
//   price: string,
//   category: string,
// }

// const Dashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [openPopup, setOpenPopup] = useState(false);
//   const [updateTable, setUpdateTable] = useState(false);

//   const dispatch = useAppDispatch();

//   useEffect(() => {
//       dispatch(setLoading(true));
//       axios
//       .get("/api/get_products")
//       .then((res) => setProducts(res.data))
//       .catch((err)=> console.log(err))
//       .finally(() => dispatch(setLoading(false)));
//   }, [updateTable])

//   return (
//     <div>
//     <div className="bg-white h-[calc(100vh-96px)] rounded-lg p-4]">
//       <h2 className='text-3xl'>All Products</h2>
//       <div className='mt-4 h-[calc(100vh-100px)] overflow-y-auto'>
//         <table className='w-full'>
//           <thead>
//             <tr className='text-gray-500 border-t border-[#ececec]'>
//               <th>SR No.</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Picture</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product: IProduct, index)=>(
//               <ProductRow 
//               key={product._id}
//               srNo={index+1}
//               setOpenPopup = {setOpenPopup}
//               setUpdateTable= {setUpdateTable}
//               product={product}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     {openPopup && (
//       <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />
//     )}
//     </div>
//   );
// };
// export default Dashboard;
"use client"
import { setProduct } from '@/redux/features/productSlice';
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductRow from '@/app/components/adminpanel/ProductRow';
import Popup from '@/app/components/adminpanel/Popup';

export interface IProduct{
  _id: string,
  imgsrc: string,
  filekey: string,
  name: string,
  price: string,
  category: string,
}

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(setLoading(true));  // Set loading to true before API call
      axios
      .get("/api/get_products")
      .then((res) => setProducts(res.data))  // Set the products data in state
      .catch((err) => console.log(err))  // Log errors if any
      .finally(() => dispatch(setLoading(false)));  // Set loading to false after API call
  }, [updateTable, dispatch]);  // Add dispatch to the dependency array

  return (
    <div>
      <div className="bg-white h-[calc(100vh-96px)] rounded-lg p-4]">
        <h2 className='text-3xl'>All Products</h2>
        <div className='mt-4 h-[calc(100vh-100px)] overflow-y-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-gray-500 border-t border-[#ececec]'>
                <th>SR No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Picture</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: IProduct, index) => (
                <ProductRow
                  key={product._id}
                  srNo={index + 1}
                  setOpenPopup={setOpenPopup}
                  setUpdateTable={setUpdateTable}
                  product={product}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {openPopup && (
        <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />
      )}
    </div>
  );
};

export default Dashboard;
