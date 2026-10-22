import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiWordpress,
  SiShopify,
  SiFigma,
  SiGithub,
  SiRazorpay,
  SiExpress,
  SiGit,
  SiPostman,
  SiJira,
  SiWoocommerce,
  SiJsonwebtokens,
  SiElementor,
  SiGoogletagmanager,
  SiMeta,
  SiShadcnui,
  SiBetterauth,
  SiThreedotjs,
  SiResend,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaAws } from "react-icons/fa6";
import type { IconType } from "react-icons";

// Adobe app logos aren't in react-icons, so draw the familiar rounded-square
// badge with the app's two-letter code in its brand colours.
const adobeBadge = (letters: string, fg: string, bg: string): IconType => {
  const Badge: IconType = (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <rect x="1" y="2" width="22" height="20" rx="5" fill={bg} />
      <rect x="1.75" y="2.75" width="20.5" height="18.5" rx="4.3" fill="none" stroke={fg} strokeWidth="1.2" />
      <text
        x="12"
        y="15.6"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="9.5"
        fill={fg}
      >
        {letters}
      </text>
    </svg>
  );
  return Badge;
};
const PhotoshopIcon = adobeBadge("Ps", "#31A8FF", "#001E36");
const IllustratorIcon = adobeBadge("Ai", "#FF9A00", "#330000");
const AfterEffectsIcon = adobeBadge("Ae", "#9999FF", "#00005B");
const XdIcon = adobeBadge("Xd", "#FF61F6", "#470137");
const PremiereIcon = adobeBadge("Pr", "#9999FF", "#00005B");

// Aceternity UI has no icon in react-icons; a simple "A" mark in its spirit.
const AceternityIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...props}>
    <path d="M4 20 12 4l8 16" />
    <path d="M7.5 13.5h9" />
  </svg>
);

export type Tech = { name: string; icon: IconType; color: string };

// `color` is the brand colour; "currentColor" is used for monochrome marks so
// they adapt to light and dark mode.
export const techStack: Tech[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Aceternity UI", icon: AceternityIcon, color: "#6366F1" },
  { name: "shadcn/ui", icon: SiShadcnui, color: "currentColor" },
  { name: "Better Auth", icon: SiBetterauth, color: "currentColor" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#663399" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Java", icon: DiJava, color: "#E76F00" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express", icon: SiExpress, color: "currentColor" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Photoshop", icon: PhotoshopIcon, color: "currentColor" },
  { name: "Illustrator", icon: IllustratorIcon, color: "currentColor" },
  { name: "After Effects", icon: AfterEffectsIcon, color: "currentColor" },
  { name: "Adobe XD", icon: XdIcon, color: "currentColor" },
  { name: "Premiere Pro", icon: PremiereIcon, color: "currentColor" },
  { name: "AWS S3", icon: FaAws, color: "#FF9900" },
  { name: "Razorpay", icon: SiRazorpay, color: "#3395FF" },
  { name: "GitHub", icon: SiGithub, color: "currentColor" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "JIRA", icon: SiJira, color: "#0052CC" },
  { name: "WooCommerce", icon: SiWoocommerce, color: "#96588A" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
];

// Extra logos used only on project pages (not shown in the skills marquee).
const projectTools: Tech[] = [
  { name: "Elementor", icon: SiElementor, color: "#92003B" },
  { name: "Google Tag Manager", icon: SiGoogletagmanager, color: "#246FDB" },
  { name: "Meta Pixel", icon: SiMeta, color: "#0866FF" },
  { name: "Meta Ads", icon: SiMeta, color: "#0866FF" },
  { name: "Three.js", icon: SiThreedotjs, color: "currentColor" },
  { name: "Resend", icon: SiResend, color: "currentColor" },
];

export const toolIcon = (name: string) =>
  [...techStack, ...projectTools].find((t) => t.name === name);
