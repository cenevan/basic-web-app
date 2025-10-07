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

  //Which of the following numbers is the largest: 15, 82, 25?
  if (normalizedQuery.includes("largest")) {
    const parts = normalizedQuery.split(":");
    if (parts.length === 2) {
      const numbers = parts[1]
        .split(",")
        .map((num) => parseInt(num.replace(/\D/g, ""), 10))
        .filter((num) => !isNaN(num));
      if (numbers.length > 0) {
        return Math.max(...numbers).toString();
      }
    }
    return "";
  }

  return "";
}
