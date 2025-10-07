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

  if (normalizedQuery.includes("plus")) {
    return normalizedQuery
      .split("plus")
      .map((part) => part.trim())
      .filter((part) => !isNaN(Number(part)))
      .reduce((sum, num) => sum + Number(num), 0)
      .toString();
  }

  return "";
}
