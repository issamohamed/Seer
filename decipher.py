import os
import whisper
import openai

def process_audio(audio_path):
    # Define the path to the audio file
   

    # Check if the audio file exists
    if not os.path.exists(audio_path):
        return "Seer: No audio file found."

    # Load audio and pad/trim it to 30 seconds of expected input
    model = whisper.load_model('base')

    # sample_audio = whisper.load_audio(audio_path)
    # sample_audio = whisper.pad_or_trim(audio_path)


    result = model.transcribe(audio_path,fp16=False)
    

    # # Generate log-Mel spectrogram
    # mel = whisper.log_mel_spectrogram(audio_path).to(model.device)

    # # Detect spoken language in input
    # _, probs = model.detect_language(mel)
    # detected_language = max(probs, key=probs.get)

    # # Decode the audio
    # options = whisper.DecodingOptions(fp16=False)
    # result = whisper.decode(model, mel, options)

    # # Get recognized text
    audio_txt = result["text"]
    # print(audio_txt)

    # Read API key from a file
    with open('hidden_key.txt', 'r') as key_file:
        api_key = key_file.read().strip()

    # Set up OpenAI API key
    openai.api_key = api_key

    # Create conversation with initial system message
    messages = [
        {"role": "system", "content": "You are a kind wizard of vast wisdom named 'Seer', "
        "who summarizes questions and statements made from audio while answering to the best of its ability."},
        {"role": "user", "content": audio_txt},
    ]

    # Send conversation to OpenAI
    chat = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", messages=messages
    )

    # Get assistant's reply
    reply = chat.choices[0].message.content

    # Return the generated reply
    return f"<div> <p>You: {audio_txt} </p>  <p> Seer: {reply} </p> </div>"

# This block is executed only if this file is run directly
if __name__ == "__main__":
    generated_reply = process_audio('uploads/sample_audio.webm')
    print(generated_reply)
