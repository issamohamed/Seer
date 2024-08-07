

![8A477033-3C07-46B6-8F85-E8884D36D18B](https://github.com/issamohamed/Seer/assets/48192737/526cd89d-b8bb-4a03-af41-a07d37d00845)

 "Seer" is a AI web application I've been passionately developing, graciously inspired by recent strides in new public AI use cases, and I'm eager to walk you through its inner workings. At its core is "app.py," a Python script that serves as the project's foundation. It utilizes the Flask web framework to create a user-friendly interface. When you visit the project's main page, you'll be greeted by  a supplmentary HTML template, "index2.html" that provides the interface for the User's entire experience.

Here's where things get intriguing: you have the ability to record audio directly through your web browser. Once you've finished recording, the audio file is carefully saved as "sample_audio.webm" in a dedicated directory known as "uploads." But the real magic unfolds when the audio is handed over to "decipher.py."

"decipher.py" is a Python module that takes on the crucial task of processing this audio input. It begins by verifying the existence of the uploaded audio file and then proceeds to load it into a specialized audio processing API developed by Openai called "Whisper". Whisper boasts impressive capabilities, including transcribing spoken words and natural language in any language within the audio, effectively converting audio into readable text.

Seeing this, I decided to take a fascinating twist. The processed transcribed text is then passed on to OpenAI's powerful GPT-3.5 Turbo model. In essence, think of Seer as a virtual middleman between these two highly capable AI processes, GPT-3.5's capabilities of generating profound responses based on the content of the audio Whisper already processesed from the user. To facilitate this interaction, the user simply simulates a conversation with Seer via a mic recording on their chrome browser. They send in their recorded audio, which is transcribed and responded to, allowing Seer to reply with insightful answers and commentary, akin to a fictional mystic revealing its wisdom.

Seer's generated response along with the user's transcription is decoratively displayed on the web page thanks to some Javascript and CSS based built UI, making it easy for the user to engage in a dynamic conversation. Additionally, the user is able to also playback to hear the quality of their audio input alongside the AI's responses, which is presented in a gamelike chatbox with the wise mystic, providing a seamless and engaging user experience.






HOW TO RUN:
1) Seeing this a flask application that makes use of the Whispher's and GPT-3.5's Libaries, for all the necessary enviorment resources, run this command below into your terminal:

pip install flask whisper openai


2) Access to OpenAI's GPT-3.5 Turbo model requires an associated API key which is essential for the seamless interaction between Whispher and GPT-3.5. To recieve this required personal API key, one must set up an OpenAI account and follow the steps highlighted here in this link:
  
  
https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt  




3) Now that you have your OpenAI key, download the files I've provided you with in my "Seer" git repostiory.


5) Next, make a text file in the same directory as "decipher.py" named "hidden_key.txt".
   
7) Paste your API key on the first line of "hidden_key.txt" WITH NO ADDITIONAL SPACES. 

8) Finally, hit save on all your changes if you haven't already, and run "app.py" to render the website.
