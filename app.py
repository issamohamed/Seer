from flask import Flask, request, jsonify
import os
from decipher2 import process_audio 
from flask import Flask, render_template


app = Flask(__name__)
app.static_folder = 'static'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload_audio', methods=['POST'])
def upload_audio():
    f = request.files['audio_data']
    with open('uploads/sample_audio.webm', 'wb') as audio:
        f.save(audio)
    print('file uploaded successfully')
    # Retrieve the recorded audio from the request
    # audio_file = request.files['audio_data']

    # Save the audio to 'uploads/sample_audio.wav'
    audio_path = 'uploads/sample_audio.webm'


    # # Call the function to process the audio and get the reply
    seer_reply = process_audio(audio_path)


    # Return the reply as JSON
    response = {
        "seer_reply": seer_reply
    }

    return jsonify(response)

if __name__ == '__main__':
    # Specifying a unique port number to avoid possible port unavailability conflicts
    app.run(host="0.0.0.0", port=8888)
    app.run(debug=True)
    
