// // import React, { useState } from 'react'
// // import Navbar from './shared/Navbar'
// // import { Avatar, AvatarImage } from './ui/avatar'
// // import { Button } from './ui/button'
// // import { Contact, Mail, Pen } from 'lucide-react'
// // import { Badge } from './ui/badge'
// // import { Label } from './ui/label'
// // import AppliedJobTable from './AppliedJobTable'
// // import UpdateProfileDialog from './UpdateProfileDialog'
// // import { useSelector } from 'react-redux'
// // import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

// // // const skills = ["Html", "Css", "Javascript", "Reactjs"]
// // const isResume = true;

// // const Profile = () => {
// //     useGetAppliedJobs();
// //     const [open, setOpen] = useState(false);
// //     const {user} = useSelector(store=>store.auth);

// //     return (
// //         <div>
// //             <Navbar />
// //             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
// //                 <div className='flex justify-between'>
// //                     <div className='flex items-center gap-4'>
// //                         <Avatar className="h-24 w-24">
// //                             <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
// //                         </Avatar>
// //                         <div>
// //                             <h1 className='font-medium text-xl'>{user?.fullname}</h1>
// //                             <p>{user?.profile?.bio}</p>
// //                         </div>
// //                     </div>
// //                     <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
// //                 </div>
// //                 <div className='my-5'>
// //                     <div className='flex items-center gap-3 my-2'>
// //                         <Mail />
// //                         <span>{user?.email}</span>
// //                     </div>
// //                     <div className='flex items-center gap-3 my-2'>
// //                         <Contact />
// //                         <span>{user?.phoneNumber}</span>
// //                     </div>
// //                 </div>
// //                 <div className='my-5'>
// //                     <h1>Skills</h1>
// //                     <div className='flex items-center gap-1'>
// //                         {
// //                             user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
// //                         }
// //                     </div>
// //                 </div>
// //                 <div className='grid w-full max-w-sm items-center gap-1.5'>
// //                     <Label className="text-md font-bold">Resume</Label>
// //                     {
// //                         isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
// //                     }
// //                 </div>
// //             </div>
// //             <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
// //                 <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
// //                 {/* Applied Job Table   */}
// //                 <AppliedJobTable />
// //             </div>
// //             <UpdateProfileDialog open={open} setOpen={setOpen}/>
// //         </div>
// //     )
// // }

// // export default Profile

// import React, { useState } from 'react';
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';
// import { useSelector } from 'react-redux';
// import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';

// const Profile = () => {

//     useGetAppliedJobs();

//     const [open, setOpen] = useState(false);
//     const { user } = useSelector(store => store.auth);

//     const defaultAvatar =
//         "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg";

//     return (
//         <div className="bg-gray-50 min-h-screen">

//             <Navbar />

//             {/* PROFILE CARD */}
//             <div className='max-w-4xl mx-auto bg-white border rounded-2xl my-5 p-8 shadow-sm'>

//                 {/* HEADER */}
//                 <div className='flex justify-between items-start'>

//                     <div className='flex items-center gap-4'>

//                         <Avatar className="h-24 w-24">
//                             <AvatarImage
//                                 src={user?.profile?.profilePhoto || defaultAvatar}
//                             />
//                         </Avatar>

//                         <div>
//                             <h1 className='text-xl font-semibold'>
//                                 {user?.fullname || "User"}
//                             </h1>

//                             <p className='text-gray-600'>
//                                 {user?.profile?.bio || "No bio added yet"}
//                             </p>
//                         </div>

//                     </div>

//                     <Button
//                         variant="outline"
//                         onClick={() => setOpen(true)}
//                     >
//                         <Pen />
//                     </Button>

//                 </div>

//                 {/* CONTACT */}
//                 <div className='my-5 space-y-2'>

//                     <div className='flex gap-3 items-center'>
//                         <Mail size={18} />
//                         <span>{user?.email || "NA"}</span>
//                     </div>

//                     <div className='flex gap-3 items-center'>
//                         <Contact size={18} />
//                         <span>{user?.phoneNumber || "NA"}</span>
//                     </div>

//                 </div>

//                 {/* SKILLS */}
//                 <div className='my-5'>

