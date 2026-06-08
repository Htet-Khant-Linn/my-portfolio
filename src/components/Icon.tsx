import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

export default function Icon({ name, className, ...props }: IconProps) {
  // Convert kebab-case names like "chart-bar-big" to PascalCase "ChartBarBig"
  const formattedName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const iconName = formattedName as keyof typeof LucideIcons;
  const LucideIcon = (LucideIcons[iconName] as any) || LucideIcons.HelpCircle;

  return <LucideIcon className={className} {...(props as any)} />;
}
