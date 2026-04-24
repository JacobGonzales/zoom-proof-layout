export function compareValues(leftValue, rightValue, direction) {
  const normalizedLeft = String(leftValue).toLowerCase();
  const normalizedRight = String(rightValue).toLowerCase();

  if (normalizedLeft < normalizedRight) {
    return direction === "asc" ? -1 : 1;
  }

  if (normalizedLeft > normalizedRight) {
    return direction === "asc" ? 1 : -1;
  }

  return 0;
}
