'use strict';

$(document).ready(function() {

    var mainOffice = new Office();
    var room = new MeetingRoom();

    $(document).on('click','.rooms-btn',(event)=>{
        var id = $(event.target).attr('id');
        console.log(id);
        mainOffice.rooms.forEach(function(element, index) {
            if (element.name === id) {
                console.log('it matched the name');
                console.log(element);
                element.inUse();
                console.log(element);
            }
        })

        buildAvailableRoomList();
   })

    // $('.rooms-btn').click(function() {
    //     console.log('clicked');
        
    // })

    const buildRoomList = function() {
        var rooms = mainOffice.rooms;
        $('#all-rooms').html('');

        if (rooms.length === 0) {
            $('#all-rooms').html('<li>No Meeting Rooms have been added</li>');   
        } else {
            rooms.forEach(function( element, index ) {
                $('#all-rooms').append(
                    '<li>' +
                    '<input class="rooms-btn" id="' + 
                    element.name +
                    '" type="button" value="Enter"></input>  ' + 
                    element.name + 
                    '</li>');   
            })
        }
    }

    const buildAvailableRoomList = function() {
        var rooms = mainOffice.availableRooms();
        $('#available-rooms').html('');

        if (rooms.length === 0) {
            $('#available-rooms').html('<li>No Meeting Rooms are available</li>');   
        } else {
            rooms.forEach(function( element, index ) {
                $('#available-rooms').append(
                    '<li>' +
                    '<input class="rooms-btn" id="' + 
                    element.name +
                    '" type="button" value="Enter"></input>  ' + 
                    element.name + 
                    '</li>');   
            })
        }
    }

    buildRoomList();
    buildAvailableRoomList();
    
    $('#office-name').text(mainOffice.name);

    $('#add-room-btn').click(function() {
        var roomName = $('#add-room-name').val();
        var newRoom = new MeetingRoom(roomName);
        mainOffice.addRoom(newRoom);
        buildRoomList();
        buildAvailableRoomList();
    })

    

})