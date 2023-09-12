![8A477033-3C07-46B6-8F85-E8884D36D18B](https://github.com/issamohamed/Seer/assets/48192737/526cd89d-b8bb-4a03-af41-a07d37d00845)


 "Seer" is a AI web application I've been passionately developing, given recent technological strides in AI, and I'm eager to walk you through its inner workings. At its core is "app.py," a Python script that serves as the project's foundation. It utilizes the Flask web framework to create a user-friendly interface. When you visit the project's main page, you'll be greeted by  a supplmentary HTML template, "index2.html" that provides the interface for the User's entire experience.

Here's where things get intriguing: you have the ability to record audio directly through your web browser. Once you've finished recording, the audio file is carefully saved as "sample_audio.webm" in a dedicated directory known as "uploads." But the real magic unfolds when the audio is handed over to "decipher.py."

"Decipher.py" is a Python module that takes on the crucial task of processing this audio input. It begins by verifying the existence of the uploaded audio file and then proceeds to load it into a specialized audio processing API developed by Openai called "Whisper". Whisper boasts impressive capabilities, including transcribing spoken words and natural language in any language within the audio, effectively converting audio into readable text.

Seeing this, I decided to take a fascinating twist. I programmed  transcribed text is then passed on to OpenAI's powerful GPT-3.5 Turbo model. Think of this model as a virtual middleman between these two highly capable AI processes, capable of generating profound responses based on the content of the audio it processes. To facilitate this interaction, the user simply simulates a conversation with Seer. This means that you send in your recorded audio, this middleman model, Seer, then replies with insightful answers and commentary, akin to a virtual mystic revealing its wisdom.

Seer's generated response along with the user's transcription is decoratively displayed on the web page thanks to various written Javascript and CSS, making it easy for you to engage in a dynamic conversation. Additionally, the user is able to also your original audio input alongside the AI's responses, presented as a conversation with the wise mystic, providing a seamless and engaging user experience.






HOW TO RUN:
1) Seeing this a flask application that makes use of the Whispher's and GPT-3.5's Libaries, for all the necessary enviorment resources, run this command below into your terminal:

pip install flask os whisper openai


2) Additionally, access to OpenAI's GPT-3.5 Turbo model requires an associated API key which is essential for the seamless interaction between Whispher and GPT-3.5. To recieve this required personal API key, one must set up an OpenAi account and follow the steps highlighted in this link:
  
  
https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt  




3) Now that you have your key, download the files I've provided you with in this "Seer" git repostiory.


4) Next, make a text file in the same directory as "decipher.py" named "hidden_key.txt" and paste your API key on the first line of the file WITH NO ADDITIONAL SPACES.

5) Finally, hit save on all your changes if you haven't already, and run "app.py" to render the website
