export const photos = new Array(10).fill({}).map((_, idx) => {
  const urlId = String(idx + 1);
  return {
    id: `${idx}`,
    src: `https://api.ee123.net/img/bingimg/2024/09/${urlId.padStart(
      2,
      "0"
    )}.jpg`,
  };
});
