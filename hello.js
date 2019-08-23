$(document).ready(function() {
    $.ajax({
        url: "https://trainmapjs.azureedge.net/data/trips/121"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
});