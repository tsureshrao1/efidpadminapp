import api from './api';


export const login = async (obj) => {
    try {
        const response = await api.post('/efiusers/loginuser', obj);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchPendingRequestFormAdmin = async (memberType) => {
    try {
        const response = await api.get('/efiusers/usersbymemtypeandstatus/' + memberType);
        return response;
    } catch (error) {
        throw error;
    }
};

export const getClubByUser = async (regReqType, userId) => {
    let path = '';
    switch(regReqType) {
        case 'CLUB':
            path = '/clubs/clubByUser/'
            break;
        case 'INST':
            path = '/institutes/institutebyuserid/'
            break;
        case 'INDI':
            path = '/individuals/individualByUserId/'
            break;
        case 'LIFE':
            path = '/lifetimeindividuals/getbylifetimeuserid/'
            break;
        default:
            path = '/clubs/clubByUser/'
            break;
    }
    try {
        const response = await api.get(`${path + userId}`);
        return response;
    } catch (error) {
        throw error;
    }
};

export const approveUser = async (requestObj) => {
    try {
        const response = await api.put(`/efiusers/approveuser`, requestObj);
        return response;
    } catch (error) {
        throw error;
    }
};


export const createClub = async (obj) => {
    try {
        const response = await api.post('/clubs/createclub', obj);
        return response.data;
    } catch (error) {
        console.log("api error", error);
        throw error;
    }
};

export const adminLogin = async (obj) => {
    try {
        const response = await api.post('/admin/loginuser', obj);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const uploadFile = async (obj) => {
    try {
        const response = await api.post('/file/upload-file', obj, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            ;
        return response.data;
    } catch (error) {
        console.log("api error", error);
        throw error;
    }
};
