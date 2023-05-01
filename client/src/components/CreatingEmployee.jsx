import React, { useState, useRef } from "react";
import axios from "axios";

function CreatingEmployee(){
    const employeeEl = useRef(null);
    const nameEl = useRef(null);
    const salaryEl = useRef(null);
    const empTyEl = useRef(null);
    const ageEl = useRef(null);
    const blocknoEl = useRef(null);
    const passEl = useRef(null);
    const adhaarEl = useRef(null);
    const dobEl = useRef(null);

    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [empTy, setEmpTy] = useState("");
    const [age, setAge] = useState("");
    const [blockno, setBlockno] = useState("");
    const [pass, setPass] = useState("");
    const [adhaar, setAdhaar] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [dob, setDob] = useState("");

    const createEmployee = async () => {
        try {
            const res = await axios.post("http://localhost:5000/createemployee", {
                name: name,
                salary: salary,
                empTy: empTy,
                age: age,
                blockno: blockno,
                password: pass,
                adhaar: adhaar,
                employeeId: employeeId,
            });
            if (res.status === 200) {
                employeeEl.current.value = "";
                nameEl.current.value = "";
                salaryEl.current.value = "";
                empTyEl.current.value = "";
                ageEl.current.value = "";
                blocknoEl.current.value = "";
                passEl.current.value = "";
                adhaarEl.current.value = "";
            }
        } catch (error) {
            console.log(error);
        }
    };
    const submitHandler = function (e) {
        e.preventDefault();
        createEmployee();
    };

    return (
        
        <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={submitHandler} action="" method="POST">
                <div className="mb-5">
                <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Employee Name
                </label>
                <input
                    type="text"
                    ref={nameEl}
                    name="name"
                    id="name"
                    value={name}
                    placeholder="Employee Name"
                    onChange={() => {
                    setName(nameEl.current.value);
                    }}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="employee-id"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Employee Id
                </label>
                <input
                    type="text"
                    ref={employeeEl}
                    name="employee-id"
                    id="employee-id"
                    value={employeeId}
                    placeholder="Employee Id"
                    onChange={() => {
                    setEmployeeId(employeeEl.current.value);
                    }}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="age"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Age
                </label>
                <input
                    type="age"
                    name="age"
                    ref={ageEl}
                    id="age"
                    value={age}
                    onChange={() => {
                    setAge(ageEl.current.value);
                    }}
                    placeholder="Age"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="Adhaar"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Adhaar
                </label>
                <input
                    type="text"
                    ref={adhaarEl}
                    value={adhaar}
                    onChange={() => {
                    setAdhaar(adhaarEl.current.value);
                    }}
                    name="Adhaar"
                    id="Adhaar"
                    placeholder="Enter your Adhaar"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="pass"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Password
                </label>
                <input
                    type="text"
                    name="pass"
                    ref={passEl}
                    value={pass}
                    onChange={() => {
                    setPass(passEl.current.value);
                    }}
                    id="dob"
                    placeholder="Enter your Password"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="dob"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    DOB
                </label>
                <input
                    type="text"
                    name="dob"
                    ref={dobEl}
                    value={dob}
                    onChange={() => {
                    setDob(dobEl.current.value);
                    }}
                    id="dob"
                    placeholder="Enter your dob"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                </div>
                
                <div className="mb-5">
                <label
                    htmlFor="salary"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Salary
                </label>
                <input
                    type="text"
                    ref={salaryEl}
                    name="salary"
                    id="salary"
                    value={salary}
                    placeholder="Salary"
                    onChange={() => {
                    setSalary(salaryEl.current.value);
                    }}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                </div>

                <div className="mb-5">
                <label
                    htmlFor="empTy"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Employee Type
                </label>
                <input
                    type="text"
                    ref={empTyEl}
                    name="empTy"
                    id="empTy"
                    value={empTy}
                    placeholder="Type"
                    onChange={() => {
                    setEmpTy(empTyEl.current.value);
                    }}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                </div>


                <div className="mb-5">
                <label
                    htmlFor="block-no"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Block Number
                </label>
                <input
                    type="text"
                    ref={blocknoEl}
                    name="block-no"
                    id="block-no"
                    value={blockno}
                    placeholder="Block Number"
                    onChange={() => {
                    setBlockno(blocknoEl.current.value);
                    }}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                </div>


                <div className="flex w-full">
                <button className="mx-auto hover:shadow-form  py-3 px-8 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none hover:bg-white hover:text-blue-500 transition-all duration-300 hover:border-blue-500 border-transparent border-2">
                    Submit
                </button>
                </div>
            </form>
        </div>
    );
}

export default CreatingEmployee;
