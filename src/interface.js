'use strict';

$(document).ready(function() {

    var mainOffice = new Office();
    var room = new MeetingRoom();
    mainOffice.addRoom(room);

    const buildRoomList = function() {
        var rooms = mainOffice.rooms;
        $('#all-rooms').html('');

        if (rooms === []) {
            $('#all-rooms').html('<li>No Meeting Rooms have been added</li>');   
        } else {
            rooms.forEach(function( element, index ) {
                $('#all-rooms').append('<li>' + element.name + '</li>');   
            })
        }
    }

    buildRoomList();
    
    $('#office-name').text(mainOffice.name);
    console.log(mainOffice.name);
    $('#add-room-btn').click(function() {
        var roomName = $('#add-room-name').val();
        var newRoom = new MeetingRoom(roomName);
        mainOffice.addRoom(newRoom);
        console.log(mainOffice.rooms);
        buildRoomList();
    })

})