//                     <h1 className='font-semibold mb-2'>Skills</h1>

//                     <div className='flex gap-2 flex-wrap'>

//                         {
//                             Array.isArray(user?.profile?.skills) &&
//                             user.profile.skills.length > 0 ? (

//                                 user.profile.skills.map((skill, i) => (
//                                     <Badge key={i}>{skill}</Badge>
//                                 ))

//                             ) : (
//                                 <span className="text-gray-500">No skills added</span>
//                             )
//                         }

//                     </div>

//                 </div>

//                 {/* RESUME */}
//                 <div className='my-5'>

//                     <Label className="font-bold">Resume</Label>

//                     <div className='mt-2'>

//                         {
//                             user?.profile?.resume ? (
//                                 <a
//                                     href={`https://docs.google.com/gview?url=${user.profile.resume}&embedded=true`}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className='text-blue-600 hover:underline'
//                                 >
//                                     {user?.profile?.resumeOriginalName || "View Resume"}
//                                 </a>
//                             ) : (
//                                 <span className="text-gray-500">No resume uploaded</span>
//                             )
//                         }

//                     </div>

//                 </div>

//             </div>

//             {/* APPLIED JOBS */}
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-sm'>

//                 <h1 className='font-bold text-lg mb-4'>
//                     Applied Jobs
//                 </h1>

//                 <AppliedJobTable />

//             </div>

//             {/* UPDATE DIALOG */}
//             <UpdateProfileDialog
//                 open={open}
//                 setOpen={setOpen}
//             />

//         </div>
//     );
// };

// export default Profile;

import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';

const Profile = () => {
  useGetAppliedJobs();

  const [open, setOpen] = useState(false);
  const { user } = useSelector(store => store.auth);

  const defaultAvatar =
    "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg";

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* PROFILE CARD */}
      <div className='max-w-4xl mx-auto bg-white border rounded-2xl my-5 p-8 shadow-sm'>
        {/* HEADER */}
        <div className='flex justify-between items-start'>
          <div className='flex items-center gap-4'>
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={user?.profile?.profilePhoto || defaultAvatar}
              />
            </Avatar>
            <div>
              <h1 className='text-xl font-semibold'>
                {user?.fullname || "User"}
              </h1>
              <p className='text-gray-600'>
                {user?.profile?.bio || "No bio added yet"}
              </p>
            </div>
          </div>
          <Button variant="outline" onClick={() => setOpen(true)}>
            <Pen />
          </Button>
        </div>

        {/* CONTACT */}
        <div className='my-5 space-y-2'>
          <div className='flex gap-3 items-center'>
            <Mail size={18} />
            <span>{user?.email || "NA"}</span>
          </div>
          <div className='flex gap-3 items-center'>
            <Contact size={18} />
            <span>{user?.phoneNumber || "NA"}</span>
          </div>
        </div>

        {/* SKILLS */}
        <div className='my-5'>
          <h1 className='font-semibold mb-2'>Skills</h1>
          <div className='flex gap-2 flex-wrap'>
            {Array.isArray(user?.profile?.skills) &&
            user.profile.skills.length > 0 ? (
              user.profile.skills.map((skill, i) => (
                <Badge key={i}>{skill}</Badge>
              ))
            ) : (
              <span className="text-gray-500">No skills added</span>
            )}
          </div>
        </div>

        {/* RESUME */}
        <div className='my-5'>
          <Label className="font-bold">Resume</Label>
          <div className='mt-2'>
            {user?.profile?.resume ? (
              <a
                href={`https://docs.google.com/gview?url=${user.profile.resume}&embedded=true`}
                target="_blank"
                rel="noopener noreferrer"
                className='text-blue-600 hover:underline'
              >
                {user?.profile?.resumeOriginalName || "View Resume"}
              </a>
            ) : (
              <span className="text-gray-500">No resume uploaded</span>
            )}
          </div>
        </div>
      </div>

      {/* APPLIED JOBS */}
      <div className='max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-sm'>
        <h1 className='font-bold text-lg mb-4'>Applied Jobs</h1>
        <AppliedJobTable />
      </div>

      {/* UPDATE DIALOG */}
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
