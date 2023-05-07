import React, { useState, useRef } from "react";
import axios from "axios";

function AddRoom(){
    const roomNumberEl = useRef(null);
    const typeEl = useRef(null);
    const floorEl = useRef(null);
    const blocknoEl = useRef(null);

    const [roomNumber, setRoomNumber] = useState("");
    const [type, setType] = useState("");
    const [floor, setFloor] = useState("");
    const [blockno, setBlockno] = useState("");
    
    const AddRoom = async () => {
        try {
            const res = await axios.post("http://localhost:5000/createroom", {
                roomNumber:roomNumber,
                type:type,
                floor:floor,
                blockno: blockno,
            });
            if (res.status === 200) {
                roomNumberEl.current.value = "";
                typeEl.current.value = "";
                floorEl.current.value = "";
                blocknoEl.current.value = "";
            }
        } catch (error) {
            console.log(error);
        }
    };
    const submitHandler = function (e) {
        e.preventDefault();
        AddRoom();
    };

    return (
        
        <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={submitHandler} action="" method="POST">
                <div className="mb-5">
                <label
                    htmlFor="roomNumber"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Room Number
                </label>
                <input
                    type="text"
                    ref={roomNumberEl}
                    name="roomNumber"
                    id="roomNumber"
                    value={roomNumber}
                    placeholder="Room Number"
                    onChange={() => {
                    setRoomNumber(roomNumberEl.current.value);
                    }}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="type"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Type
                </label>
                <input
                    type="text"
                    ref={typeEl}
                    name="type"
                    id="type"
                    value={type}
                    placeholder="Type"
                    onChange={() => {
                    setType(typeEl.current.value);
                    }}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="floor"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Floor
                </label>
                <input
                    type="text"
                    name="floor"
                    ref={floorEl}
                    id="floor"
                    value={floor}
                    onChange={() => {
                    setFloor(floorEl.current.value);
                    }}
                    placeholder="Floor"
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

export default AddRoom;
