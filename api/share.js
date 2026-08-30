export default function handler(req, res) {
  const { item } = req.query;

  const items = {
    // Roses Collection
    'bright-yellow': {
      title: 'Bright Yellow Bouquet - The Flower Patch',
      desc: 'Radiant sunshine blooms carefully bundled to provide bright, energetic warmth.',
      img: 'https://www.flowerpatchbyo.com/Rose%201.jpeg',
      page: 'roses.html'
    },
    'lavender-dream': {
      title: 'Lavender Dream Bouquet - The Flower Patch',
      desc: 'Unique enchantment pastel tones thoughtfully balanced to deliver modern luxury.',
      img: 'https://www.flowerpatchbyo.com/Rose%202.jpeg',
      page: 'roses.html'
    },
    'vintage-blush': {
      title: 'Vintage Blush Bouquet - The Flower Patch',
      desc: 'Classic dual-tone pink-tipped petals structured in a clean composition.',
      img: 'https://www.flowerpatchbyo.com/Rose%203.jpeg',
      page: 'roses.html'
    },
    'green-tea': {
      title: 'Green Tea Bouquet - The Flower Patch',
      desc: 'Soft, organic pastel green layers offering distinctive tonal variance.',
      img: 'https://www.flowerpatchbyo.com/Rose%204.jpeg',
      page: 'roses.html'
    },
    'sunshine-meadow': {
      title: 'Sunshine Meadow Bouquet - The Flower Patch',
      desc: 'Bright golden sunflowers, yellow spray chrysanthemums, and airy gypsophila.',
      img: 'https://www.flowerpatchbyo.com/Mixed%20Bouquet%201.jpeg',
      page: 'roses.html'
    },
    'velvet-majesty': {
      title: 'Velvet Majesty - The Flower Patch',
      desc: 'Soft dusty-pink and blush roses intertwined with vibrant purple thistle accents.',
      img: 'https://www.flowerpatchbyo.com/Mixed%20Bouquet%205.jpeg',
      page: 'roses.html'
    },

    // Mixed Bouquets Collection
    'pastel-harmony': {
      title: 'Pastel Harmony Bouquet - The Flower Patch',
      desc: 'Soft blush carnations, cream lilies, and pale peach spray roses delicately combined.',
      img: 'https://www.flowerpatchbyo.com/Mixed%20Bouquet%202.jpeg',
      page: 'mixedbouquets.html'
    },
    'exotic-bliss': {
      title: 'Exotic Bliss Bouquet - The Flower Patch',
      desc: 'Regal proteas, red hypericum berries, and vibrant gerberas balanced with lush tropical greens.',
      img: 'https://www.flowerpatchbyo.com/Mixed%20Bouquet%203.jpeg',
      page: 'mixedbouquets.html'
    },
    'garden-romance': {
      title: 'Garden Romance Bouquet - The Flower Patch',
      desc: 'Lush mixed garden roses bundled alongside deep purple statice and white alstroemeria.',
      img: 'https://www.flowerpatchbyo.com/Mixed%20Bouquet%204.jpeg',
      page: 'mixedbouquets.html'
    },
    'twilight-charm': {
      title: 'Pure Serenity Arrangement - The Flower Patch',
      desc: 'Pristine white gerberas, chrysanthemums, and fresh green lily buds woven with delicate baby’s breath.',
      img: 'https://www.flowerpatchbyo.com/Mixed%20Bouquet%206.jpeg',
      page: 'mixedbouquets.html'
    }
  };

  const selected = items[item] || items['pastel-harmony'];
  const redirectPage = selected.page || 'mixedbouquets.html';

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
      <meta http-equiv="refresh" content="0;url=https://www.flowerpatchbyo.com/${redirectPage}#${item}">
    </head>
    <body>
      <p>Redirecting to ${selected.title}...</p>
    </body>
    </html>
  `);
}