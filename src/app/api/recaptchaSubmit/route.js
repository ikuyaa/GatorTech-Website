import { NextResponse } from "next/server";
import axios from 'axios';

export async function POST(req, res) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const postData = await req.json();
    const recaptchaToken = new String(postData.token).toString();

    let response;
    const formData = `secret=${secretKey}&response=${recaptchaToken}`;

    try {
        response = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        )
    } catch (error) {
        return NextResponse.json({ success: false });
    }

    if(response && response.data.success && response.data.score > 0.5) {
        console.log("response.data.score:", response.data?.score);
        return NextResponse.json({ success: true, score: response.data.score });
    } else {
        return NextResponse.json({ success: false });
    }

}