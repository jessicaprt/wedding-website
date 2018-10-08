import axios from 'axios'

export class ReservationsSdk {

    static get NOT_COMING() { return "NOT_COMING" }
    static get ATTENDING() { return "ATTENDING" }

    static getGuest(guestId) {
        return axios.get('https://api.georgeandjessica.ca/v1/guests/' + guestId);
    }

    static updateStatus(guestId, status) {
        return axios.post('https://api.georgeandjessica.ca/v1/guests/' + guestId + '/status', {
            status: status
        });
    }

    static updateExtras(guestId, extras) {
        return axios.post('https://api.georgeandjessica.ca/v1/guests/' + guestId + '/extras', {
            extras : extras
        });
    }
}

