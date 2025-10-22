export default async function() {
  const WEBMENTION_IO_TOKEN = process.env.WEBMENTION_IO_TOKEN;
  const endpoint = `https://webmention.io/api/mentions.jf2?token=${WEBMENTION_IO_TOKEN}`;
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error("Failed to fetch webmentions");
  const json = await response.json();
    console.log("Fetching webmentions from:", json);
  return json.children;
}