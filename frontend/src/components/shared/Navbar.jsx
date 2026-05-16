// // // import React from 'react'
// // // import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// // // import { Button } from '../ui/button'
// // // import { Avatar, AvatarImage } from '../ui/avatar'
// // // import { LogOut, User2 } from 'lucide-react'
// // // import { Link, useNavigate } from 'react-router-dom'
// // // import { useDispatch, useSelector } from 'react-redux'
// // // import axios from 'axios'
// // // import { USER_API_END_POINT } from '@/utils/constant'
// // // import { setUser } from '@/redux/authSlice'
// // // import { toast } from 'sonner'

// // // const Navbar = () => {
// // //     const { user } = useSelector(store => store.auth);
// // //     const dispatch = useDispatch();
// // //     const navigate = useNavigate();

// // //     const logoutHandler = async () => {
// // //         try {
// // //             const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
// // //             if (res.data.success) {
// // //                 dispatch(setUser(null));
// // //                 navigate("/");
// // //                 toast.success(res.data.message);
// // //             }
// // //         } catch (error) {
// // //             console.log(error);
// // //             toast.error(error.response.data.message);
// // //         }
// // //     }
// // //     return (
// // //         <div className='bg-white'>
// // //             <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
// // //                 <div>
// // //                     <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
// // //                 </div>
// // //                 <div className='flex items-center gap-12'>
// // //                     <ul className='flex font-medium items-center gap-5'>
// // //                         {
// // //                             user && user.role === 'recruiter' ? (
// // //                                 <>
// // //                                     <li><Link to="/admin/companies">Companies</Link></li>
// // //                                     <li><Link to="/admin/jobs">Jobs</Link></li>
// // //                                 </>
// // //                             ) : (
// // //                                 <>
// // //                                     <li><Link to="/">Home</Link></li>
// // //                                     <li><Link to="/jobs">Jobs</Link></li>
// // //                                     <li><Link to="/browse">Browse</Link></li>
// // //                                 </>
// // //                             )
// // //                         }


// // //                     </ul>
// // //                     {
// // //                         !user ? (
// // //                             <div className='flex items-center gap-2'>
// // //                                 <Link to="/login"><Button variant="outline">Login</Button></Link>
// // //                                 <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
// // //                             </div>
// // //                         ) : (
// // //                             <Popover>
// // //                                 <PopoverTrigger asChild>
// // //                                     <Avatar className="cursor-pointer">
// // //                                         <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
// // //                                     </Avatar>
// // //                                 </PopoverTrigger>
// // //                                 <PopoverContent className="w-80">
// // //                                     <div className=''>
// // //                                         <div className='flex gap-2 space-y-2'>
// // //                                             <Avatar className="cursor-pointer">
// // //                                                 <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
// // //                                             </Avatar>
// // //                                             <div>
// // //                                                 <h4 className='font-medium'>{user?.fullname}</h4>
// // //                                                 <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
// // //                                             </div>
// // //                                         </div>
// // //                                         <div className='flex flex-col my-2 text-gray-600'>
// // //                                             {
// // //                                                 user && user.role === 'student' && (
// // //                                                     <div className='flex w-fit items-center gap-2 cursor-pointer'>
// // //                                                         <User2 />
// // //                                                         <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
// // //                                                     </div>
// // //                                                 )
// // //                                             }

// // //                                             <div className='flex w-fit items-center gap-2 cursor-pointer'>
// // //                                                 <LogOut />
// // //                                                 <Button onClick={logoutHandler} variant="link">Logout</Button>
// // //                                             </div>
// // //                                         </div>
// // //                                     </div>
// // //                                 </PopoverContent>
// // //                             </Popover>
// // //                         )
// // //                     }

// // //                 </div>
// // //             </div>

// // //         </div>
// // //     )
// // // }

// // // export default Navbar

