import { Menu } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tighter">
                    DB<span className="text-accent">.</span>
                </a>
                <nav className="hidden md:flex gap-8 items-center">
                    <a href="#servicos" className="text-sm font-medium hover:text-accent transition-colors">Serviços</a>
                    <a href="#portfolio" className="text-sm font-medium hover:text-accent transition-colors">Portfólio</a>
                    <a href="#sobre" className="text-sm font-medium hover:text-accent transition-colors">Sobre</a>
                    <a href="#contato" className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
                        Solicitar Orçamento
                    </a>
                </nav>
                <button className="md:hidden p-2">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
}
