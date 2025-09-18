 // app/api/your-endpoint/route.js
const API_KEY = process.env.EAI_API_KEY as string;

export async function GET() {
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setMonth(startDate.getMonth() - 1);
    const response = await fetch(`https://api.eia.gov/v2/petroleum/pri/gnd/data/?frequency=weekly&data[0]=value&start=${startDate.toISOString().substring(0, 10)}&end=${endDate.toISOString().substring(0, 10)}&sort[0][column]=period&sort[0][direction]=asc&offset=0&length=31&facets[duoarea][]=STX&facets[product][]=EPMR&api_key=${API_KEY}`);
    if (!response.ok) {
        console.error(response);
        throw new Error('Problem with the Energy Information Administration API. Please try again or come back later.');
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
}