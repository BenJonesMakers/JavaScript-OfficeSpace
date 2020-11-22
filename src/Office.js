'use strict';

class Office {
    constructor(name = "Main Office") {
        this.rooms = [];
        this.name = name;
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