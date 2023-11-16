import React, { useState, useEffect } from 'react';
import {axiosInstance, axiosInstance1, axiosInstance2} from './api/axiosInstance';

function IpFetcher() {
    const [ipAmazon, setIpAmazon] = useState(null);
    const [ipApiData, setIpApiData] = useState(null);
    const [speedTestIp, setSpeedTestIp] = useState(null);
    const [ipCn, setipCn] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchIps = async () => {
            try {
                // Fetch IP from Amazon's service
                const amazonResponse = await axiosInstance.get('/');
                setIpAmazon(amazonResponse);

                // Fetch IP from ip-api.com
                const ipApiResponse = await axiosInstance1.get('/');
                setIpApiData(ipApiResponse);

                // // Fetch IP from speedtest.cn
                const speedTestResponse = await axiosInstance2.get('/');
                setSpeedTestIp(speedTestResponse);

                const ipCnResponse = await axiosInstance2.get('/');
                setipCn(ipCnResponse);

                setLoading(false);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchIps();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Your IP Addresses</h1>
            <p>IP from Amazon's service: {ipAmazon}</p>
            <p>IP from ip-api.com: {JSON.stringify(ipApiData, null, 2)}</p>
            <p>IP from speedtest.cn: {JSON.stringify(speedTestIp, null, 2)}</p>
            <p>IP from ip cn: {JSON.stringify(ipCn, null, 2)}</p>
        </div>
    );
}

export default IpFetcher;
