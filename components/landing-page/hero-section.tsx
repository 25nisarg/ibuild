import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-be from-background via-background to-muted/20">
            <div className="wrapper">
            <Badge>
                <span>Join thousands of creators sharing their work</span>
            </Badge>
            <h1>Share What You&apos;ve Build, Disover What&apos;s Launching</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis asperiores illum, quas vero quos dolorum iste excepturi, ducimus architecto necessitatibus velit, dolor provident cumque libero facilis culpa possimus! Facilis, nam. Consequatur at architecto exercitationem minus, deserunt in optio placeat vero ratione? Ab quibusdam facere voluptatibus commodi dignissimos non tempora repellat.</p>
            <Button>Share Your Project</Button>
            <Button>Explore Projects</Button>
            </div>
        </section>
    )
}