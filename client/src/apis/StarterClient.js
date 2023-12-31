import axios from 'axios';

const StarterClient = axios.create({
    baseURL: 'http://localhost:8080',

    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

StarterClient.interceptors.response.use(
    response => response,
    error => {
        console.log('ERROR:', error);
        return Promise.reject(error);
    });

export const pingServer = async (ping) => {
    return await StarterClient.post('ping', ping);
};

export const createUserPreferences = async (preference) => {
    return await StarterClient.post('preference', preference);
};

export const getEvents = async () => {
    return await StarterClient.get('allevents');
};

export const getEventInfo = async (eventId) => {
    return await StarterClient.post("event",eventId);
}
