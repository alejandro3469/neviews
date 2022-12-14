export default function handler(req, res) {
  res
    .status(200)
    .json([
      "Books",
      "Science",
      "Business",
      "Tech",
      "Health",
      "Sports",
      "World",
      "Food",
      "Travel",
      "Art",
      "Style",
      "Food",
    ]);
}
