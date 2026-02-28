import { RainbowButton } from "./ui/rainbow-button";
import { BlurFade } from "./ui/blur-fade";

export function Contact() {
    return (
        <section id="contato" className="py-24 bg-surface border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <BlurFade delay={0.1} inView>
                    <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Pronto para dar o próximo passo?</h2>
                        <p className="text-white/60 text-lg mb-10">
                            Pare de perder clientes porque o seu negócio não passa confiança na internet.
                            Mande uma mensagem agora e vamos conversar sobre como posso te ajudar.
                        </p>
                        <a href="https://wa.me/5548984040521?text=Olá, quero um orçamento para um site!" target="_blank" rel="noopener noreferrer">
                            <RainbowButton className="h-16 px-10 text-lg w-full sm:w-auto shadow-xl">
                                Falar no WhatsApp
                            </RainbowButton>
                        </a>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
