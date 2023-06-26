import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../axiosConfig";

const Checkout = () => {
  const { id } = useParams();
  const [data, setData] = React.useState({});
  const Navigate = useNavigate();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);

  useEffect(() => {
    axiosApi
      .get(`/flight/details/${id}`)
      .then(res => {
        setData(res.data.data);
        setIsSuccessModalOpen(true);
        console.log(res.data.data);
      })
      .catch(err => {
        alert("flight has been booked");
        console.log(err);
      });
  }, []);

  const handleClick = () => {
    Navigate("/");
  };

  return (
    <div>
      <section className="mt-[40px]">
        <h1 className="sr-only text-gray-950">Checkout</h1>

        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2 border-2 border-b-slate-500 shadow-lg">
          <div className="bg-gray-50 py-12 md:py-24 border-2 border-b-slate-500 shadow-lg">
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
                    total Amount:
                  </span>{" "}
                  Rs{data.price}
                </p>
              </div>

              <div>
                <div className="flow-root shadow-lg max-w-lg border-2 border-b-slate-500">
                  <ul className="-my-4 divide-y divide-gray-100">
                    <li className="flex items-center gap-4 py-4">
                      <div>
                        <h3 className="  mx-10 text-2xl  text-blue-900 font-extrabold mt-4 ">
                          {data.from} - {data.to}
                        </h3>

                        <dl className="mt-[20px] space-y-px text-[10px] text-gray-900">
                          <div className="mt-[8px]">
                            <dt className="inline mx-10 mt-[30px] text-[16px] font-bold text-blue-600">
                              {data.arrivalTime}
                            </dt>
                            <dd className="inline  mt-[30px] text-[16px] font-bold">
                              Arrival Time
                            </dd>
                          </div>

                          <div className="mt-[20px]">
                            <dt className="inline mx-10 mt-[30px] text-[16px] font-bold text-blue-600">
                              {data.departureTime}
                            </dt>
                            <dd className="inline  mt-[30px] text-[16px] font-bold">
                              Departure Time
                            </dd>
                          </div>

                          <div className="my-[20px]">
                            <dt className="inline mx-10 mt-[30px] text-[16px] font-bold text-blue-600">
                              {data.duration}
                            </dt>
                            <dd className="inline  mt-[30px] text-[16px] font-bold">
                              Duration Time
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-12 md:py-24">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <form className="grid grid-cols-6 gap-4">
                <div className="col-span-3 ">
                  <label
                    for="FirstName"
                    className="block text-xs font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-8 py-2"
                  />
                </div>

                <div className="col-span-3">
                  <label
                    for="LastName"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-8 py-2"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    for="Email"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-8 py-2"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    for="Phone"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    id="Phone"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-8 py-2"
                  />
                </div>

                <fieldset className="col-span-6">
                  <legend className="block text-sm font-medium text-gray-700">
                    Card Details
                  </legend>

                  <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                    <div>
                      <label for="CardNumber" className="sr-only">
                        {" "}
                        Card Number{" "}
                      </label>

                      <input
                        type="text"
                        id="CardNumber"
                        placeholder="Card Number"
                        className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm px-8 py-2"
                      />
                    </div>

                    <div className="flex">
                      <div className="flex-1">
                        <label for="CardExpiry" className="sr-only">
                          {" "}
                          Card Expiry{" "}
                        </label>

                        <input
                          type="text"
                          id="CardExpiry"
                          placeholder="Expiry Date"
                          className="relative w-full rounded-es-md border-gray-200 focus:z-10 sm:text-sm px-8 py-2"
                        />
                      </div>

                      <div className="-ms-px flex-1">
                        <label for="CardCVC" className="sr-only">
                          {" "}
                          Card CVC{" "}
                        </label>

                        <input
                          type="text"
                          id="CardCVC"
                          placeholder="CVC"
                          className="relative w-full rounded-ee-md border-gray-200 focus:z-10 sm:text-sm px-8 py-2"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="col-span-6">
                  <legend className="block text-sm font-medium text-gray-700">
                    Billing Address
                  </legend>

                  <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                    <div>
                      <label for="Country" className="sr-only">
                        Country
                      </label>

                      <select
                        id="Country"
                        className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm px-8 py-2"
                      >
                        <option>England</option>
                        <option>Wales</option>
                        <option>Scotland</option>
                        <option>France</option>
                        <option>Belgium</option>
                        <option>Japan</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" for="PostalCode">
                        {" "}
                        ZIP/Post Code{" "}
                      </label>

                      <input
                        type="text"
                        id="PostalCode"
                        placeholder="ZIP/Post Code"
                        className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm px-8 py-2"
                      />
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-6">
                  <button
                    onClick={handleClick}
                    className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                  >
                    pay now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black max-w-sm">
            <h2 className="text-xl font-semibold mb-4">
              Account Created Successfully
            </h2>
            <p>Your account has been created successfully!</p>
            <button
              className="mt-6 bg-green-900 text-white rounded py-2 px-4 hover:bg-green-700 focus:outline-none"
              onClick={() => {
                setIsSuccessModalOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
