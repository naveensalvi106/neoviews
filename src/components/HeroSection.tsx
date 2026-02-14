import { ArrowRight, ArrowDown } from "lucide-react";
import heroChar from "@/assets/hero-character.png";
import thumb1 from "@/assets/thumb-1.png";
import thumb2 from "@/assets/thumb-2.png";
import thumb3 from "@/assets/thumb-3.png";
import thumb4 from "@/assets/thumb-4.png";
import thumb5 from "@/assets/thumb-5.png";
import thumb6 from "@/assets/thumb-6.png";
import thumb7 from "@/assets/thumb-7.png";
import thumb8 from "@/assets/thumb-8.png";
import thumb11 from "@/assets/thumb-11.png";
import thumb12 from "@/assets/thumb-12.png";
import thumb13 from "@/assets/thumb-13.png";
import thumb14 from "@/assets/thumb-14.png";

const trustedBy = [
  { name: "Eternal Passenger", subs: "703K Subscribers" },
  { name: "TFC Basketball", subs: "14.2K Subscribers" },
  { name: "TFC Stadiums", subs: "264K Subscribers" },
  { name: "Razvan Paraschiv", subs: "57K Subscribers" },
  { name: "GEN", subs: "617K Subscribers" },
  { name: "Spacedust", subs: "69K Subscribers" },
  { name: "JoBlo Originals", subs: "944K Subscribers" },
  { name: "Hip-Hop Daily", subs: "1.46M Subscribers" },
  { name: "Make Money Matt", subs: "875K Subscribers" },
];

const topRow = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8];
const bottomRow = [thumb11, thumb12, thumb13, thumb14, thumb1, thumb2, thumb3, thumb4];

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-32 pb-0 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-foreground">
          Get Unlimited YouTube Thumbnails
          <br />
          That Actually Get Clicks
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Join 62+ successful YouTubers who've boosted their CTR by up to 6.8% with our psychology-based,
          unlimited thumbnails — all under one simple monthly subscription.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Start Now
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View Portfolio
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Trusted By Marquee */}
      <div className="mt-10 text-center">
        <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase mb-4">Trusted by:</p>
        <div className="overflow-hidden">
          <div className="flex marquee whitespace-nowrap">
            {[...trustedBy, ...trustedBy].map((client, i) => (
              <div key={i} className="inline-flex items-center gap-2.5 mx-5 shrink-0">
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                  {client.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">{client.name}</p>
                  <p className="text-xs text-muted-foreground">{client.subs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnail Carousel */}
      <div className="mt-8 relative">
        <div className="overflow-hidden rounded-3xl mx-4 md:mx-12 lg:mx-20 bg-card/50 backdrop-blur-sm border border-border p-4 md:p-6">
          <div className="overflow-hidden">
            <div className="flex gap-4 thumbnail-carousel">
              {[...topRow, ...topRow].map((thumb, i) => (
                <img
                  key={i}
                  src={thumb}
                  alt="YouTube thumbnail"
                  className="h-36 md:h-44 rounded-xl object-cover shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
