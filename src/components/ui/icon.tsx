import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume1,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Settings,
  CircleAlert,
  type LucideIcon,
} from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const icons: Record<string, LucideIcon> = {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume1,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Settings,
  CircleAlert,
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}) => {
  const IconComponent = icons[name] || icons[fallback];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
