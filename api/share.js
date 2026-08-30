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
    },

    // Vase Arrangements Collection
    'pastel-meadow-vase': {
      title: 'Pastel Meadow Vase - The Flower Patch',
      desc: 'Bright magenta chrysanthemums, peach and cream daisies, soft pink filler sprays set in a classic glass vase.',
      img: 'https://www.flowerpatchbyo.com/Vase%201.jpeg',
      page: 'vasarrangements.html'
    },
    'azure-mist-display': {
      title: 'Azure Mist Display - The Flower Patch',
      desc: 'White lilies, soft cream blooms, and deep green leaves framed by a cloud of indigo and white baby’s breath.',
      img: 'https://www.flowerpatchbyo.com/Vase%202.jpeg',
      page: 'vasarrangements.html'
    },
    'sunset-harvest-vase': {
      title: 'Sunset Harvest Vase - The Flower Patch',
      desc: 'Massive orange gerbera daisy centerpiece paired with soft yellow carnations and crimson hypericum berries.',
      img: 'https://www.flowerpatchbyo.com/Vase%203.jpeg',
      page: 'vasarrangements.html'
    },
    'majestic-white-box': {
      title: 'Majestic White Hatbox - The Flower Patch',
      desc: 'Ultra-premium display of white gerberas, dense chrysanthemums, and green lilies in a luxury hatbox.',
      img: 'https://www.flowerpatchbyo.com/Vase%204.jpeg',
      page: 'vasarrangements.html'
    },
    'orchid-tulip-delight': {
      title: 'Orchid & Tulip Delight - The Flower Patch',
      desc: 'Deep purple orchids, vivid orange tulips, vibrant hot pink gerberas in a flared glass vase.',
      img: 'https://www.flowerpatchbyo.com/Vase%205.jpeg',
      page: 'vasarrangements.html'
    },
    'golden-radiance-vase': {
      title: 'Golden Radiance Vase - The Flower Patch',
      desc: 'Golden sunflowers, rich red velvet roses, delicate purple statice in a tall cylinder glass vase.',
      img: 'https://www.flowerpatchbyo.com/Vase%206.jpeg',
      page: 'vasarrangements.html'
    },

    // Special Arrangements Collection
    'majestic-tropical-oasis': {
      title: 'Majestic Tropical Oasis - The Flower Patch',
      desc: 'Grand-tier masterpiece combining towering orange birds of paradise, soft pink gerberas, budding lilies, and anthuriums.',
      img: 'https://www.flowerpatchbyo.com/Special%20Category%202.jpeg',
      page: 'special.html'
    },
    'crimson-safari-tower': {
      title: 'Crimson Safari Tower - The Flower Patch',
      desc: 'Fiery vertical presentation layering orange birds of paradise, deep crimson gerberas, and magenta anthuriums.',
      img: 'https://www.flowerpatchbyo.com/Special%20Category%201.jpeg',
      page: 'special.html'
    },
    'vibrant-sunset-bloom': {
      title: 'Vibrant Sunset Bloom - The Flower Patch',
      desc: 'Towering triangular arrangement featuring orange roses, birds of paradise, red gerberas, and pincushion proteas.',
      img: 'https://www.flowerpatchbyo.com/SA3.jpeg',
      page: 'special.html'
    }
  };

  const selected = items[item] || items['majestic-tropical-oasis'];
  const redirectPage = selected.page || 'special.html';

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