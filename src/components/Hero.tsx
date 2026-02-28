import { ArrowRight } from "lucide-react";
import { AuroraText } from "./ui/aurora-text";
import { ShimmerButton } from "./ui/shimmer-button";
import { InteractiveGridPattern } from "./ui/interactive-grid-pattern";
import { BlurFade } from "./ui/blur-fade";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <InteractiveGridPattern className="opacity-30 mask-image:linear-gradient(to_bottom,white,transparent)" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <BlurFade delay={0.25} inView>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto leading-tight mb-8">
                        Transformo seu negócio local em uma <AuroraText>vitrine digital de alto nível</AuroraText>.
                    </h1>
                </BlurFade>

                <BlurFade delay={0.5} inView>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
                        Sites de alta conversão para barbeiros, manicures e estabelecimentos premium.
                    </p>
                </BlurFade>

                <BlurFade delay={0.75} inView>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#contato">
                            <ShimmerButton className="shadow-2xl px-8 font-semibold w-full sm:w-auto h-14 text-base">
                                <span className="flex items-center gap-2">
                                    Quero um Orçamento
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </ShimmerButton>
                        </a>
                        <a href="#portfolio" className="px-8 py-4 rounded-full border border-white/20 font-semibold hover:bg-white/5 transition-colors w-full sm:w-auto text-base">
                            Ver Projetos
                        </a>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