// // // import React from 'react'
// // // import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// // // import { Button } from '../ui/button'
// // // import { Avatar, AvatarImage } from '../ui/avatar'
// // // import { LogOut, User2 } from 'lucide-react'
// // // import { Link, useNavigate } from 'react-router-dom'
// // // import { useDispatch, useSelector } from 'react-redux'
// // // import axios from 'axios'
// // // import { USER_API_END_POINT } from '@/utils/constant'
// // // import { setUser } from '@/redux/authSlice'
// // // import { toast } from 'sonner'

// // // const Navbar = () => {

// // //     const { user } = useSelector(store => store.auth);

// // //     const dispatch = useDispatch();
// // //     const navigate = useNavigate();

// // //     const logoutHandler = async () => {
// // //         try {

// // //             const res = await axios.get(
// // //                 `${USER_API_END_POINT}/logout`,
// // //                 {
// // //                     withCredentials: true
// // //                 }
// // //             );

// // //             if (res.data.success) {

// // //                 dispatch(setUser(null));

// // //                 navigate("/");

// // //                 toast.success(res.data.message);
// // //             }

// // //         } catch (error) {

// // //             console.log(error);

// // //             toast.error(error?.response?.data?.message);

// // //         }
// // //     }

// // //     return (
// // //         <div className='bg-white border-b'>

// // //             <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4'>

// // //                 {/* Logo */}
// // //                 <div>
// // //                     <h1 className='text-2xl font-bold'>
// // //                         Job<span className='text-[#F83002]'>Portal</span>
// // //                     </h1>
// // //                 </div>

// // //                 {/* Right Section */}
// // //                 <div className='flex items-center gap-12'>

// // //                     {/* Nav Links */}
// // //                     <ul className='flex font-medium items-center gap-5'>

// // //                         {
// // //                             user && user.role === 'recruiter' ? (
// // //                                 <>
// // //                                     <li>
// // //                                         <Link to="/admin/companies">
// // //                                             Companies
// // //                                         </Link>
// // //                                     </li>

// // //                                     <li>
// // //                                         <Link to="/admin/jobs">
// // //                                             Jobs
// // //                                         </Link>
// // //                                     </li>
// // //                                 </>
// // //                             ) : (
// // //                                 <>
// // //                                     <li>
// // //                                         <Link to="/">
// // //                                             Home
// // //                                         </Link>
// // //                                     </li>

// // //                                     <li>
// // //                                         <Link to="/jobs">
// // //                                             Jobs
// // //                                         </Link>
// // //                                     </li>

// // //                                     <li>
// // //                                         <Link to="/browse">
// // //                                             Browse
// // //                                         </Link>
// // //                                     </li>
// // //                                 </>
// // //                             )
// // //                         }

// // //                     </ul>

// // //                     {/* Auth Buttons */}
// // //                     {
// // //                         !user ? (

// // //                             <div className='flex items-center gap-2'>

// // //                                 <Link to="/login">
// // //                                     <Button variant="outline">
// // //                                         Login
// // //                                     </Button>
// // //                                 </Link>

// // //                                 <Link to="/signup">
// // //                                     <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
// // //                                         Signup
// // //                                     </Button>
// // //                                 </Link>

// // //                             </div>

// // //                         ) : (

// // //                             <Popover>

// // //                                 {/* Avatar */}
// // //                                 <PopoverTrigger asChild>

// // //                                     <button className="outline-none">

// // //                                         <Avatar className="cursor-pointer border">

// // //                                             <AvatarImage
// // //                                                 src={user?.profile?.profilePhoto}
// // //                                                 alt="profile"
// // //                                             />

// // //                                         </Avatar>

// // //                                     </button>

// // //                                 </PopoverTrigger>

// // //                                 {/* Dropdown */}
// // //                                 <PopoverContent
// // //                                     side="bottom"
// // //                                     align="end"
// // //                                     className="w-80 bg-white border shadow-lg z-[100]"
// // //                                 >

// // //                                     <div>

// // //                                         {/* User Info */}
// // //                                         <div className='flex gap-3 items-center'>

