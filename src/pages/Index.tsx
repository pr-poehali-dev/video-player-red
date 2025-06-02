import VideoPlayer from "@/components/VideoPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🎥 Видеоплеер</h1>
          <p className="text-gray-300">Современный плеер в стиле YouTube</p>
        </div>

        <VideoPlayer />

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 text-gray-400">
            <span>▶️ Воспроизведение</span>
            <span>🔊 Регулировка звука</span>
            <span>⏭️ Перемотка</span>
            <span>🔍 Полный экран</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
