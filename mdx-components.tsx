import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-white mb-4 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium text-white mb-3 mt-6">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-white/70 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-white/70 mb-4 space-y-2 ml-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2 ml-4">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-white underline underline-offset-4 hover:text-white/80 transition-colors"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-white/20 pl-4 my-4 text-white/60 italic">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-white/10 my-8" />,
    ...components,
  }
}
