export function declension(
  number: number,
  declensions: string[],
  cases = [2, 0, 1, 1, 1, 2]
) {
  return declensions[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}
