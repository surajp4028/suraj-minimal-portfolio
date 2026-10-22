import { Marquee } from "@/components/marquee";
import { techStack } from "@/components/tech-icons";
import { skillGroups } from "@/data/profile";

export function SkillsMarquee() {
  return (
    <>
      <Marquee duration={45}>
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="mx-4 flex h-44 w-60 flex-col justify-between gap-4 rounded-xl p-4 shadow-[var(--shadow-aceternity)] transition duration-300 hover:shadow-md"
          >
            <p className="text-sm text-neutral-700 dark:text-neutral-200">{group.description}</p>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
              {group.title}
            </p>
          </div>
        ))}
      </Marquee>
      <Marquee duration={60} reverse className="-mt-2">
        {techStack.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className="mx-2 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-neutral-600 shadow-[var(--shadow-aceternity)] dark:text-neutral-300"
          >
            <Icon style={{ color }} className="size-3.5" aria-hidden />
            {name}
          </div>
        ))}
      </Marquee>
    </>
  );
}
