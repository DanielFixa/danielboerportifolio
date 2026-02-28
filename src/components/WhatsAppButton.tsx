import { MessageSquare } from "lucide-react";

export function WhatsAppButton() {
    const whatsappNumber = "5548984040521";
    const message = "Olá, vi seu portfólio e gostaria de um orçamento para um site.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:bg-green-400 transition-all z-50 animate-bounce"
        >
            <MessageSquare className="w-7 h-7" />
        </a>
    );
}
