import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
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
            <p className="text-sm text-muted-foreground">
              แพลตฟอร์มซื้อขายและเช่าที่พักที่ดีที่สุดในประเทศไทย
            </p>
          </div>

          {/* Links - เกี่ยวกับเรา */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">เกี่ยวกับเรา</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  เกี่ยวกับ Hotel
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ร่วมงานกับเรา
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ข่าวสาร
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - บริการ */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">บริการ</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  เช่าที่พัก
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ซื้อที่พัก
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ลงประกาศ
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - ช่วยเหลือ */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">ช่วยเหลือ</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ศูนย์ช่วยเหลือ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ติดต่อเรา
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  นโยบายความเป็นส่วนตัว
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Hotel. สงวนลิขสิทธิ์ทั้งหมด
          </p>
        </div>
      </div>
    </footer>
  );
}
