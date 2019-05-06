$('#flashMessage').hide()

$('#previewButton').click(function ()
{
    let title = $('#blogTitleInput').val();
    let content = $('#blogContentInput').val();

    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').text(content);

    $('#blogTitleInput').val('');
    $('#blogContentInput').val('');

    $('#flashMessage')
        .slideDown(1000)
        .delay(3000)
        .slideUp();
});