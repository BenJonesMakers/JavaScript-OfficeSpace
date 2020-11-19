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
        this._available = false;
    }

    noLongerInUse() {
        this._available = true;
    }

}