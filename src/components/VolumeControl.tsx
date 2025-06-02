import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import PlayerButton from "./PlayerButton";
import { cn } from "@/lib/utils";

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
  isMuted: boolean;
  onToggleMute: () => void;
  className?: string;
}

const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  onVolumeChange,
  isMuted,
  onToggleMute,
  className,
}) => {
  const [showSlider, setShowSlider] = useState(false);

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return "VolumeX";
    if (volume < 50) return "Volume1";
    return "Volume2";
  };

  const handleVolumeChange = (value: number[]) => {
    onVolumeChange(value[0]);
  };

  return (
    <div
      className={cn("relative flex items-center", className)}
      onMouseEnter={() => setShowSlider(true)}
      onMouseLeave={() => setShowSlider(false)}
    >
      <PlayerButton icon={getVolumeIcon()} onClick={onToggleMute} size={20} />

      <div
        className={cn(
          "ml-2 transition-all duration-300 overflow-hidden",
          showSlider ? "w-20 opacity-100" : "w-0 opacity-0",
        )}
      >
        <Slider
          value={[isMuted ? 0 : volume]}
          onValueChange={handleVolumeChange}
          max={100}
          step={1}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default VolumeControl;
