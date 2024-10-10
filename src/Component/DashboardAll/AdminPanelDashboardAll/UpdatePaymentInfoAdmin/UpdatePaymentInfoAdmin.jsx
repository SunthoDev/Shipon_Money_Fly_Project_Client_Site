import React from 'react';
import "./UpdatePaymentInfoAdmin.css"
import moment from 'moment';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const UpdatePaymentInfoAdmin = () => {


        // ======================================================
    // Payment Selected Status Find and Apply Start
    // ======================================================

    const { data: AdminPaymentStatusData = [], refetch } = useQuery({
        queryKey: ["AdminPaymentStatusData"],
        queryFn: async () => {
            const res = await fetch("https://my.therealmoneyplant.com/AdminPaymentStatusData");
            return res.json();
        },
    });
    let paymentTypeAdmin = AdminPaymentStatusData[0]

    // console.log(paymentTypeAdmin)

    // ID
    // number
    // payment
    // ======================================================
    // Payment Selected Status Find and Apply End
    // ======================================================



    // ======================================================
    // Admin Update Payment Information Start
    // ======================================================

    const handleUpdatePaymentInfo = (event) => {
        event.preventDefault()

        let numberUp = event.target.Number.value
        let PaymentUp = event.target.PaymentType.value
        let allInfo = { numberUp, PaymentUp, }

        // console.log(allInfo)

        fetch(`https://my.therealmoneyplant.com/AdminUpdatePaymentStatusAndNumber/${paymentTypeAdmin?._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(allInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Payment Data Update Is Success',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    refetch()
                }
            })

    }

    // ======================================================
    // Admin Update Payment Information Start
    // ======================================================


    return (
        <div className='md:mx-20 mb-10'>

            <div className="welcome mx-4 md:mx-0">
                <div className="img">
                    <img src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80" alt="" />
                    <div className="overlay ">
                        <h2>Update Your Payment Information</h2>
                    </div>
                </div>
            </div>

            <form onSubmit={handleUpdatePaymentInfo}>

                <div className='AllToyData grid mx-4 md:mx-0 md:grid-cols-2 gap-8'>

                    <div className=" form-control">
                        <label className="label">
                            <span className="ToyName label-text">Update Your Number</span>
                        </label>
                        <label className=" input-group w-full">
                            <span>Your Use Number ({paymentTypeAdmin?.number})</span>
                            <input type="text" name='Number' defaultValue={paymentTypeAdmin?.number} placeholder=" Give me Number " className="input input-bordered input-accent w-full " />
                        </label>
                    </div>


                    <div className=" form-control">
                        <label className="label">
                            <span className="ToyName label-text"> Select Payment Type </span>
                        </label>
                        <label className=" input-group w-full">
                            <span>Your Payment Type Use ({paymentTypeAdmin?.payment}) </span> <br />
                            <select name='PaymentType' className="select select-success w-[100%] ">
                                <option>Bkash</option>
                                <option>Nagad</option>
                            </select>
                        </label>
                    </div>

                </div>

                <input type="submit" className="btn text-white bg-[#1E8F85] w-full mt-8" value="Update Status" />

            </form>
        </div>
    );
};

export default UpdatePaymentInfoAdmin;


