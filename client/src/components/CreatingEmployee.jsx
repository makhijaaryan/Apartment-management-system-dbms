// import React, { useState, useRef } from "react";
// import axios from "axios";

// function CreatingEmployee(){
//     const employeeEl = useRef(null);
//     const nameEl = useRef(null);
//     const salaryEl = useRef(null);
//     const emptyEl = useRef(null);
//     const ageEl = useRef(null);
//     const blocknoEl = useRef(null);
//     const passEl = useRef(null);
//     const adhaarEl = useRef(null);

//     const [name, setName] = useState("");
//     const [salary, setSalary] = useState("");
//     const [empty, setEmpty] = useState("");
//     const [age, setAge] = useState("");
//     const [blockno, setBlockno] = useState("");
//     const [pass, setPass] = useState("");
//     const [adhaar, setAdhaar] = useState("");
//     const [employeeno, setEmployeeno] = useState("");

//     const createEmployee = async () => {
//         try {
//             const res = await axios.post("http://localhost:5000/createemployee", {
//                 name: name,
//                 salary: salary,
//                 empty: empty,
//                 age: age,
//                 blockno: blockno,
//                 password: pass,
//                 adhaar: adhaar,
//                 employeeno: employeeno,
//             });
//             if (res.status === 200) {
//                 employeeEl.current.value = "";
//                 nameEl.current.value = "";
//                 salaryEl.current.value = "";
//                 emptyEl.current.value = "";
//                 ageEl.current.value = "";
//                 blocknoEl.current.value = "";
//                 passEl.current.value = "";
//                 adhaarEl.current.value = "";
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     const submitHandler = function (e) {
//         e.preventDefault();
//         createEmployee();
//     };

//     return (
//         <div className="mx-auto w-full max-w-[550px]">
//             <form onSubmit={submitHandler} action="" method="POST">
//                 <div className="mb-5">
//                     <label
//                         htmlFor="name"
//                         className="mb-3 block text-base font-medium text-[#07074D]"
//                     >  Full Name
//                     </label>
//                     <input
//                         type="text"
//                         ref={nameEl}
//                         name="name"
//                         id="name"
//                         value={name}
//                         placeholder="Enter Full Name"
//                         onChange={() => {
//                             setName(nameEl.current.value);
//                         }}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#07074D] focus:border-[#07074D] sm:text-sm"
//                     /> 
//                 </div>
//                 <div className="mb-5">
//                     <label
