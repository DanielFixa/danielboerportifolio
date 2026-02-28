import { BlurFade } from "./ui/blur-fade";

export function About() {
    return (
        <section id="sobre" className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <BlurFade delay={0.1} inView>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Sobre Mim</h2>
                </BlurFade>

                <div className="max-w-3xl">
                    <BlurFade delay={0.2} inView>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
                            Sou estudante de Ciência da Computação, apaixonado por tecnologia e focado em entregar soluções visuais de alto desempenho.
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.3} inView>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                            Meu objetivo é transformar a presença online de negócios locais através da criação de sites modernos, performáticos e, acima de tudo, focados em conversão.
                        </p>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}
