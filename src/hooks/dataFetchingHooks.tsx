import { useState, useEffect } from "react";

import { Transcript } from "../types/dataTypes";
import { fetchRandomTranscript } from "../api/fetchAudioData";

export const useFetchRandomTranscript = () => {
  const [currentTranscript, setCurrentTranscript] = useState<Transcript | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transcript = await fetchRandomTranscript();
        if (!transcript) {
          setError("Failed to fetch transcript. Please try again later.");
          return;
        }
        setCurrentTranscript(transcript);
      } catch (error) {
        setError("An unexpected error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { currentTranscript, error, loading };
};
