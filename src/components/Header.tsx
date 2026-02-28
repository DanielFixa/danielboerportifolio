import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

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
                <button
                    className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-white/10 shadow-2xl animate-in slide-in-from-top-2 flex flex-col">
                    <div className="flex flex-col px-6 py-6 gap-6">
                        <a href="#servicos" onClick={toggleMobileMenu} className="text-lg font-medium text-white/80 hover:text-white transition-colors">Serviços</a>
                        <a href="#portfolio" onClick={toggleMobileMenu} className="text-lg font-medium text-white/80 hover:text-white transition-colors">Portfólio</a>
                        <a href="#sobre" onClick={toggleMobileMenu} className="text-lg font-medium text-white/80 hover:text-white transition-colors">Sobre</a>
                        <a href="#contato" onClick={toggleMobileMenu} className="w-full text-center px-6 py-3 mt-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors">
                            Solicitar Orçamento
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
