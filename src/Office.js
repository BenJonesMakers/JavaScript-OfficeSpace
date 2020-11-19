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

        function checkAvailable(room) {
            
            if (room.isAvailable()) {
                freeRooms.push(room);
            }
        }
        return freeRooms;
    }
}