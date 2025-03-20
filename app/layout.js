import Link from "next/link";
import "./globals.css";
import AuthSession from "@/components/AuthSession";
import Signin from "@/components/Signin";

export const metadata = {
  title: "PeachtArt Hub",
  description: "음악계 버츄얼 동맹 피치타르트",
  openGraph: {
    title: "PeachtArt Hub",
    description: "음악계 버츄얼 동맹 피치타르트",
    siteName: "PeachtArt Hub",
    locale: 'ko_KR',
    type: 'website',
    url: process.env.NEXT_PUBLIC_DOMAIN,
    images: {
      url: "/peachtart.png",
    },
  },
  twitter: {
    card: 'summary', 
    title: "PeachtArt Hub",
    description: "음악계 버츄얼 동맹 피치타르트",
    images: {
      url: "/peachtart.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <AuthSession>
        <div style={{width: '100vw', height: '3rem', background: 'var(--background)', position: 'fixed', left: 0, top: 0, zIndex: 999, boxShadow: '3px 3px 5px #00000022',display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', gap: '2rem', marginLeft: '2rem'}}>
            <div><b><span><Link href="/">PeachtArt Hub</Link></span></b></div>
            <div className="desktop-menu"><Link href="/about" style={{color: 'var(--foreground)'}}>소개</Link></div>
            <div className="desktop-menu"><Link href="/live" style={{color: 'var(--foreground)'}}>라이브</Link></div>
            <div className="desktop-menu"><Link href="/video" style={{color: 'var(--foreground)'}}>영상</Link></div>
          </div>
          <div style={{display: 'flex', gap: '2rem', marginRight: '2rem', alignItems: 'center'}}>
            <Signin />
            <div className="mobile-menu">
              <div className="emoji">💖</div>
              <div className="mobile-menu menu-toggle">
                <div><Link href="/about" style={{color: 'var(--foreground)'}}>소개</Link></div>
                <div><Link href="/live" style={{color: 'var(--foreground)'}}>라이브</Link></div>
                <div><Link href="/video" style={{color: 'var(--foreground)'}}>영상</Link></div>
              </div>
            </div>
          </div>
        </div>
        {children}
        </AuthSession>
      </body>
    </html>
  );
}
