'use strict';

class MeetingRoom {
    
    constructor(name = 'Default Room') {
        this._available = true;
        this.name = name;
    }

    isAvailable() {
        return this._available;
    }

    inUse() {
        if (this._available === false) {
            throw new Error('That room is already in use');
        } else {
            this._available = false;
        }
    }

    noLongerInUse() {
        this._available = true;
    }

}