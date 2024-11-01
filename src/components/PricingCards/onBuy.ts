"use server";

import { MercadoPagoConfig, PreApproval } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN as string,
});
interface Pack {
  name: string;
  price: number;
  description: string;
  features: string[];
}

export async function onSubscribe(pack: Pack, usdPrice: number) {
  try {
    const dolarTransform = pack.price * (usdPrice || 1);

    const subscription = await new PreApproval(client).create({
      body: {
        reason: `${pack.name} Subscription`,
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: dolarTransform,
          currency_id: "ARS",
          start_date: new Date().toISOString(),
          end_date: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          ).toISOString(),
        },
        back_url:
          "https://a737-2802-8010-4905-5201-444a-36c4-3398-8b1a.ngrok-free.app",
        payer_email: "test_user_388127678@testuser.com",
      },
    });

    return subscription.init_point;
  } catch (error: any) {
    console.error("Error creating subscription:", error);
    throw new Error(`Subscription failed: ${error.message}`);
  }
}
