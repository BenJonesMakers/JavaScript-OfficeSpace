'use strict';

describe('Office', () => {
    var office;
    var room;
    var busyRoom;
    var freeRoom;

    beforeEach(function() {
        office = new Office();
        room = jasmine.createSpyObj('room', ['name', 'isAvailable']);
    });

    describe('Rooms', () => {
        
        // As an office manager
        // So that I can manage meeting rooms
        // I would like to list all the meeting rooms in the office
        // Ben note - offices should start off with no rooms
        it('can display an empty list of meeting rooms', () => {
            expect(office.rooms).toEqual([]);
        });

        // As an office manager
        // So that staff can coordinate meetings
        // I would like to add a meeting room to the office
        it('can add a new meeting room', () => {
            office.addRoom(room);
            expect(office.rooms).toEqual([room]);
        });

        // As a staff member
        // So that I can see where to have my meeting
        // I would like to be able to see a list of available rooms in the office
        it('shows only available rooms', () => {
            busyRoom = jasmine.createSpyObj('room', ['name', 'isAvailable']);
            freeRoom = jasmine.createSpyObj('room', ['name', 'isAvailable']);
            office.addRoom(freeRoom);
            office.addRoom(busyRoom);
            busyRoom.isAvailable.and.returnValue(false);
            freeRoom.isAvailable.and.returnValue(true);
            expect(office.availableRooms()).toEqual([freeRoom]);
        });
    });
    
});