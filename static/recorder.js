// collect DOMs
console.log("im am being run");
const display = document.querySelector('.display');
const controllerWrapper = document.querySelector('.controllers');

const State = ['Initial', 'Record', 'Download'];
let stateIndex = 0;
let mediaRecorder, chunks = [], audioURL = '';



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
                
                let response_element = document.querySelector("#generated-reply");
                response_element.innerHTML = seerReply;
                response_element.style.border = "solid";
                response_element.style.borderColor = "purple";
                response_element.style.backgroundColor = "rgb(167, 108, 167)";
                response_element.style.color = "rgb(255,255,255)";

                response_element.scrollIntoView();

                response_element.scrollIntoView({behavior: "smooth"});   
             
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
    changeImage('../static/answer_search.png');
}

const stopRecording = () => {
    stateIndex = 2;
    mediaRecorder.stop();
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
    changeImage('../static/answer_ball.png');
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
const seerImage = document.getElementById('seerImage');

// Function to change the images
function changeImage(imagePath) {
    let seer_image_element = document.querySelector("#seerImage");
    seer_image_element.src = imagePath;
}

application(stateIndex);
