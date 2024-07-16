import React from 'react';
import { Link } from 'react-router-dom';


function Contact() {

    return (
        <>
            <div>
                Contact
            </div>

            <div className="flex h-screen items-center justify-center">
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</Link>
                        </form>
                        <h3 className="font-bold text-lg">Signup</h3>
                        {/* Name */}
                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                placeholder="Enter your fullname"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                            />
                        </div>
                        {/* Email */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                            />
                        </div>
                        {/* Message */}
                        <div className="mt-4 space-y-2">
                            <span>Message</span>
                            <br />
                            <input
                                type="text"
                                placeholder="Type your message"
                                className="w-80 h-40 px-3 py-1 border rounded-md outline-none"
                            />
                        </div>
                        {/* Button */}
                        <div className="flex justify-between mt-4">
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact