import SearchBar from "@/components/search_bar";
import PropertyCard from "@/components/property_card";
import { Property } from "@/types/property";
import properties_data from "../../mock_data/properties.json";

export default function Home() {
  const properties = properties_data as Property[];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ค้นหา<span className="text-primary">ที่พัก</span>ในฝันของคุณ
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              แพลตฟอร์มซื้อขายและเช่าที่พักที่ดีที่สุดในประเทศไทย
              ครอบคลุมทุกทำเลทั่วประเทศ
            </p>
            <SearchBar />
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1,000+</div>
              <div className="text-sm text-muted-foreground">ที่พักให้เลือก</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">เจ้าของที่พัก</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">ผู้ใช้งาน</div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* Properties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                ที่พักแนะนำ
              </h2>
              <p className="text-muted-foreground">
                ที่พักยอดนิยมที่คัดสรรมาเพื่อคุณ
              </p>
            </div>
            <button className="text-sm font-medium text-primary hover:underline">
              ดูทั้งหมด →
            </button>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            มีที่พักอยากลงประกาศ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            เข้าถึงผู้เช่าและผู้ซื้อหลายพันคนที่กำลังมองหาที่พักในฝัน
            ลงประกาศฟรีวันนี้!
          </p>
          <button className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            เริ่มลงประกาศ
          </button>
        </div>
      </section>
    </div>
  );
}
