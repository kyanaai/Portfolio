export default function OutlineButton({ href, children, external = false }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="rounded-md border border-[#B6BBC4] px-5 py-2.5 text-sm font-medium text-[#F0ECE5] transition hover:bg-[#B6BBC4] hover:text-[#161A30]"
    >
      {children}
    </a>
  )
}