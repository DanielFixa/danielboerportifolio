import { MagicCard } from "./ui/magic-card";
import { BlurFade } from "./ui/blur-fade";

export function Services() {
    const services = [
        {
            title: "Landing Pages",
            description: "Páginas de alta conversão focadas em transformar visitantes em clientes reais pro seu negócio.",
        },
        {
            title: "SEO Local",
            description: "Seja encontrado no Google por clientes que estão na sua região procurando pelo seu serviço.",
        },
        {
            title: "Otimização de Conversão",
            description: "Design estratégico pensado em cada clique para maximizar o número de agendamentos e vendas.",
        }
    ];

    return (
        <section id="servicos" className="py-24 bg-surface/50 border-y border-white/5 relative">
            <div className="container mx-auto px-6">
                <BlurFade delay={0.1} inView>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 pb-2">Especialidades</h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">Tudo que você precisa para dominar o digital e trazer resultados reais.</p>
                    </div>
                </BlurFade>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                            <MagicCard
                                className="cursor-pointer flex-col items-start p-8 shadow-2xl h-full border border-white/10"
                                gradientColor="#262626"
                                gradientOpacity={0.4}
                            >
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                                <p className="text-white/60 leading-relaxed text-base">{service.description}</p>
                            </MagicCard>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
