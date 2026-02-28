import { BlurFade } from "./ui/blur-fade";

export function Portfolio() {
    const projects = [
        {
            title: "Salão de Beleza Neon",
            description: "Design vibrante e envolvente para salões modernos.",
            image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
            link: "https://beauty-salon-neon-five.vercel.app/",
        },
        {
            title: "Barber's Top",
            description: "Vitrine digital impactante para barbearias premium.",
            image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
            link: "https://barber-s-top.vercel.app/",
        },
        {
            title: "Barbearia Alpha",
            description: "Layout limpo e direto voltado a conversão de agendamentos.",
            image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800",
            link: "https://barberia-site-alpha.vercel.app/",
        },
        {
            title: "Coffee Shop Beta",
            description: "Landing page charmosa e interativa para cafeterias artesanais.",
            image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
            link: "https://coffee-website-beta-blue.vercel.app/",
        },
        {
            title: "Roma Barber",
            description: "Elegância e dark mode para destacar ambientes masculinos de alto padrão.",
            image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
            link: "https://barbershop-landing-page-three.vercel.app/",
        },
        {
            title: "Wedding Match Maker",
            description: "Plataforma delicada e sofisticada para o ecossistema de casamentos.",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
            link: "https://wedding-match-maker.vercel.app/",
        },
        {
            title: "Barbearia Theta",
            description: "Estrutura focada em apresentar serviços locais com altíssima clareza.",
            image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800",
            link: "https://barbearia-landing-theta.vercel.app/",
        }
    ];

    return (
        <section id="portfolio" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <BlurFade delay={0.1} inView>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Projetos Recentes</h2>
                        <p className="text-white/60 max-w-2xl mx-auto text-lg">
                            Veja algumas das vitrines digitais criadas para clientes que já estão dominando as vendas online.
                        </p>
                    </div>
                </BlurFade>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-surface flex flex-col h-full transform transition-transform hover:-translate-y-2 duration-300">
                                <div className="relative h-64 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-white/60 mb-6 flex-grow">{project.description}</p>

                                    <a href={project.link} className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors w-max">
                                        Ver Projeto <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
