 // app/api/your-endpoint/route.js
 import { NextRequest } from 'next/server';
const API_KEY = process.env.COLLECT_API_GAS_KEY as string;
const STATE_QUERY_KEY = "state" as string;

export async function GET(request: NextRequest ) {
    const searchParams = request.nextUrl.searchParams;
    const queryValue = searchParams.get(STATE_QUERY_KEY); 

    const response = await fetch(`https://api.collectapi.com/gasPrice/stateUsaPrice?state=${queryValue}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": API_KEY,
    }});
    if (!response.ok) {
        console.error(response);
        throw new Error('Problem with gas prices');
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
}