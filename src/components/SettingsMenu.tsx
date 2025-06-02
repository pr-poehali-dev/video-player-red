import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";

interface SettingsMenuProps {
  playbackRate: number;
  onPlaybackRateChange: (rate: number) => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({
  playbackRate,
  onPlaybackRateChange,
}) => {
  const speedOptions = [
    { value: 0.25, label: "0.25x" },
    { value: 0.5, label: "0.5x" },
    { value: 0.75, label: "0.75x" },
    { value: 1, label: "Обычная" },
    { value: 1.25, label: "1.25x" },
    { value: 1.5, label: "1.5x" },
    { value: 2, label: "2x" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 p-2"
        >
          <Icon name="Settings" size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Скорость воспроизведения</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {speedOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onPlaybackRateChange(option.value)}
            className={playbackRate === option.value ? "bg-accent" : ""}
          >
            <span className="flex items-center justify-between w-full">
              {option.label}
              {playbackRate === option.value && <Icon name="Check" size={16} />}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsMenu;
