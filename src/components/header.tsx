import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg
            className="h-8 w-8 text-primary"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="text-xl font-bold text-primary">Hotel</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            หน้าแรก
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            เช่าที่พัก
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            ซื้อที่พัก
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            ลงประกาศ
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            เข้าสู่ระบบ
          </button>
          <button className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            สมัครสมาชิก
          </button>
        </div>
      </div>
    </header>
  );
}
