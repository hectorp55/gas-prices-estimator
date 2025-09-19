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
        console.error('Problem with the Collect API gas price endpoint. Please try again or come back later.');
        // Need fake gas price because my API key free trial has ended, but keeping the same format to show functionality.
        const fakeGasPriceData = {
            result: {
                state: [
                    {gasoline: 2.65}
                ]
            }
        };
        return new Response(JSON.stringify(fakeGasPriceData));
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
}