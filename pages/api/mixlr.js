export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.mixlr.com/users/calvary-hill-global-church"
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Mixlr status" });
  }
}