// // //                                             <Avatar className="cursor-pointer">

// // //                                                 <AvatarImage
// // //                                                     src={user?.profile?.profilePhoto}
// // //                                                     alt="profile"
// // //                                                 />

// // //                                             </Avatar>

// // //                                             <div>

// // //                                                 <h4 className='font-medium'>
// // //                                                     {user?.fullname}
// // //                                                 </h4>

// // //                                                 <p className='text-sm text-muted-foreground'>
// // //                                                     {user?.profile?.bio}
// // //                                                 </p>

// // //                                             </div>

// // //                                         </div>

// // //                                         {/* Actions */}
// // //                                         <div className='flex flex-col my-3 text-gray-600 gap-3'>

// // //                                             {
// // //                                                 user?.role === 'student' && (

// // //                                                     <Link to="/profile">

// // //                                                         <Button
// // //                                                             variant="link"
// // //                                                             className="flex items-center gap-2 p-0"
// // //                                                         >
// // //                                                             <User2 size={18} />
// // //                                                             View Profile
// // //                                                         </Button>

// // //                                                     </Link>
// // //                                                 )
// // //                                             }

// // //                                             <Button
// // //                                                 onClick={logoutHandler}
// // //                                                 variant="link"
// // //                                                 className="flex items-center gap-2 p-0"
// // //                                             >
// // //                                                 <LogOut size={18} />
// // //                                                 Logout
// // //                                             </Button>

// // //                                         </div>

// // //                                     </div>

// // //                                 </PopoverContent>

// // //                             </Popover>
// // //                         )
// // //                     }

// // //                 </div>

// // //             </div>

// // //         </div>
// // //     )
// // // }

// // // export default Navbar

// // import React from 'react'
// // import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// // import { Button } from '../ui/button'
// // import { Avatar, AvatarImage } from '../ui/avatar'
// // import { LogOut, User2 } from 'lucide-react'
// // import { Link, useNavigate } from 'react-router-dom'
// // import { useDispatch, useSelector } from 'react-redux'
// // import axios from 'axios'
// // import { USER_API_END_POINT } from '@/utils/constant'
// // import { setUser } from '@/redux/authSlice'
// // import { toast } from 'sonner'

// // const Navbar = () => {

// //     const { user } = useSelector(store => store.auth);

// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();

// //     // ================= LOGOUT =================
// //     const logoutHandler = async () => {

// //         try {

// //             const res = await axios.get(
// //                 `${USER_API_END_POINT}/logout`,
// //                 {
// //                     withCredentials: true
// //                 }
// //             );

// //             if (res.data.success) {

// //                 dispatch(setUser(null));

// //                 navigate("/");

// //                 toast.success(res.data.message);
// //             }

// //         } catch (error) {

// //             console.log(error);

// //             toast.error(
// //                 error?.response?.data?.message || "Logout failed"
// //             );
// //         }
// //     };

// //     return (

// //         <div className='bg-white border-b'>

// //             <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4'>

// //                 {/* LOGO */}
// //                 <div>

// //                     <Link to="/">
// //                         <h1 className='text-2xl font-bold'>
// //                             Job<span className='text-[#F83002]'>Portal</span>
// //                         </h1>
// //                     </Link>

// //                 </div>

// //                 {/* RIGHT SECTION */}
// //                 <div className='flex items-center gap-12'>

// //                     {/* NAV LINKS */}
// //                     <ul className='flex font-medium items-center gap-5'>

// //                         {
// //                             user && user.role === 'recruiter' ? (

// //                                 <>
// //                                     <li>
// //                                         <Link to="/admin/companies">
// //                                             Companies
// //                                         </Link>
// //                                     </li>

// //                                     <li>
// //                                         <Link to="/admin/jobs">
// //                                             Jobs
// //                                         </Link>
// //                                     </li>
// //                                 </>

// //                             ) : (

