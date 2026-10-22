// Server-side only: the UltraMsg token is a secret and must never reach the browser.

type UltraMsgResponse = { sent?: string; message?: string; id?: number; error?: unknown };

/**
 * Sends a WhatsApp message to ULTRAMSG_TO through the UltraMsg instance.
 * Returns the UltraMsg message id, or null when UltraMsg isn't configured.
 */
export async function sendWhatsApp(body: string) {
  const instanceId = process.env.ULTRAMSG_INSTANCE_ID;
  const token = process.env.ULTRAMSG_TOKEN;
  const to = process.env.ULTRAMSG_TO;
  if (!instanceId || !token || !to) return null;

  const res = await fetch(
    `https://api.ultramsg.com/${instanceId}/messages/chat`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ token, to, body }),
    },
  );
  const json = (await res.json().catch(() => ({}))) as UltraMsgResponse;

  if (!res.ok || json.sent !== "true") {
    throw new Error(
      `UltraMsg ${res.status}: ${JSON.stringify(json.error ?? json.message ?? json)}`,
    );
  }
  return json.id ?? null;
}
