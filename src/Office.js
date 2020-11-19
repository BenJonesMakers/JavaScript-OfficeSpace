'use strict';

class Office {
    constructor() {
        this.rooms = [];
    }

    addRoom(room) {
        this.rooms.push(room);
    }

    availableRooms() {
        var freeRooms = [];
        this.rooms.forEach(checkAvailable);
        console.log(this.rooms);
        function checkAvailable(room) {
            console.log(room);
            if (room.isAvailable()) {
                freeRooms.push(room);
                console.log('pants');
            }
        }
        return freeRooms;
    }
}