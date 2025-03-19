import Link from "next/link";
import "./globals.css";
import AuthSession from "@/components/AuthSession";
import Signin from "@/components/Signin";

export const metadata = {
  title: "PeachtArt 피치타르트",
  description: "정말 느슨한 음악계 버츄얼 동맹",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <AuthSession>
        <div style={{width: '100vw', height: '3rem', background: 'var(--background)', position: 'fixed', left: 0, top: 0, zIndex: 999, boxShadow: '3px 3px 5px #00000022',display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', gap: '2rem', marginLeft: '2rem'}}>
            <div><b><span><Link href="/">PeachtArt</Link></span></b></div>
            <div><Link href="/about" style={{color: 'var(--foreground)'}}>소개</Link></div>
            <div><Link href="/live" style={{color: 'var(--foreground)'}}>라이브</Link></div>
            <div><Link href="/video" style={{color: 'var(--foreground)'}}>영상</Link></div>
          </div>
          <div style={{display: 'flex', gap: '2rem', marginRight: '2rem'}}>
            <Signin />
          </div>
        </div>
        {children}
        </AuthSession>
      </body>
    </html>
  );
}
