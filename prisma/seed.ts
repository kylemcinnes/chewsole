import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.orderLead.deleteMany();
  await prisma.product.deleteMany();
  await prisma.slogan.deleteMany();
  await prisma.siteSettings.deleteMany();

  // Seed Site Settings
  await prisma.siteSettings.create({
    data: {
      id: 1,
      brandName: 'ChewSole',
      primaryAccentHex: '#28e0b9',
      enableMarquee: true,
      heroVideoUrl: null,
    },
  });

  // Seed Slogans (ethical, non-demeaning alternatives)
  const slogans = [
    'Save the planet! Chew flip-flops!',
    'From beach to chew.',
    'Tired of gum that loses its chew? Not Flip-Flop Gum.',
    'The planet\'s first gum with real sole.',
    'Made in China from recycled flip-flops.',
    'From China with chew.',
    '100% recycled. 0% guilt.',
    'Sustainability never tasted so good.',
    'Chew the future.',
    'Ocean cleanup, one chew at a time.',
  ];

  for (const text of slogans) {
    await prisma.slogan.create({
      data: {
        text,
        active: true,
        weight: 1,
      },
    });
  }

  // Seed Products
  const productImages = [
    '/images/product-1.svg',
    '/images/product-2.svg',
    '/images/product-3.svg',
  ];

  const flavors = [
    'Ocean Mint',
    'Bubble Reef',
    'Lemon Tread',
    'Tropical Toe',
    'Midnight Asphalt',
  ];

  await prisma.product.create({
    data: {
      slug: 'chewsole',
      title: 'ChewSole Flip-Flop Gum',
      subtitle: 'Pre-Launch Edition',
      description:
        'The world\'s first gum made from 100% recycled flip-flops. Each piece is crafted from ocean-recovered rubber, transformed into a revolutionary chewing experience. Tired of gum that loses its chew? Not Flip-Flop Gum. From beach to chew.',
      images: JSON.stringify(productImages),
      flavors: JSON.stringify(flavors),
      price: 499, // $4.99 in cents
      active: true,
    },
  });

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

