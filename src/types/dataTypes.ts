export interface Speaker {
  id: string;
  name: string;
}
  
  export interface Paragraph {
    id: string;
    time: number;
    duration: number;
    speaker_id: string;
  }
  
  export interface Word {
    time: number;
    duration: number;
    text: string;
    paragraph_id?: string;
  }
  
  export interface Transcript {
    id: number;
    name: string;
    audio_url: string;
    speakers: Speaker[];
    paragraphs: Paragraph[];
    words: Word[];
  }