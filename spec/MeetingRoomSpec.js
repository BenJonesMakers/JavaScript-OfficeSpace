'use strict';

describe('MeetingRoom', () => {
    // var office;
    var room;
    var boardroom;

    beforeEach(function() {
        // office = jasmine.createSpyObj('office', ['meetingrooms']);
        room = new MeetingRoom();
    });

    describe('new room', () => {

        // As a staff member
        // In order to distinguish between meeting rooms
        // I would like my meeting room to have a name
        it('has a name', () => {
            boardroom = new MeetingRoom('Boardroom');
            expect(boardroom.name).toEqual('Boardroom');
        });
    });

    describe('availability', () => {

        // As a staff member
        // In order to have meeting,
        // I would like to check if the meeting room is available or not (true or false)
        // Ben note: meeting rooms start available by default.

        it('can check if a meeting room is available', () => {
            expect(room.isAvailable()).toBeTrue();
        });

        it('can set a meeting room unavailable', () => {
            room.inUse();
            expect(room.isAvailable()).toBeFalsy();
        });

        it('can make a meeting room available', () => {
            room.inUse();
            room.noLongerInUse();
            expect(room.isAvailable()).toBeTruthy();
        });

        // As a staff member
        // So that I can avoid interrupting a meeting
        // I would like an error if I try to use a room that has already been entered
        it('cannot enter a room that is already occupied', () => {
            room.inUse();
            expect(() => {room.inUse()}).toThrowError('That room is already in use');
        });
    });
});