import axios, { AxiosResponse } from 'axios';

import { mainUrl } from "../consts";
import { Transcript } from '../types/dataTypes';


const fetchRandomTranscript = async (): Promise<Transcript | null> => {
    try {
      const response: AxiosResponse<Transcript> = await axios.get(mainUrl + 'random');
      return response.data;
    } catch (error) {
      console.error('Error fetching random transcript:', error);
      return null;
    }
  };
  

export  { fetchRandomTranscript };
