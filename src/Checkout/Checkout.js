import React, { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../axiosConfig";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Stack,
   Input,
   Select
} from '@chakra-ui/react'
import axios from "axios";
import Loaders from "../Loaders/Loaders";

const Checkout = () => {
  const user =JSON.parse(localStorage.getItem("user"))
  const [passengers,setPassengers]=useState([])
  const[name,setName]=useState("")
  const[age,setAge]=useState("")
  const[phone,setPhone]=useState("")
  const[gender,setGender]=useState("")
  const [loading, setLoading] = React.useState(false);

  const { id } = useParams();
  const [data, setData] = React.useState({});
  const Navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [formData, setFormData] = React.useState({
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
    country: "",
    postalCode: ""
  });


  const handleData=()=>{
  if (formData.cardNumber==="") {
    return "Card number is required";
    
  }

  if (formData.cardExpiry==="") {
    return "Card expiry is required";
    
  }

  if (formData.cardCVC==="") {
   return "Card CVC is required";
    
  }
  }




  useEffect(() => {
    
    axiosApi
      .get(`/flight/details/${id}`)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationError = handleData();
  //   if (validationError === "") {
  //     // Form is valid, proceed with submission
  //     alert("Flight has been booked");
  //     Navigate("/");
  //   } else {
  //     // Form has validation errors
  //     alert(validationError);
  //   }
  // };

  const addUser=()=>{
    if(name===""){
      return alert("name is required")
    }
    if(age===""){
      return alert("age is required")
    }
    if(phone===""){
      return alert("phone is required")
    }
    if(gender===""){
      return alert("gender is required")
    }
    var newData =[...passengers]
    newData.push({name,age,gender,phone})
    setPassengers(newData)
    setAge("")
    setName("")
    setGender("")
    setPhone("")
  }
  console.log(passengers)


  const handlePay=async()=>{
    if(passengers.length===0){
     return(
        alert("passenger details must be added")
     )
   }
     
   
       const token=user.token;
       const totalPrice=passengers.length*data.price;
      const flightId =data._id
      const departureDate =localStorage.getItem("departureDate")
      console.log(departureDate)

      try{
        setLoading(true)
        const res = await axios.post("https://tame-tan-cockroach-boot.cyclic.app/booking/add",{
          passengers:passengers,
          totalPrice:totalPrice,
          token:token,
          flightId:flightId,
          departureDate:departureDate,
        })
        setLoading(false)
        console.log(res)
        alert("Flight has been booked");
      Navigate("/");
      }catch(err){
        setLoading(false)
        console.log(err)
      }
  }

const handleAdd=()=>{
  if(!user.token){
   return Navigate("/login")
  }
  onOpen()
  
}


  return (
    <div>
      <section className="mt-[40px]">
        <h1 className="sr-only text-gray-950">Checkout</h1>
        <div className="mx-auto max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 gap-4 border-2 border-b-slate-500 shadow-lg rounded">
          <div className="bg-gray-50 py-12 md:py-24 border-2 border-b-slate-500 shadow-lg rounded">
            <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
              <div className="flex items-center gap-4">
                <span className="h-10 w-10 rounded-full bg-blue-700" />
                <h2 className="text-blue-900 font-extrabold text-4xl">
                  Tripma
                </h2>
              </div>

              <div>
                <p className="text-2xl font-medium tracking-tight text-gray-900">
                  <span className="text-blue-900 font-extrabold text-lg">
                    Total Amount:
                  </span>{" "}
                  Rs{data.price}
                </p>
              </div>

              <div>
                <div className="flow-root shadow-lg max-w-lg border-2 border-b-slate-500 rounded ">
                  <ul className="-my-4 divide-y divide-gray-100">
                    <li className="flex items-center gap-4 py-4">
                      <div className="items-center">
                        <h3 className=" text-2xl text-blue-900 font-extrabold mt-4 mx-32">
                          {data.from} - {data.to}
                        </h3>
                        <dl className="mt-4 space-y-4 text-sm text-gray-900">
                          <div className="flex items-center">
                            <dt className="font-bold text-blue-600 mx-24">Arrival Time:</dt>
                            <dd>{data.arrivalTime}</dd>
                          </div>
                          <div className="flex items-center">
                            <dt className="font-bold text-blue-600 mx-24">Departure Time:</dt>
                            <dd>{data.departureTime}</dd>
                          </div>
                          <div className="flex items-center">
                            <dt className="font-bold text-blue-600 mx-24">Duration Time:</dt>
                            <dd>{data.duration}</dd>
                          </div>
                        </dl>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

         
          <div className="bg-white py-12 md:py-12 rounded">
          <div className="ml-auto">
              {/* modal */}
              <Button onClick={handleAdd} backgroundColor={"gray.700"} color={"white"}>Add</Button>
          <Modal isOpen={isOpen} onClose={onClose}>/
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Stack spacing={4} >
            <Input type='text' placeholder='fullname'  value={name} onChange={(e)=>setName(e.target.value)}/>
            <Input type='number' placeholder='age'  value={age} onChange={(e)=>setAge(e.target.value)}/>
            <Input type='tel' placeholder='phone number'value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <Select placeholder='Select option' value={gender} onChange={(e)=>setGender(e.target.value)}>
              <option value='male'>male</option>
              <option value='female'>female</option>
             </Select>
             
              </Stack>
              </ModalBody>

              <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='green' backgroundColor={"blue.900"} color={"white"} onClick={addUser}>submit</Button>
            </ModalFooter>
           </ModalContent>
      </Modal>
{/*                                  */}
          </div>
          <div className="mx-auto max-w-lg px-4 lg:px-8 mt-4">

          <div>
             {
              passengers.map((ele,index)=>{
                return(
                  <div>
                    <p className="text-[18px] font-medium tracking-tight text-gray-900">
                     {index+1}. {ele.name} ,{ele.age} ,{ele.gender},
                      {ele.phone} 
                  </p>

                </div>
                )

              })
             }
              </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" >
              {/* Existing input fields */}
                <fieldset className="col-span-2">
                  <legend className="block text-sm font-medium text-gray-700">
                    Card Details
                  </legend>
                  <div className="mt-1 -space-y-px rounded-md shadow-sm">
                    <div>
                      <label htmlFor="CardNumber" className="sr-only">
                        Card Number
                      </label>
                      <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  id="cardNumber"
                 
                 className="mt-1 w-full rounded-md border-gray-950 shadow-sm sm:text-sm px-8 py-2 border-2"
                />
        
              </div>
                    <div className="flex">
                      <div className="flex-1">
                        <label htmlFor="CardExpiry" className="sr-only text-[black]">
                          Card Expiry
                        </label>
                        <input
                  type="text"
                  name="cardExpiry"
                  value={formData.cardExpiry}
                  onChange={handleChange}
                  id="cardExpiry"
                  placeholder="card_expiry"
                 
                  className="mt-1 w-full rounded-md border-gray-950  sm:text-sm px-8 py-2 border-2 "
                />
               
              </div>
                      <div className="-ms-px flex-1">
                        <label htmlFor="CardCVC" className="sr-only">
                          Card CVC
                        </label>
                        <input
                  type="text"
                  name="cardCVC"
                  value={formData.cardCVC}
                  onChange={handleChange}
                  id="cardCVC"
                  placeholder="cvv"
                 
                  className="mt-1 w-full rounded-md border-gray-950  sm:text-sm px-8 py-2 border-2"
                />
                
              </div>
                    </div>
                  </div>
                </fieldset>
                <div className="col-span-2">
                  <button
                    className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                  onClick={handlePay}>
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        loading?<Loaders/>:null
      }
    </div>
  );
};

export default Checkout;


