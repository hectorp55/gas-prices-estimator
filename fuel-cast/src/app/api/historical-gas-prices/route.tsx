 // app/api/your-endpoint/route.js
const API_KEY = process.env.FRED_API_KEY as string;

export async function GET(request) {
    // TODO: make the request be for the last 12 months
    const response = await fetch(`https://api.stlouisfed.org/fred/series/observations?series_id=APU000074714&api_key=${API_KEY}&file_type=json&observation_start=2025-01-01&limit=12`);
    if (!response.ok) {
        throw new Error('Problem with gas prices');
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
}