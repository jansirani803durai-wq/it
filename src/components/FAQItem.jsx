import{ChevronDown}from'lucide-react';
// Question 5: Reusable FAQItem
export default function FAQItem({item,isOpen,onToggle}){return <article className="glass overflow-hidden rounded-2xl"><button onClick={onToggle} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left" aria-expanded={isOpen}><b className="text-white sm:text-lg">{item.question}</b><ChevronDown className={`shrink-0 text-cyan-300 transition ${isOpen?'rotate-180':''}`}/></button>{isOpen&&<p className="border-t border-white/10 px-5 py-5 leading-7 text-slate-300">{item.answer}</p>}</article>}
