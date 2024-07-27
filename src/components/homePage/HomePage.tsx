import React, { useState } from "react";

import { LoadingCircle } from "../loadingCircle/LoadingCircle";
import { useFetchRandomTranscript } from "../../hooks/dataFetchingHooks";
import { ErrorGenericElement } from "../errorGenericElement/ErrorGenericElement";
import { TranscriptSideBoxContainer } from "../transcriptSideBoxContainer/TranscriptSideBoxContainer";
import { VideoMediaPlayerContainer } from "../videoMediaPlayerContainer/VideoMediaPlayerContainer";

const HomePage: React.FC = () => {
  const { currentTranscript, error, loading } = useFetchRandomTranscript();
  const [currentTime, setCurrentTime] = useState<number>(0);

  return (
    <div>
      {loading && <LoadingCircle />}
      {error && <ErrorGenericElement errorMassege={error} />}
      {currentTranscript && (
        <>
          <VideoMediaPlayerContainer
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            audioUrl={currentTranscript?.audio_url}
            words={currentTranscript?.words}
          />
          <TranscriptSideBoxContainer
            words={currentTranscript?.words}
            currentTime={currentTime}
          />
        </>
      )}
    </div>
  );
};

export { HomePage };
