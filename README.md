# Smoothy-Transcript

React TypeScript Audio Player with Transcript Display

## Project Description

This project is a React TypeScript application built with Vite that plays random video and displays the corresponding transcript, highlighting words as they are spoken, similar to subtitles in a movie. Additionally, it features an expandable text box beneath the video where a large portion of the transcript is visible, with the current word being highlighted in real-time. The text box is enabled by default.

The project leverages Material-UI for styling, ensuring a responsive and visually appealing user interface. It provides a seamless user experience for viewing and interacting with video transcripts.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

```bash
   git clone https://github.com/Yochp/smootyh-transcript.git
   cd smoothy-transcript
```

2. Install dependencies:

```bash
   npm install
```

3. Start the development server:

```bash
   npm run dev
```

4. To run the tests:

```bash
   npm run test
```

5. Open your browser and navigate to `http://localhost:5173/`.

## Future Enhancements

Lazy Loading for Word Display:

Implement lazy loading for the word display to improve performance, instead of rendering all words at once.

Fullscreen Subtitle Support:

Add support for displaying subtitles while in fullscreen mode to enhance the viewing experience.

Comprehensive Testing:

Develop a complete suite of unit tests, integration tests, and UI tests to ensure robust and reliable functionality.

Consistent Theming:

Create a centralized theme and ensure all UI components use theme parameters for a consistent and easily customizable design.

Media Selection Options:

Provide options to support the selection of media from a list, allowing users to choose different videos or audio files.
