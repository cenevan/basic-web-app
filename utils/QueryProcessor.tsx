export default function QueryProcessor(query?: string): string {
  if (typeof query !== "string" || query.length === 0) {
    return "";
  }

  const normalizedQuery = query.toLowerCase();

  if (normalizedQuery.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (normalizedQuery.includes("name")) {
    return "ecen";
  }

  if (normalizedQuery.includes("andrew id")) {
    return "ecen";
  }

  //What is 91 plus 74?
  if (normalizedQuery.includes("plus")) {
    const parts = normalizedQuery.split("plus");
    if (parts.length === 2) {
      const num1 = parseInt(parts[0].replace(/\D/g, ""), 10);
      const num2 = parseInt(parts[1].replace(/\D/g, ""), 10);
      if (!isNaN(num1) && !isNaN(num2)) {
        return (num1 + num2).toString();
      }
    }
    return "";
  }

  // Which of the following numbers is the largest: 15, 82, 25?
  if (normalizedQuery.includes("largest")) {
    const matches = query.match(/-?\d+(?:\.\d+)?/g);
    if (matches && matches.length > 0) {
      const numbers = matches.map(Number).filter((num) => !Number.isNaN(num));
      if (numbers.length > 0) {
        const largest = numbers.reduce(
          (max, current) => (current > max ? current : max),
          Number.NEGATIVE_INFINITY
        );
        return Number.isFinite(largest) ? largest.toString() : "";
      }
    }
    return "";
  }

  return "";
}
