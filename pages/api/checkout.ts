import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-10-29.clover",
});

// Define proper type for PRODUCTS
const PRODUCTS: Record<string, { name: string; price: number }> = {
  prod_1: { name: "Product 1", price: 1999 },
  prod_2: { name: "Product 2", price: 2999 },
  prod_3: { name: "Product 3", price: 3999 },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { productId } = req.body as { productId: string }; // type productId as string
  const product = PRODUCTS[productId]; // TypeScript now knows productId is a string

  if (!product) return res.status(400).json({ error: "Invalid product" });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: product.name },
          unit_amount: product.price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
  });

  res.status(200).json({ url: session.url });
}
