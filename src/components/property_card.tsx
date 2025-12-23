import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const {
    id,
    title,
    location,
    price_per_night,
    sale_price,
    listing_type,
    rating,
    review_count,
    images,
    bedrooms,
    bathrooms,
    max_guests,
    host,
  } = property;

  // Format price with Thai Baht
  const format_price = (price: number) => {
    return new Intl.NumberFormat("th-TH").format(price);
  };

  // Get listing type badge
  const get_listing_badge = () => {
    switch (listing_type) {
      case "rent":
        return (
          <Badge className="bg-primary text-primary-foreground">ให้เช่า</Badge>
        );
      case "sale":
        return (
          <Badge className="bg-green-600 text-white">ขาย</Badge>
        );
      case "both":
        return (
          <div className="flex gap-1">
            <Badge className="bg-primary text-primary-foreground">ให้เช่า</Badge>
            <Badge className="bg-green-600 text-white">ขาย</Badge>
          </div>
        );
    }
  };

  return (
    <Link href={`/property/${id}`}>
      <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Listing Type Badge */}
          <div className="absolute top-3 left-3">
            {get_listing_badge()}
          </div>

          {/* Superhost Badge */}
          {host.is_superhost && (
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="bg-white/90 text-foreground">
                ⭐ Superhost
              </Badge>
            </div>
          )}

          {/* Favorite Button */}
          <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
            <svg
              className="w-5 h-5 text-gray-600 hover:text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <CardContent className="p-4">
          {/* Location & Rating */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-muted-foreground">{location}</span>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-primary fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-sm text-muted-foreground">
                ({review_count})
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Property Info */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
            <span>{bedrooms} ห้องนอน</span>
            <span>•</span>
            <span>{bathrooms} ห้องน้ำ</span>
            <span>•</span>
            <span>{max_guests} คน</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            {price_per_night && (
              <div>
                <span className="text-lg font-bold text-foreground">
                  ฿{format_price(price_per_night)}
                </span>
                <span className="text-sm text-muted-foreground"> / คืน</span>
              </div>
            )}
            {sale_price && (
              <div className={price_per_night ? "text-sm text-muted-foreground" : ""}>
                {price_per_night && <span className="mx-2">|</span>}
                <span className={price_per_night ? "" : "text-lg font-bold text-foreground"}>
                  ฿{format_price(sale_price)}
                </span>
                {!price_per_night && <span className="text-sm text-muted-foreground"> ขาย</span>}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
