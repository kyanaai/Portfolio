import SkillBadge from "./SkillBadge"

export default function SkillCard({ title, skills }) {
  return (
    <div className="rounded-2xl border border-[#B6BBC4]/20 bg-[#31304D]/60 p-8 shadow-lg">
      <h3 className="mb-6 text-2xl font-semibold text-[#F0ECE5]">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </div>
  )
}