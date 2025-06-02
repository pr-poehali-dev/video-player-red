import React from "react";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface PlayerButtonProps {
  icon: string;
  onClick?: () => void;
  className?: string;
  size?: number;
  disabled?: boolean;
}

const PlayerButton: React.FC<PlayerButtonProps> = ({
  icon,
  onClick,
  className,
  size = 20,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex items-center justify-center p-2 rounded-full transition-all duration-200",
        "hover:bg-white/20 active:scale-95",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
    >
      <Icon name={icon} size={size} className="text-white" />
    </button>
  );
};

export default PlayerButton;
