import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const {name, email, password} = await req.json();

        await connectToDatabase();

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return Response.json({error: "Email already in use"}, {status: 400});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({name, email, password: hashedPassword});

        return Response.json({message: "User registered successfully", user: newUser }, {status: 201});
    }catch (error) {
        return Response.json({error: "Registration failed"}, {status: 500 });
    }
}