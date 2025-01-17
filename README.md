# Seer 🔮

A mystical AI-powered voice interaction platform that combines speech recognition and natural language processing to create an engaging conversational experience.

# ![8A477033-3C07-46B6-8F85-E8884D36D18B](https://github.com/issamohamed/Seer/assets/48192737/526cd89d-b8bb-4a03-af41-a07d37d00845)

## 🌟 Overview

Seer is an innovative web application that bridges the gap between voice interaction and AI intelligence. By combining OpenAI's Whisper for speech recognition and GPT-3.5 Turbo for response generation, Seer creates a unique, mystic-themed conversational experience that feels both magical and natural.

## ✨ Features

- **Voice Recording**: Direct browser-based audio recording capability
- **Multilingual Support**: Processes spoken words in any language
- **Real-time Processing**: Instant audio-to-text conversion
- **AI-Powered Responses**: Intelligent conversation generation
- **Interactive UI**: Game-like chat interface with mystic theme
- **Audio Playback**: Review your recorded messages
- **Dynamic Display**: Real-time conversation updates

## 🛠️ Technical Architecture

### Core Components
- `app.py`: Flask-based web server and application core
- `index2.html`: Main user interface template
- `decipher.py`: Audio processing and AI interaction module

### AI Integration
- **Speech Recognition**: OpenAI Whisper API
- **Conversation Generation**: GPT-3.5 Turbo
- **File Management**: Automated audio file handling

## 💫 How It Works

1. **Voice Input**
   - User records audio through browser interface
   - Recording saved as "sample_audio.webm"
   - Stored in dedicated "uploads" directory

2. **Audio Processing**
   - Whisper API processes audio file
   - Converts speech to text in any language
   - Maintains high accuracy and natural language understanding

3. **Response Generation**
   - Transcribed text passed to GPT-3.5 Turbo
   - AI generates contextual, engaging responses
   - Responses styled as mystical wisdom

4. **User Interface**
   - Dynamic display of conversation
   - Themed chat interface
   - Audio playback capabilities
   - Real-time updates

## 🚀 Getting Started

### Prerequisites
```bash
pip install flask whisper openai
```

### Setup Instructions
1. **API Key Configuration**
   - Create an OpenAI account
   - Get your API key from [OpenAI Dashboard](https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt)
   - Create "hidden_key.txt" in project directory
   - Paste API key (no extra spaces)

2. **Installation**
   - Clone the Seer repository
   - Place "hidden_key.txt" alongside "decipher.py"
   - Save all changes
   - Run "app.py" to start the application

## 🎯 Use Cases

- **Voice-Based AI Interaction**: Natural conversation with AI
- **Multilingual Communication**: Support for multiple languages
- **Interactive Learning**: Engaging Q&A experience
- **Entertainment**: Mystic-themed chat experience

## 🎨 UI Features

- Mystical chat interface
- Real-time transcription display
- Audio recording controls
- Playback functionality
- Dynamic response animations

## 🚀 Future Enhancements

- Voice response generation
- Extended conversation memory
- Custom voice recognition models
- Enhanced mystic themes
- User preference settings

## 📝 Technical Notes

- Flask web framework for backend
- WebM audio format for recordings
- Real-time API integration
- Secure API key management
- Browser-based audio processing

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details.
