"use client"

import { useState } from "react"


export default function Register() {
    const [formData, setFormData] = useState({ name: "", email: "", password: ""});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        alert(data.message || data.error);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-14 shadow-md rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-black">Register</h2>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="mb-2 p-2 border text-black rounded w-full outline-none"/>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="mb-2 p-2 border text-black rounded w-full outline-none"/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="mb-4 p-2 border text-black rounded w-full outline-none"/>
                <button type="submit" className="bg-pink-500 text-white p-2 rounded w-full" >Sign Up</button>
            </form>
        </div>
    )
}