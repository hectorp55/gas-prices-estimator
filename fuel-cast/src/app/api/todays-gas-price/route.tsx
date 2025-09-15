 // app/api/your-endpoint/route.js
const API_KEY = process.env.COLLECT_API_GAS_KEY as string;

export async function GET(request) {
    // TODO: make the request for the state that is input or gathereed
    const response = await fetch(`https://api.collectapi.com/gasPrice/stateUsaPrice?state=TX`, {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    "Authorization": API_KEY,
    }});
    if (!response.ok) {
        throw new Error('Problem with gas prices');
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
}