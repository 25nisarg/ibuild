import SectionHeader from "@/components/common/section-header";
import { ArrowRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/products/product-card";


const featuredProducts = [
    {
        id: 1,
        name: "Demo",
        description: "Demo Product",
        link: "www.demolink.com",
        tags: ["ASI", "ML", "TOOL"],
        votes: 600,
        isFeatured: true,
    },
    {
        id: 2,
        name: "Demo 2",
        description: "Demo Product 2",
        link: "www.demolink.com",
        tags: ["ASI", "ML", "TOOL"],
        votes: 600,
        isFeatured: true,
    },
]
export default function FeaturedProducts() {
    return (
        <section className="py-20 bg-muted/20">
            <div className="wrapper">
                <div className="flex items-center justify-between mb-8">
                    <SectionHeader title="Featured Today" icon={StarIcon} description="Top picks from our community this week" />
                    <Button variant={"outline"} className="hidden sm:flex" asChild>
                        <Link href={"/explore"}>View All <ArrowRightIcon className="size-4" /></Link>
                    </Button>
                </div>
                <div className="grid-wrapper">
                    {featuredProducts.map((product)=><ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        </section>
    );
}