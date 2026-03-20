export default function NavDot({ sectionId, isActive }) {
  return (
    <a
      href={`#${sectionId}`}
      className={`h-3 w-3 rounded-full border transition ${
        isActive
          ? "border-[#B6BBC4] bg-[#B6BBC4]"
          : "border-[#B6BBC4]/60 bg-transparent hover:bg-[#B6BBC4]/40"
      }`}
    />
  )
}