import React from 'react';
import "./UserAllRechargeData.css"
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import UserAllRechargeDataSee from './UserAllRechargeDataSee/UserAllRechargeDataSee';

const UserAllRechargeData = () => {

    // user data all find use tenStack query 
    const { data: userAllRechargeData = [], refetch } = useQuery({
        queryKey: ["AllRechargeData"],
        queryFn: async () => {
            const res = await fetch("https://my.therealmoneyplant.com/AllRechargeData");
            return res.json();
        },
    });

    // console.log(userAllRechargeData)

    // =========================================================
    // Admin Approved User Recharge and add use balance Start
    // =========================================================

    let HandleApprovedRechargeStatus = (id, UserEmail,TotalAmounts) => {
        let allInfo = {TotalAmount:TotalAmounts}

        fetch(`https://my.therealmoneyplant.com/AdminApprovedUserRechargeStatus/${id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    fetch(`https://my.therealmoneyplant.com/AdminUserRechargeMoneyAdd/${UserEmail}`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(allInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Your are recharge approved is success",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                            // refetch()
                        })
                }
                refetch()
            })
    }



    // =========================================================
    // Admin Approved User Recharge and add use balance End
    // =========================================================

    // =========================================
    // Delete User Recharge information Start
    // =========================================

    let HandleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://my.therealmoneyplant.com/AdminDeleteRecharge/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User Payment Delete Success",
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                        // console.log(data)

                        refetch()
                    })

            }

        });
    }


    return (
        <div className='UserDataAdmin bg-white '>

            <div className='userData bg-[#F6F6F6] rounded-[7px] mx-0 md:mx-6 my-8 px-4 py-8'>

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-[14px] font-[600] text-white">Name</th>
                                <th className="text-[14px] font-[600] text-white">Total Amount</th>
                                <th className="text-[14px] font-[600] text-white">Account Num</th>
                                <th className="text-[14px] font-[600] text-white">Trx Id</th>
                                <th className="text-[14px] font-[600] text-white">Pay Type</th>
                                <th className="text-[14px] font-[600] text-white">Status</th>
                                <th className="text-[14px] font-[600] text-white">Approved Id</th>
                                <th className="text-[14px] font-[600] text-white">Delete Id</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                userAllRechargeData?.map(allUserRecharge => <UserAllRechargeDataSee key={allUserRecharge._id} allUserRecharge={allUserRecharge} HandleDelete={HandleDelete} HandleApprovedRechargeStatus={HandleApprovedRechargeStatus}></UserAllRechargeDataSee>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default UserAllRechargeData;