// //                                 <>
// //                                     <li>
// //                                         <Link to="/">
// //                                             Home
// //                                         </Link>
// //                                     </li>

// //                                     <li>
// //                                         <Link to="/jobs">
// //                                             Jobs
// //                                         </Link>
// //                                     </li>

// //                                     <li>
// //                                         <Link to="/browse">
// //                                             Browse
// //                                         </Link>
// //                                     </li>
// //                                 </>
// //                             )
// //                         }

// //                     </ul>

// //                     {/* LOGIN / PROFILE */}
// //                     {
// //                         !user ? (

// //                             <div className='flex items-center gap-2'>

// //                                 <Link to="/login">

// //                                     <Button variant="outline">
// //                                         Login
// //                                     </Button>

// //                                 </Link>

// //                                 <Link to="/signup">

// //                                     <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
// //                                         Signup
// //                                     </Button>

// //                                 </Link>

// //                             </div>

// //                         ) : (

// //                             <Popover>

// //                                 {/* PROFILE AVATAR */}
// //                                 <PopoverTrigger asChild>

// //                                     <button
// //                                         className="outline-none"
// //                                         onClick={() => navigate("/profile")}
// //                                     >

// //                                         <Avatar className="cursor-pointer border">

// //                                             <AvatarImage
// //                                                 src={user?.profile?.profilePhoto}
// //                                                 alt="profile"
// //                                             />

// //                                         </Avatar>

// //                                     </button>

// //                                 </PopoverTrigger>

// //                                 {/* DROPDOWN */}
// //                                 <PopoverContent
// //                                     side="bottom"
// //                                     align="end"
// //                                     className="w-72 p-4 bg-white border rounded-xl shadow-lg"
// //                                 >

// //                                     {/* USER INFO */}
// //                                     <div className='flex items-start gap-3'>

// //                                         <Avatar className="h-12 w-12">

// //                                             <AvatarImage
// //                                                 src={user?.profile?.profilePhoto}
// //                                                 alt="profile"
// //                                             />

// //                                         </Avatar>

// //                                         <div>

// //                                             <h4 className='font-semibold text-base'>
// //                                                 {user?.fullname}
// //                                             </h4>

// //                                             <p className='text-sm text-gray-500'>
// //                                                 {user?.profile?.bio}
// //                                             </p>

// //                                         </div>

// //                                     </div>

// //                                     {/* DIVIDER */}
// //                                     <div className='my-4 border-t'></div>

// //                                     {/* ACTIONS */}
// //                                     <div className='flex flex-col gap-3'>

// //                                         {
// //                                             user?.role === 'student' && (

// //                                                 <Link to="/profile">

// //                                                     <div className='flex items-center gap-2 text-gray-700 hover:text-[#F83002] cursor-pointer transition-all'>

// //                                                         <User2 size={18} />

// //                                                         <span className='font-medium'>
// //                                                             View Profile
// //                                                         </span>

// //                                                     </div>

// //                                                 </Link>
// //                                             )
// //                                         }

// //                                         {/* LOGOUT */}
// //                                         <div
// //                                             onClick={logoutHandler}
// //                                             className='flex items-center gap-2 text-gray-700 hover:text-[#F83002] cursor-pointer transition-all'
// //                                         >

// //                                             <LogOut size={18} />

// //                                             <span className='font-medium'>
// //                                                 Logout
// //                                             </span>

// //                                         </div>

// //                                     </div>

// //                                 </PopoverContent>

// //                             </Popover>
// //                         )
// //                     }

// //                 </div>

// //             </div>

// //         </div>
// //     )
// // }

// // export default Navbar

// import React from 'react'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Button } from '../ui/button'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { LogOut } from 'lucide-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { setUser } from '@/redux/authSlice'
// import { toast } from 'sonner'

// const Navbar = () => {

//     const { user } = useSelector(store => store.auth);

//     const dispatch = useDispatch();

//     const navigate = useNavigate();

//     const logoutHandler = async () => {

