// Edge-runtime-compatible auth helpers for the /playbook gate.
// We never store the plaintext password in cookies — only its derived hash,
// so the cookie can't be forged without knowing PLAYBOOK_PASSWORD.

const SALT = "gambitho-playbook-2026";

export const PLAYBOOK_COOKIE = "playbook-auth";

export async function deriveToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(password + "::" + SALT);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function expectedToken(): Promise<string | null> {
  const pw = process.env.PLAYBOOK_PASSWORD;
  if (!pw) return null;
  return deriveToken(pw);
}
