import React, { useState } from 'react';
import "./AdminSeeAllUser.css"
import Swal from 'sweetalert2';
import UserAllData from './UserAllData/UserAllData';
import { useQuery } from '@tanstack/react-query';

const AdminSeeAllUser = () => {

    // user data all find use tenStack query 
    const { data: adminAllUsers = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("https://my.therealmoneyplant.com/users");
            return res.json();
        },
    });

    console.log(adminAllUsers)

    // user role Change Click Admin
    let HandleAdmin = (id) => {

        fetch(`https://my.therealmoneyplant.com/AdminUpdateRoleAdmin/${id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Update Admin has been Success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch()
            })
    }

    // user role Change Click User
    let handleUser = (id) => {

        fetch(`https://my.therealmoneyplant.com/AdminUpdateRoleUser/${id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Update User has been Success",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                refetch()
            })

    }

    // user role Change Click Delete
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

                fetch(`https://my.therealmoneyplant.com/AdminDeleteUsers/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Admin Delete User has been Success",
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                        console.log(data)

                        refetch()
                    })

            }

        });
    }





    // ====================================================================
    // Input value get
    // ====================================================================
    let [UserIdValue, setUserIdValue] = useState("")
    const handleSearchUserId = (event) => {
        event.preventDefault()
        let categoryValue = event.target.email.value
        setUserIdValue(categoryValue)
    }

    // ======================================
    // Searching user by use Id Value Start
    // ======================================
    let UserIdValueShow = adminAllUsers.filter(UserSearch => UserSearch.email === UserIdValue)
    //  console.log(UserIdValueShow)

    // ======================================
    // Searching user by use Id Value Start
    // ======================================












    return (
        <div className='UserDataAdmin bg-white '>

            <div className='userData bg-[#F6F6F6] rounded-[7px] mx-0 md:mx-6 my-8 px-4 py-8'>

                {/* ======================================= */}

                <div className='ProductFilterOption mb-[34px]'>
                    <h3>Search your user Data and use user email </h3>
                    <form onSubmit={handleSearchUserId}>
                        <div className='ProductSearch  md:w-[34%] w-[100%] flex items-center'>
                            <input type="email" name="email" placeholder="Search User Email" />
                            <button type="submit" className="fa fa-search" aria-hidden="true"></button>
                        </div>
                    </form>
                </div>

                {/* ======================================= */}

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-[14px] font-[600] text-white">Image</th>
                                <th className="text-[14px] font-[600] text-white">Name</th>
                                <th className="text-[14px] font-[600] text-white">Email</th>
                                <th className="text-[14px] font-[600] text-white">REFER ID</th>
                                <th className="text-[14px] font-[600] text-white">Role</th>
                                <th className="text-[14px] font-[600] text-white">Change Role</th>
                                <th className="text-[14px] font-[600] text-white">Delete Id</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* {
                                adminAllUsers.slice(0,500)?.map(allUser => <UserAllData HandleAdmin={HandleAdmin} handleUser={handleUser} HandleDelete={HandleDelete} key={allUser._id} allUser={allUser} refetch={refetch}></UserAllData>)
                            } */}

                            {

                                UserIdValueShow?.length > 0 ?

                                UserIdValueShow?.map(allUser => <UserAllData HandleAdmin={HandleAdmin} handleUser={handleUser} HandleDelete={HandleDelete} key={allUser._id} allUser={allUser} refetch={refetch}></UserAllData>)
                                :
                                adminAllUsers.slice(0,200)?.map(allUser => <UserAllData HandleAdmin={HandleAdmin} handleUser={handleUser} HandleDelete={HandleDelete} key={allUser._id} allUser={allUser} refetch={refetch}></UserAllData>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AdminSeeAllUser;