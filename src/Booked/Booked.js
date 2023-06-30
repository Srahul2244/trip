import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loaders from '../Loaders/Loaders';

const Booked = () => {
  const[data,setData] =useState([])
  const [loading, setLoading] = React.useState(false);

  const user=JSON.parse(localStorage.getItem("user"))||{}
  

  const getBooked =async()=>{
    
    try{
      const res = await axios.post("https://tame-tan-cockroach-boot.cyclic.app/booking/all",{
        token:user.token,
      })
      setData(res.data.data)
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getBooked()
  },[])

  return (
    <div>      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <tbody className="divide-y divide-gray-100 border-t border-gray-100">
        {data.map((ele,index) => {
          return (
            <tr className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="text-sm">
                  <div className="font-medium text-gray-700">
                    {
                      ele.passengers.map((ele)=>{
                        return(
                          <>
                          {ele.name}
                          </>
                        )
                      })
                    }
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                 {ele.seats}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                 {ele.bookingDate}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                 {ele.departureDate}
                </span>
              </td>
              <td className="px-6 py-4">
               {ele.totalPrice}
              </td>
              
              <td className="px-6 py-4">
               <h1 className='px-2 py-2 border-2 border-gray-950 bg-green-700 w-[80px] rounded-lg text-white text-center'>booked</h1>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
   {loading?<Loaders/>:null}
  </div>
  )
}

export default Booked