function moreClickHandler(e){
    // let div = e.parentElement.getElementsByTagName('div')[0];
    // if(div.style.display == 'none'){
    //     div.style.display = 'block';
    // }else{
    //     div.style.display = 'none';
    // }
}

// async function uploadFolder(){
//     console.log('i run for upload folder');
//     const dirHandle = await window.showDirectoryPicker();
    
//     // run code for dirHandle #TODO
// }


let gridView = false;
const listViewIcon = document.getElementById('listViewIcon');
const gridViewIcon = document.getElementById('gridViewIcon');
const rootContainer = document.getElementById('rootContainer');
function changeView(){
    if(gridView){
        gridViewIcon.style.display = 'flex';
        listViewIcon.style.display = 'none';
        rootContainer.classList.remove('grid-container');
        gridView = false;
    }else{
        gridViewIcon.style.display = 'none';
        listViewIcon.style.display = 'flex';
        rootContainer.classList.add('grid-container');
        gridView = true;
    }
}

function headerCheckboxHandler(e) { 
    let checkBOx = document.getElementsByClassName("checkboxSelector");
    if (e.checked == true){
        for (let i = 0; i < checkBOx.length; i++) {checkBOx[i].checked = true;}
    }else{
        for (let i = 0; i < checkBOx.length; i++) {checkBOx[i].checked = false;}
    }
}

const btnUploadProgress = document.getElementById('btn-upload-progress');
const btnUploadStart = document.getElementById('btn-upload-start');
const btnUploadProgressBar = document.getElementById('btn-upload-progress-bar');
const btnUploadProgressText = document.getElementById('btn-upload-progress-text');
const uploadlbl = document.getElementById('uploadlbl');

function uploadHandler(e, location) {
    console.log(location);
    let formData = new FormData();
    for (let index = 0; index < e.files.length; index++) {
        // formData.append(`username.files_${index}`, e.files[index]);
        formData.append(`${location}|files_${index}`, e.files[index]);
    }
    // fetch('/upload', {method: "POST", body: formData});
    // Create XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // Add event listener for progress updates
    xhr.upload.addEventListener('progress', function(event) {
        if (event.lengthComputable) {
            let percentComplete = (event.loaded / event.total) * 100;
            btnUploadProgressText.innerHTML = percentComplete.toFixed(0) + '%';
            btnUploadProgressBar.style.background = `radial-gradient(closest-side, #515ecc 79%, transparent 80% 100%), conic-gradient(#a8b2ff ${percentComplete}%, #515ecc 0)`
            console.log('Upload progress:', percentComplete.toFixed(2) + '%');
        } else {
            console.log('Unable to compute progress.');
        }
    });
    xhr.upload.addEventListener('loadstart', (event)=>{
        btnUploadStart.style.display = 'none';
        btnUploadProgress.style.display = 'flex';
        uploadlbl.style.cursor = 'progress';
        uploadlbl.style.backgroundColor = '#515ecc';
        e.type = null;
        console.log('Uploading...');
    })
    xhr.upload.addEventListener('loadend', (event)=>{
        uploadlbl.style.cursor = 'pointer';
        uploadlbl.style.backgroundColor = '#6576ff';
        btnUploadStart.style.display = 'flex';
        btnUploadProgress.style.display = 'none';
        btnUploadProgressText.innerHTML = '0%';
        btnUploadProgressBar.style.background = `radial-gradient(closest-side, #515ecc 79%, transparent 80% 100%), conic-gradient(#a8b2ff 0%, #515ecc 0)`
        console.log('Done.');
        setTimeout(() => {
            window.location.reload();
        }, 500);
    })
    // Open a new POST request
    xhr.open('POST', '/api/upload');
    // Send the FormData
    xhr.send(formData);
    
    console.log(e.files);
    
}