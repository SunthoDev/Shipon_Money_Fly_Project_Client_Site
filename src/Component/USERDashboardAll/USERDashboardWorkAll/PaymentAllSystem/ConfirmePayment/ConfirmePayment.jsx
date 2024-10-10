import React, { useContext, useEffect, useState } from 'react';
import "./ConfirmePayment.css"
import stepTwo from "../../../../../assets/AllImage/stepTwo.png"
import stepThree from "../../../../../assets/AllImage/stepThree.png"
import stepThreeB from "../../../../../assets/AllImage/stepThreeB.png"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../AuthoncationAll/AuthProvider/AuthProvider';
import useRole from '../../../../../Hook/useRole';



const ConfirmePayment = () => {

    let { paymentInfo } = useContext(AuthContext)
    let navigate = useNavigate()
    const [roles] = useRole()
    let [btnDisable, setBtnDisable] = useState(false)

    // if the array value will be empty ter redirect another page 
    useEffect(() => {
        if (paymentInfo && paymentInfo.length === 0) {
            navigate("/Recharge");
        }
    }, [paymentInfo, navigate]);



    let handleSubmit = (e) => {
        e.preventDefault()
        setBtnDisable(true)
        let PayTrxId = e.target.PayTransactionsId.value;
        let PaymentIdUser = Math.round(Math.random() * 99999999).toString();

        let allInfo = { PayTrxId, PaymentIdUser, TotalAmount: paymentInfo[0], AccountNumber: paymentInfo[1], payType: paymentInfo[2], status: "pending", UserName: roles?.name, UserEmail: roles?.email, }
        // console.log(allInfo)

        fetch("https://my.therealmoneyplant.com/userPaymentRequest", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(allInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Congratulation, you payment is success",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setBtnDisable(false)
                    navigate("/")
                }
            })
    }



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


    // ======================================================
    // Payment Selected Status Find and Apply End
    // ======================================================


    return (
        <div className=" bg-[#F7F8FC]">
            <div className="ConfirmedPayment py-[120px] md:py-[60px]">

                <form onSubmit={handleSubmit}>

                    <h2 className="StepOne">ধাপ 1. সুবিধাভোগী অ্যাকাউন্ট কপি করুন</h2>

                    <div className=" paymentNumber flex justify-between">
                        <h3>আমি আজ খুশি</h3>
                        <h4>{paymentTypeAdmin?.number}</h4>
                    </div>

                    <div className=" paymentType flex justify-between">
                        <h3>পেমেন্ট চ্যানেল</h3>
                        <h4>{paymentInfo[2]}</h4>
                    </div>

                    <div className=" TotalPayment flex justify-between">
                        <h3>পরিশোধিত অর্থ</h3>
                        <h4>{paymentInfo[0]}</h4>
                    </div>


                    {paymentInfo[2] === "Nagad" ?
                        <>
                            <h2 className="StepTwo">ধাপ 2. আপনি যে পরিমাণ রিচার্জ করতে চান তা Nagad ট্রান্সফারের মাধ্যমে আমাদের কাছে ট্রান্সফার করুন</h2>
                            <h3 className="TransId"><span className='text-red-600'>*</span> অনুগ্রহ করে পেমেন্ট করার পরে আপনার [TxnID] অনুলিপি করুন</h3>
                            <div className="img w-[100%] h-[100%]">
                                <img className="w-[100%] h-[100%]" src={stepTwo} alt="img" />
                            </div>
                        </>
                        :
                        <>
                            <h2 className="StepThree">ধাপ 2. সম্পূর্ণ করতে দয়া করে TxnID লিখুন</h2>
                            <div className="flex">
                                <div className="img w-[100%] h-[100%]">
                                    <img className="w-[100%] h-[100%]" src={stepThree} alt="img" />
                                </div>
                                <div className="img w-[100%] h-[100%]">
                                    <img className="w-[100%] h-[100%]" src={stepThreeB} alt="img" />
                                </div>
                            </div>
                        </>
                    }

                    <input type="text" required name="PayTransactionsId" placeholder="8-সংখ্যার TxnID" className="TrxIDCoPayment" />

                    <button disabled={btnDisable} type="submit" className="PaymentDone"> পেমেন্ট নিশ্চিত করুন </button>

                </form>

            </div>
        </div>
    );
};

export default ConfirmePayment;