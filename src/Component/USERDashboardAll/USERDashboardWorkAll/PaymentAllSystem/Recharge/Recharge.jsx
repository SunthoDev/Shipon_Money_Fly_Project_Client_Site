import React from 'react';
import "./Recharge.css"
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthoncationAll/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useRole from '../../../../../Hook/useRole';
import { useQuery } from '@tanstack/react-query';
// import bakash from '../../../assets/SbImage/bakash.png'
// import nogod from '../../../assets/SbImage/nogod.png'

const Recharge = () => {

    let { setPaymentInfo } = useContext(AuthContext)
    let navigate = useNavigate()
    const [roles] = useRole()


    let [clickAmount, setClickAmount] = useState()
    let [error, setError] = useState("")


    let handleRecharge = (e) => {
        e.preventDefault()
        setError("")

        let TotalAmount = e.target.Amount.value
        let number = e.target.numbers.value
        let PayType = e.target.PaymentType.value

        if (PayType !== "Bkash" && PayType !== "Nagad") {
            setError("Select Proper Payment Method");
            return;
        }
        if (TotalAmount < 400) {
            setError("You must do a minimum recharge of 400 tk");
            return;
        }
        if (number.length < 11) {
            setError("You must give me a 11 character number");
            return;
        }

        setPaymentInfo([TotalAmount, number, PayType])
        navigate("/DashboardUser/ConfirmePayment")

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

    // console.log(AdminPaymentStatusData[0])
    let paymentTypeAdmin = AdminPaymentStatusData[0]


    // ======================================================
    // Payment Selected Status Find and Apply End
    // ======================================================




    return (
        <div className=" bg-[#F7F8FC] mx-2 md:mx-0">
            <div className="PaymentFirstPart w-[100%] md:w-[58%] mx-auto py-[100px]">

                <form onSubmit={handleRecharge}>

                    <div className="PaymentBox">
                        <div className="MyBalance bg-[#3CCC70]">
                            <h3>আমার ব্যালেন্স</h3>
                            <h4>৳ {roles?.userBalance}</h4>

                        </div>

                        <div className="RechargeBalance bg-[#FDFDFE]">

                            <h4>পরিমাণ</h4>

                            <div className="grid grid-cols-3 gap-5">
                                <h5 onClick={(e) => setClickAmount(500)}>500</h5>
                                <h5 onClick={(e) => setClickAmount(1000)}>1000</h5>
                                <h5 onClick={(e) => setClickAmount(1500)}>1500</h5>
                                <h5 onClick={(e) => setClickAmount(2000)}>2000</h5>
                                <h5 onClick={(e) => setClickAmount(2500)}>2500</h5>
                                <h5 onClick={(e) => setClickAmount(3000)}>3000</h5>
                            </div>

                            <input defaultValue={clickAmount} required name="Amount" className='TotalRechargeAmount' type="number" placeholder="রিচার্জের পরিমাণ লিখুন" />

                            <h4 className="minumemRecharge">সর্বনিম্ন রিচার্জের পরিমাণ 400Tk</h4>

                        </div>

                        <div className="PaymentInfo bg-[#FDFDFE]">
                            <h2>আপনার অ্যাকাউন্ট</h2>
                            <input className="number" required type="number" name="numbers" placeholder="e.g 01XXXXXXXXX" />

                            <h2>পেমেন্ট চ্যানেল</h2>
                            <select required className="select select-bordered w-full" name="PaymentType">
                                <option disabled selected>আপনার পেমেন্ট চ্যানেল নির্বাচন করুন</option>
                                {/* <option>{paymentTypeAdmin?.payment}</option> */}
                                <option>Bkash</option>
                                <option>Nagad</option>
                            </select>

                            <h4 className="error text-red-500 text-[16px] font-[600]">{error}</h4>

                            <button type='submit' className="PaymentButton"> পেমেন্ট যান </button>

                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default Recharge;