//         try {

//             const res = await axios.get(
//                 `${USER_API_END_POINT}/logout`,
//                 {
//                     withCredentials: true
//                 }
//             );

//             if (res.data.success) {

//                 dispatch(setUser(null));

//                 navigate("/");

//                 toast.success(res.data.message);
//             }

//         } catch (error) {

//             console.log(error);

//             toast.error(error?.response?.data?.message);
//         }
//     }

//     return (

//         <div className='bg-white border-b'>

//             <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4'>

//                 {/* LOGO */}
//                 <div>

//                     <h1 className='text-2xl font-bold'>

//                         Job<span className='text-[#F83002]'>Portal</span>

//                     </h1>

//                 </div>

//                 {/* RIGHT SECTION */}
//                 <div className='flex items-center gap-12'>

//                     {/* NAV LINKS */}
//                     <ul className='flex font-medium items-center gap-5'>

//                         {
//                             user && user.role === 'recruiter' ? (

//                                 <>
//                                     <li>
//                                         <Link to="/admin/companies">
//                                             Companies
//                                         </Link>
//                                     </li>

//                                     <li>
//                                         <Link to="/admin/jobs">
//                                             Jobs
//                                         </Link>
//                                     </li>
//                                 </>

//                             ) : (

//                                 <>
//                                     <li>
//                                         <Link to="/">
//                                             Home
//                                         </Link>
//                                     </li>

//                                     <li>
//                                         <Link to="/jobs">
//                                             Jobs
//                                         </Link>
//                                     </li>

//                                     <li>
//                                         <Link to="/browse">
//                                             Browse
//                                         </Link>
//                                     </li>
//                                 </>
//                             )
//                         }

//                     </ul>

//                     {/* LOGIN / SIGNUP */}
//                     {
//                         !user ? (

//                             <div className='flex items-center gap-2'>

//                                 <Link to="/login">

//                                     <Button variant="outline">
//                                         Login
//                                     </Button>

//                                 </Link>

//                                 <Link to="/signup">

//                                     <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
//                                         Signup
//                                     </Button>

//                                 </Link>

//                             </div>

//                         ) : (

//                             <>
//                                 {
//                                     user?.role === "student" ? (

//                                         <Link to="/profile">

//                                             <Avatar className="cursor-pointer border">

//                                                 <AvatarImage
//                                                     src={user?.profile?.profilePhoto}
//                                                     alt="profile"
//                                                 />

//                                             </Avatar>

//                                         </Link>

//                                     ) : (

//                                         <Popover>

//                                             <PopoverTrigger asChild>

//                                                 <button className="outline-none">

//                                                     <Avatar className="cursor-pointer border">

//                                                         <AvatarImage
//                                                             src={user?.profile?.profilePhoto}
//                                                             alt="profile"
//                                                         />

//                                                     </Avatar>

//                                                 </button>

//                                             </PopoverTrigger>

//                                             <PopoverContent
//                                                 side="bottom"
//                                                 align="end"
//                                                 className="w-72 p-4 bg-white border rounded-xl shadow-lg"
//                                             >

//                                                 {/* USER INFO */}
//                                                 <div className='flex items-center gap-3'>

//                                                     <Avatar className="h-12 w-12">

//                                                         <AvatarImage
//                                                             src={user?.profile?.profilePhoto}
//                                                             alt="profile"
//                                                         />

//                                                     </Avatar>

//                                                     <h4 className='font-semibold text-base'>

//                                                         {user?.fullname}

//                                                     </h4>

//                                                 </div>

//                                                 {/* DIVIDER */}
//                                                 <div className='my-4 border-t'></div>

//                                                 {/* LOGOUT */}
//                                                 <div
//                                                     onClick={logoutHandler}
//                                                     className='flex items-center gap-2 text-gray-700 hover:text-[#F83002] cursor-pointer transition-all'
//                                                 >

//                                                     <LogOut size={18} />

