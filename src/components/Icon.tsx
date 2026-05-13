import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

export default function Icon({ name, className, ...props }: IconProps) {
  // Convert names like "linkedin" to "Linkedin"
  const iconName = (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()) as keyof typeof LucideIcons;
  const LucideIcon = (LucideIcons[iconName] as any) || LucideIcons.HelpCircle;

  return <LucideIcon className={className} {...(props as any)} />;
}
