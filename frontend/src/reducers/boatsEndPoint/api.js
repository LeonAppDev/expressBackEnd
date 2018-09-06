import axios from 'axios';

export const remoteRequest =  async function (request) {

    return await axios(request);
}