//                                                     <span className='font-medium'>
//                                                         Logout
//                                                     </span>

//                                                 </div>

//                                             </PopoverContent>

//                                         </Popover>
//                                     )
//                                 }
//                             </>
//                         )
//                     }

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Navbar

import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {

    const { user } = useSelector(store => store.auth);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutHandler = async () => {

        try {

            const res = await axios.get(
                `${USER_API_END_POINT}/logout`,
                {
                    withCredentials: true
                }
            );

            if (res.data.success) {

                dispatch(setUser(null));

                navigate("/");

                toast.success(res.data.message);
            }

        } catch (error) {

            console.log(error);

            toast.error(error?.response?.data?.message);
        }
    };

    return (

        <div className='bg-white border-b'>

            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4'>

                {/* LOGO */}
                <div>

                    <h1 className='text-2xl font-bold'>

                        Job
                        <span className='text-[#F83002]'>
                            Portal
                        </span>

                    </h1>

                </div>

                {/* RIGHT SECTION */}
                <div className='flex items-center gap-12'>

                    {/* NAV LINKS */}
                    <ul className='flex font-medium items-center gap-5'>

                        {
                            user && user.role === "recruiter" ? (

                                <>
                                    <li>
                                        <Link to="/admin/companies">
                                            Companies
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/admin/jobs">
                                            Jobs
                                        </Link>
                                    </li>
                                </>

                            ) : (

                                <>
                                    <li>
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/jobs">
                                            Jobs
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/browse">
                                            Browse
                                        </Link>
                                    </li>
                                </>
                            )
                        }

                    </ul>

                    {/* LOGIN SIGNUP */}
                    {
                        !user ? (

                            <div className='flex items-center gap-2'>

                                <Link to="/login">

                                    <Button variant="outline">
                                        Login
                                    </Button>

                                </Link>

                                <Link to="/signup">

                                    <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                                        Signup
                                    </Button>

                                </Link>

                            </div>

                        ) : (

                            <Popover>

                                {/* PROFILE PHOTO */}
                                <PopoverTrigger asChild>

                                    <div className='cursor-pointer'>

                                        <Avatar className="border">

                                            <AvatarImage
                                                src={user?.profile?.profilePhoto}
                                                alt="profile"
                                            />

                                        </Avatar>

                                    </div>

                                </PopoverTrigger>

                                {/* DROPDOWN */}
                                <PopoverContent
                                    className="w-72 mr-4"
                                >

                                    <div className='flex gap-3 items-center'>

                                        <Avatar className="h-12 w-12">

                                            <AvatarImage
                                                src={user?.profile?.profilePhoto}
                                                alt="profile"
                                            />

                                        </Avatar>

                                        <div>

                                            <h1 className='font-semibold'>
                                                {user?.fullname}
                                            </h1>

                                            {
                                                user?.role === "student" && (

                                                    <p className='text-sm text-gray-500'>
                                                        {user?.profile?.bio}
                                                    </p>
                                                )
                                            }

                                        </div>

                                    </div>

                                    <div className='my-4 border-t'></div>

                                    <div className='flex flex-col gap-3'>

                                        {/* ONLY STUDENT */}
                                        {
                                            user?.role === "student" && (

                                                <Link to="/profile">

                                                    <div className='flex items-center gap-2 cursor-pointer hover:text-[#F83002]'>

                                                        <User2 size={18} />

                                                        <span>
                                                            View Profile
                                                        </span>

                                                    </div>

                                                </Link>
                                            )
                                        }

                                        {/* LOGOUT */}
                                        <div
                                            onClick={logoutHandler}
                                            className='flex items-center gap-2 cursor-pointer hover:text-[#F83002]'
                                        >

                                            <LogOut size={18} />

                                            <span>
                                                Logout
                                            </span>

                                        </div>

                                    </div>

                                </PopoverContent>

                            </Popover>
                        )
                    }

                </div>

            </div>

        </div>
    )
}

export default Navbar