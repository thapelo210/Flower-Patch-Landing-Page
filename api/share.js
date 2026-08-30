export default function handler(req, res) {
  const { item } = req.query;

  // Directory of all your items, their descriptions, and image URLs
  const items = {
    'bright-yellow': {
      title: 'Bright Yellow Bouquet - The Flower Patch',
      desc: 'Radiant sunshine blooms carefully bundled to provide bright, energetic warmth.',
      img: 'https://www.flowerpatchbyo.com/Rose%201.jpeg'
    },
    'lavender-dream': {
      title: 'Lavender Dream Bouquet - The Flower Patch',
      desc: 'Unique enchantment pastel tones thoughtfully balanced to deliver modern luxury.',
      img: 'https://www.flowerpatchbyo.com/Rose%202.jpeg'
    },
    'vintage-blush': {
      title: 'Vintage Blush Bouquet - The Flower Patch',
      desc: 'Classic dual-tone pink-tipped petals structured in a clean composition.',
      img: 'https://www.flowerpatchbyo.com/Rose%203.jpeg'
    },
    'green-tea': {
      title: 'Green Tea Bouquet - The Flower Patch',
      desc: 'Soft, organic pastel green layers offering distinctive tonal variance.',
      img: 'https://www.flowerpatchbyo.com/Rose%204.jpeg'
    },
    'sunshine-meadow': {
      title: 'Sunshine Meadow Bouquet - The Flower Patch',
      desc: 'Bright golden sunflowers, yellow spray chrysanthemums, and airy gypsophila.',
      img: 'https://www.flowerpatchbyo.com/Mixed%20Bouquet%201.jpeg'
    },
    'velvet-majesty': {
      title: 'Velvet Majesty - The Flower Patch',
      desc: 'Soft dusty-pink and blush roses intertwined with vibrant purple thistle accents.',
      img: 'https://www.flowerpatchbyo.com/Mixed%20Bouquet%205.jpeg'
    }
  };

  // Fallback to bright-yellow if item isn't found
  const selected = items[item] || items['bright-yellow'];

  // Send HTML with explicit Open Graph tags and an instant meta-refresh redirect
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>${selected.title}</title>
      <meta property="og:site_name" content="The Flower Patch" />
      <meta property="og:title" content="${selected.title}" />
      <meta property="og:description" content="${selected.desc}" />
      <meta property="og:image" content="${selected.img}" />
      <meta property="og:type" content="website" />
      <meta http-equiv="refresh" content="0;url=https://www.flowerpatchbyo.com/roses.html#${item || 'bright-yellow'}">
    </head>
    <body>
      <p>Redirecting to ${selected.title}...</p>
    </body>
    </html>
  `);
}