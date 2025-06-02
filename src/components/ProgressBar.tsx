import React from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentTime,
  duration,
  onSeek,
  className,
}) => {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleValueChange = (value: number[]) => {
    const newTime = (value[0] / 100) * duration;
    onSeek(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <span className="text-white text-sm min-w-[40px]">
        {formatTime(currentTime)}
      </span>

      <Slider
        value={[progress]}
        onValueChange={handleValueChange}
        max={100}
        step={0.1}
        className="flex-1 cursor-pointer"
      />

      <span className="text-white text-sm min-w-[40px]">
        {formatTime(duration)}
      </span>
    </div>
  );
};

export default ProgressBar;
