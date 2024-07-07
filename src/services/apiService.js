import api from './api';


export const login = async (obj) => {
    try {
        const response = await api.post('/efiusers/loginuser', obj);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchHorsesByStatus = async (status) => {
    try {
        const response = await api.get(`/horses/horsesbystatus/${status}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getHorseDetailsById = async (id) => {
    try {
        const response = await api.get(`/horses/horsebyhorseid/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const fetchRidersByStatus = async (status) => {
    try {
        const response = await api.get(`/riders/ridersbystatus/${status}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getRiderDetailsById = async (id) => {
    try {
        const response = await api.get(`/riders/riderbyriderid/${id}`);
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

export const getPaymentDetailsById = async (id) => {
    try {
        return {
            "paymentId": 26,
            "userId": 26,
            "entityId": 0,
            "entityName": "Event Entry",
            "paymentType": "QR Code",
            "paymentStatus": "Success",
            "amountPaid": 2567,
            "paymentGatewayId": "1233456",
            "paymentOrderId": "1233456",
            "paymentSignature": null,
            "bankName": "yes",
            "paymentDate": null,
            "additionalComments": null
          };
    } catch (error) {
        throw error;
    }
}

export const downloadAttachmentFile = async (attachmentObj) => {
    try {
        const response = await api.post(`/file/downloadattachmentfilebyurl`, attachmentObj, {
            "accept": 'application/octet-stream',
            'Content-Type': 'application/json'
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getPaymentDetailsByUserId = async (userId) => {
    try {
        const response = await api.get(`/payments/getpaymentbyuserid/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}


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

export const approveHorse = async (requestObj) => {
    try {
        const response = await api.put(`/horses/approvehorse`, requestObj);
        return response;
    } catch (error) {
        throw error;
    }
};

export const approveRider = async (requestObj) => {
    try {
        const response = await api.put(`/riders/approverider`, requestObj);
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
