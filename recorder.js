// collect DOMs
console.log("im am being run");
const display = document.querySelector('.display');
const controllerWrapper = document.querySelector('.controllers');

const State = ['Initial', 'Record', 'Download'];
let stateIndex = 0;
let mediaRecorder, chunks = [], audioURL = '';

const processAudio = () => {
    // Send recorded audio for processing
    // fetch('/process_audio', {
    //     method: 'POST',
    //     body: audioURL.json()
    // })
    fetch('/process_audio', {
        headers : {
            'Content-Type' : 'application/json'
        },
        method : 'POST',
        body : JSON.stringify( {
            'audio_url' : document.getElementsByName('audio'),
        })
    })
    .then(response => response.json())
    .then(data => {
        // const seerReply = data.seer_reply;
        // // Display the Seer's reply on the web page
        // document.getElementById('seerReply').textContent = seerReply;
    })
    .catch(error => {
        console.error('Error processing audio:', error);
    });
}

// mediaRecorder setup for audio
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log('mediaDevices supported..')

    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(stream => {
        mediaRecorder = new MediaRecorder(stream)

        mediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data)
        }

        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { 'type': 'audio/webm;codecs=opus' })
            chunks = []
            audioURL = window.URL.createObjectURL(blob)
            document.querySelector('audio').src = audioURL
            var fd=new FormData();
            fd.append("audio_data",blob, "sample_audio.webm");
  
            

            fetch('/upload_audio', {
                method : 'POST',
                body : fd
            }).then(response => response.json())
            .then(data => {
                let seerReply = data.seer_reply;
                console.log(seerReply);
              
                // // Display the Seer's reply on the web page
                let response_element = document.createElement("p");
                response_element.innerHTML = seerReply;
                document.body.appendChild(response_element);
             
            })
            .catch(error => {
                console.error('Error processing audio:', error);
            });

        }
    }).catch(error => {
        console.log('Following error has occurred: ', error)
    })
} else {
    stateIndex = ''
    application(stateIndex)
}

const clearDisplay = () => {
    display.textContent = ''
}

const clearControls = () => {
    controllerWrapper.textContent = ''
}

const record = () => {
    stateIndex = 1;
    mediaRecorder.start();
    application(stateIndex);
}

const stopRecording = () => {
    stateIndex = 2;
    mediaRecorder.stop();
    // processAudio(); // Call the processAudio function to send audio for processing
    application(stateIndex);
}

const downloadAudio = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = audioURL;
    downloadLink.setAttribute('download', 'audio');
    downloadLink.click();
}

const addButton = (id, funString, text) => {
    const btn = document.createElement('button');
    btn.id = id;
    btn.setAttribute('onclick', funString);
    btn.textContent = text;
    controllerWrapper.append(btn);
}

const addMessage = (text) => {
    const msg = document.createElement('p');
    msg.textContent = text;
    display.append(msg);
}

const addAudio = () => {
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = audioURL;
    display.append(audio);
}


const application = (index) => {
    switch (State[index]) {
        case 'Initial':
            clearDisplay();
            clearControls();
            addButton('record', 'record()', 'Start Recording');
            break;

        case 'Record':
            clearDisplay();
            clearControls();
            addMessage('Recording...');
            addButton('stop', 'stopRecording()', 'Stop Recording');
            break;

        case 'Download':
            clearControls();
            clearDisplay();
            addAudio();
            addButton('record', 'record()', 'Record Again');
            break;

        default:
            clearControls();
            clearDisplay();
            addMessage('Your browser does not support mediaDevices');
            break;
    }
}

application(stateIndex);
