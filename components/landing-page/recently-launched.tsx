import SectionHeader from "@/components/common/section-header";
import { CalendarIcon, RocketIcon } from "lucide-react";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";

const recentlyLaunchedProducts = [
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

export default function RecentlyLaunchedProducts() {
    return (
        <section className="py-20">
            <div className="wrapper space-y-12">
                <SectionHeader title="Recently Launched" icon={RocketIcon} description="The mot recently launched product on our platform" />
                {recentlyLaunchedProducts.length>0
                ?
                (<div className="grid-wrapper">
                    {recentlyLaunchedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
                </div>)
                 :
                 (<EmptyState message="No Products launched in last week." icon={CalendarIcon} />)
                 }
                
            </div>
        </section>
    );
}