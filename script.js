$(document).ready(function() {
    $.ajax({
        url: 'http://numbersapi.com/1/30/date?json',
        method: 'GET',
        success: function(data) {
            $('#content').html('<p>' + data.text + '</p>');
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden');

function showElements() {
    hiddenElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible'); 
        }, index * 500);
    });
}

window.onload = showElements;

$('#imageUploadArea').on('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('drag-over');
}).on('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('drag-over');
}).on('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var files = e.originalEvent.dataTransfer.files;
    handleFileUpload(files);
});

function handleFileUpload(files) {
// Handle file upload logic via AJAX
var formData = new FormData();
formData.append('image', files[0]);

$.ajax({
    url: '/upload',  // Your Node.js server endpoint to handle file upload
    method: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function(response) {
        alert("File uploaded successfully");
    },
    error: function() {
        alert("Error uploading file");
    }
});
}
