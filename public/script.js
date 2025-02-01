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

$('#dragDropArea').on('dragover', function(e) {
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

$(document).ready(function() {
    $('#fileInput').on('change', function(event) {
        var formData = new FormData();
        var file = event.target.files[0];  
        formData.append('image', file);  

        $.ajax({
            url: '/upload', 
            type: 'POST',
            data: formData,
            processData: false,  
            contentType: false,  
            success: function(response) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Image downloaded successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            },
            error: function(xhr, status, error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Error downloading image.',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                });
            }
        });
    });
});

