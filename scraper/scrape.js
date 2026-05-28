for (let page = 1; page <= 50; page++) {
  const url = `https://www.propertybook.co.zw/houses/to-rent?page=${page}`;

  const res = await fetch("https://api.firecrawl.dev/v2/scrape", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FIRECRAWL_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      url,
      onlyMainContent: true,
      formats: [
        {
          type: "json",
          schema: simpleSchema
        }
      ]
    })
  });

  const data = await res.json();

  const listings = data?.data?.json?.listings || [];

  if (!listings.length) break;

  merge(listings);
}