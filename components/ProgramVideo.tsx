"use client";

import { useRef } from "react";

type ProgramVideoProps = {
  src: string;
  label: string;
};

export function ProgramVideo({ src, label }: ProgramVideoProps) {
  const backgroundVideo = useRef<HTMLVideoElement>(null);

  const syncBackground = (video: HTMLVideoElement) => {
    const background = backgroundVideo.current;

    if (!background) return;

    if (Math.abs(background.currentTime - video.currentTime) > 0.2) {
      background.currentTime = video.currentTime;
    }

    background.playbackRate = video.playbackRate;
  };

  const playBackground = (video: HTMLVideoElement) => {
    syncBackground(video);
    void backgroundVideo.current?.play();
  };

  return (
    <div className="relative aspect-video max-h-[440px] w-full overflow-hidden bg-[#111]">
      <video
        ref={backgroundVideo}
        src={src}
        muted
        playsInline
        preload="metadata"
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-55 blur-xl"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/20" />
      <video
        src={src}
        aria-label={label}
        controls
        playsInline
        preload="metadata"
        onPlay={(event) => playBackground(event.currentTarget)}
        onPause={() => backgroundVideo.current?.pause()}
        onSeeking={(event) => syncBackground(event.currentTarget)}
        onTimeUpdate={(event) => syncBackground(event.currentTarget)}
        onRateChange={(event) => syncBackground(event.currentTarget)}
        className="relative z-10 h-full w-full object-contain"
      />
    </div>
  );
}
