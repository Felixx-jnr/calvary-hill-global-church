export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.mixlr.com/users/calvary-hill-global-church",
      {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      }
    );
    const data = await response.json();

    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // Prevents browser caching
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Mixlr status:", error); // Log the error
    res.status(500).json({ error: "Failed to fetch Mixlr status" });
  }
}
