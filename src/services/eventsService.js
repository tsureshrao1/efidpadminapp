import api from './api';

export const createEventAPI = async (obj) => {
    try {
        const response = await api.post('/events/createevent', obj);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateEventAPI = async (obj) => {
    try {
        const response = await api.put('/events/updateevent', obj);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const fetchAllEvents = async () => {
    try {
        const response = await api.get('/events/allevents');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchEventsByStatus = async (status) => {
    try {
        const response = await api.get(`/events/eventByStatus/${status}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchEventEntriesByCatId = async (catId) => {
    try {
        const response = await api.get(`/events/eventcategoryentries/${catId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const approveEventEntry = async(obj) => {
    try {
        const response = await api.post(`/events/updatestatusevententry`, obj);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getEventByID = async(eventID) => {
    try {
        const response = await api.get(`/events/eventbyid/${eventID}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const publishEvent = async() => {

}