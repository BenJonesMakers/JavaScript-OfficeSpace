'use strict';

$(document).ready(function() {

    var office = new Office();
    var room = new MeetingRoom();
    office.addRoom(room);

    var rooms = office.rooms;
    rooms.forEach(function( element, index ) {
        $('#all-rooms').append('<li>' + element.name + '</li>');   
    })

})