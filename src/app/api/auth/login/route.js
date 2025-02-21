import User from "@/app/models/User";
import { connectToDatabase } from "@/lib/mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


export async function POST(req) {
    try {
        const { email, password } = await req.json();

        await connectToDatabase();

        const user = await User.findOne({email});
        if (!user) {
            return Response.json({error: "User not found"}, {status: 400});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return Response.json({error: "incorrect password"}, {status: 400});
        }

        const token = jwt.sign({userid: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

        return Response.json({message: "Login successful", token, user}, {status: 200});
    }catch (error) {
        return Response.json({error: "Login failed"}, {status: 500});
    }
}