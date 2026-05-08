import Image from "next/image";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import { deriveToken, PLAYBOOK_COOKIE } from "@/lib/playbook-auth";
import PasswordInput from "./PasswordInput";

export const metadata: Metadata = {
  title: "Acceso · Playbook · Gambitho Labs",
  robots: { index: false, follow: false, nocache: true },
};

async function login(formData: FormData) {
  "use server";

  const password = formData.get("password");
  const expected = process.env.PLAYBOOK_PASSWORD;

  if (typeof password !== "string" || !expected || password !== expected) {
    redirect("/playbook/login?error=1");
  }

  const token = await deriveToken(password);
  const jar = await cookies();
  jar.set(PLAYBOOK_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  redirect("/playbook");
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="login-root">
      <form action={login} className="login-card">
        <Image
          src="/logo-circle.png"
          alt="Gambitho Labs"
          width={72}
          height={72}
          priority
          className="login-mark"
        />
        <p className="login-eyebrow">Documento interno · v1.0</p>
        <h1 className="login-title">Playbook</h1>
        <p className="login-sub">
          Acceso restringido al equipo comercial de Gambitho Labs.
        </p>

        <label className="login-field">
          <span>Contraseña</span>
          <PasswordInput />
        </label>

        {error ? (
          <p className="login-error">Contraseña incorrecta. Intenta de nuevo.</p>
        ) : null}

        <button type="submit" className="login-btn">
          Entrar
        </button>

        <p className="login-foot">
          Si no tienes la contraseña, escribe a{" "}
          <a href="mailto:contacto@gambitholabs.com">contacto@gambitholabs.com</a>.
        </p>
      </form>

      <style dangerouslySetInnerHTML={{ __html: LOGIN_CSS }} />
    </main>
  );
}

const LOGIN_CSS = `
  .login-root {
    min-height: 100vh;
    background:
      radial-gradient(circle at 50% 30%, rgba(58,123,255,0.18), transparent 55%),
      linear-gradient(180deg, #07090d 0%, #0b0f15 100%);
    display: grid;
    place-items: center;
    padding: 24px;
    font-family: var(--font-sans), system-ui, sans-serif;
  }
  .login-card {
    width: 100%;
    max-width: 380px;
    background: #11161f;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 18px;
    padding: 40px 32px 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 24px 48px -16px rgba(0,0,0,0.7), 0 0 80px rgba(58,123,255,0.06);
  }
  .login-mark {
    width: 72px;
    height: 72px;
    object-fit: contain;
    margin-bottom: 18px;
    filter: drop-shadow(0 8px 20px rgba(0,0,0,0.4));
  }
  .login-eyebrow {
    font-family: var(--font-mono), monospace;
    font-size: 11px;
    color: #3a7bff;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    margin: 0 0 6px;
  }
  .login-title {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0 0 10px;
    color: #f3f6fb;
  }
  .login-sub {
    font-size: 14px;
    line-height: 1.55;
    color: #b6c0cf;
    margin: 0 0 28px;
  }
  .login-field {
    width: 100%;
    text-align: left;
    margin-bottom: 16px;
  }
  .login-field span {
    display: block;
    font-family: var(--font-mono), monospace;
    font-size: 11px;
    color: #7d8898;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 8px;
  }
  .pw-wrap { position: relative; width: 100%; }
  .login-field input {
    width: 100%;
    padding: 14px 48px 14px 16px;
    background: #07090d;
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 10px;
    color: #f3f6fb;
    font-size: 15px;
    font-family: inherit;
    outline: none;
    transition: all 0.18s;
    box-sizing: border-box;
  }
  .login-field input::placeholder { color: #4d5664; }
  .login-field input:focus {
    border-color: #3a7bff;
    box-shadow: 0 0 0 1px #3a7bff, 0 0 12px rgba(58,123,255,0.2);
  }
  .pw-toggle {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    background: transparent;
    border: 0;
    border-radius: 8px;
    color: #7d8898;
    cursor: pointer;
    transition: color 0.18s, background 0.18s;
    padding: 0;
  }
  .pw-toggle:hover { color: #f3f6fb; background: rgba(255,255,255,0.05); }
  .pw-toggle:focus-visible {
    color: #3a7bff;
    box-shadow: 0 0 0 2px #3a7bff;
  }
  .login-error {
    font-size: 13px;
    color: #ff5c6c;
    margin: 0 0 14px;
    text-align: left;
    width: 100%;
  }
  .login-btn {
    width: 100%;
    padding: 14px 22px;
    background: #3a7bff;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.18s;
    margin-bottom: 22px;
  }
  .login-btn:hover {
    background: #5a92ff;
    transform: translateY(-1px);
  }
  .login-foot {
    font-size: 12px;
    color: #7d8898;
    margin: 0;
  }
  .login-foot a {
    color: #3a7bff;
    text-decoration: none;
    border-bottom: 1px solid rgba(58,123,255,0.4);
  }
`;
