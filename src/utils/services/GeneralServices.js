import {useState} from 'react';
import axios from 'axios';

const generalServices = () => {
    const [data, setData] = useState(null);
    const [apiLoading, setApiLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    const get = async (url) => {
        try {
            setApiLoading(true);
            setData(null);
            setApiError(null);
            const { data: responseData } = await axios.get(url);
            setData(responseData);
            setApiLoading(false);
        } catch (error) {
            setApiLoading(false);
            setData(null);
            setApiError(error);
        }
    }

    return { data, apiLoading, apiError, get };
}

export default generalServices;