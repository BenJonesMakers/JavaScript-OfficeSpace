'use strict';

describe('Office', () => {
    var office;
    var room;

    beforeEach(function() {
        office = new Office();
        room = jasmine.createSpyObj('room', ['name']);
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
    });
    
});