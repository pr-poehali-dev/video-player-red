import React from "react";
import PlayerButton from "./PlayerButton";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import SettingsMenu from "./SettingsMenu";
import { cn } from "@/lib/utils";

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
  isMuted: boolean;
  onToggleMute: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  playbackRate: number;
  onPlaybackRateChange: (rate: number) => void;
  className?: string;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  onPlayPause,
  currentTime,
  duration,
  onSeek,
  volume,
  onVolumeChange,
  isMuted,
  onToggleMute,
  isFullscreen,
  onToggleFullscreen,
  playbackRate,
  onPlaybackRateChange,
  className,
}) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4",
        "transform transition-all duration-300",
        className,
      )}
    >
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onSeek={onSeek}
        className="mb-4"
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <PlayerButton
            icon={isPlaying ? "Pause" : "Play"}
            onClick={onPlayPause}
            size={24}
          />

          <PlayerButton
            icon="SkipBack"
            onClick={() => onSeek(Math.max(0, currentTime - 10))}
            size={20}
          />

          <PlayerButton
            icon="SkipForward"
            onClick={() => onSeek(Math.min(duration, currentTime + 10))}
            size={20}
          />

          <VolumeControl
            volume={volume}
            onVolumeChange={onVolumeChange}
            isMuted={isMuted}
            onToggleMute={onToggleMute}
          />
        </div>

        <div className="flex items-center space-x-2">
          <SettingsMenu
            playbackRate={playbackRate}
            onPlaybackRateChange={onPlaybackRateChange}
          />

          <PlayerButton
            icon={isFullscreen ? "Minimize" : "Maximize"}
            onClick={onToggleFullscreen}
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
