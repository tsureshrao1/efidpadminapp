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

export const fetchAllRiders = async () => {
    try {
        const response = await api.get(`/riders/allriders`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchPendingRequestFormAdmin = async (memberType, status, isRequest) => {
    let url = `/efiusers/usersbymemtypeandstatus/${memberType}/${status}`;
    if(!isRequest) {
        switch(memberType) {
            case 'CLUB':
                url = '/clubs/allclubs'
                break;
            case 'INST':
                url = '/institutes/allinstitutes'
                break;
            case 'INDI':
                url = '/individuals/allindividual'
                break;
            case 'LIFE':
                url = '/lifetimeindividuals/alllifetimeindividual'
                break;
            default:
                break;
        }
    }
    try {
        const response = await api.get(url);
        return response;
    } catch (error) {
        throw error;
    }
};

export const getPaymentDetailsById = async (id) => {
    try {
        const response = await api.get('/payments/getpaymentbypaymentid/' + id);
        return response;
    } catch (error) {
        throw error;
    }
}

export const downloadAttachmentFile = async (attachmentObj) => {
    try {
        const response = await api.post(`/file/downloadattachmentfilebyurl`, attachmentObj, {
            responseType: 'blob',
            headers: {
                "Accept": 'application/octet-stream',
                "Content-Disposition": `attachment;${attachmentObj.attachmentName}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAllHorses = async () => {
    try {
      const response = await api.get(`horses/allhorses`);
      return response;
    } catch (e) {
      throw e;
    }
  };

export const getPaymentDetailsByUserId = async (userId, isEntity) => {
    const url = isEntity ? 'getpaymentbyentityid' : 'getpaymentbyuserid';
    try {
        const response = await api.get(`/payments/${url}/${userId}`);
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

export const getHorseRegNum = async () => {
    try {
        const response = await api.get(`/horses/getlatesthorseefiregistrationnumber`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getRiderRegNum = async () => {
    try {
        const response = await api.get(`/riders/getlatestriderefiregistrationnumber`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateClub = async (requestObj) => {
    try {
        const response = await api.put(`/clubs/updateclubbystatus`, requestObj);
        return response;
    } catch (error) {
        throw error;
    }
};

export const updateInst = async (requestObj) => {
    try {
        const response = await api.put(`/institutes/updateinstitutestatus`, requestObj);
        return response;
    } catch (error) {
        throw error;
    }
};

export const updateIndi = async (requestObj) => {
    try {
        const response = await api.put(`/individuals/updateindividualstatus`, requestObj);
        return response;
    } catch (error) {
        throw error;
    }
};

export const updateLife = async (requestObj) => {
    try {
        const response = await api.put(`/lifetimeindividuals/updatelifetimeindividualstatus`, requestObj);
        return response;
    } catch (error) {
        throw error;
    }
};

export const getAllClubs = async () => {
    try {
        const response = await api.get(`/clubs/allclubs`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const approveHorse = async (requestObj) => {
    try {
        const response = await api.put(`/horses/updatehorse`, requestObj);
        return response;
    } catch (error) {
        throw error;
    }
};

export const approveRider = async (requestObj) => {
    try {
        const response = await api.put(`/riders/updaterider`, requestObj);
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

export const getAllUsers = async () => {
    try {
        const response = await api.get(`/efiusers/allusers`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAllEvents = async () => {
    try {
        const response = await api.get(`/events/allevents`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAllRiders = async () => {
    try {
        const response = await api.get(`/riders/allriders`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

