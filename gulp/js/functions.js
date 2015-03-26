console.log('functions!')

$('#glasses-container-v').on('click', '.about .hide-btn', function() {
    $(this).parents('.highlighted').removeClass('highlighted');
    console.log('hide');
});
$('.reset').on('click', function() {
    map.panTo({ lat: 39.8120, lng: -86.1480});
});