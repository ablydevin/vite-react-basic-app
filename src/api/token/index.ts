import Ably from "ably/promises";

export const GET = async (req:any, res:any) => {
    const client = new Ably.Rest(import.meta.env.VITE_ABLY_API_KEY);
    const tokenRequestData:Ably.Types.TokenRequest = await client.auth.createTokenRequest({ clientId: 'ably-demo' });

    console.log(`Request: ${JSON.stringify(tokenRequestData)}`)
    return res.json(tokenRequestData);
}
