export function formatDollar(price: number): string {
    if (!price) {
        return "N/A";
    }
    if (typeof price != "number") {
        return "N/A";
    }
    return `$${price.toFixed(2)}`;
}