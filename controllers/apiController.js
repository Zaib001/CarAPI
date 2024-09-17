const axios = require('axios');
const { apiToken } = require('../config/config');

const fetchData = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiToken}`,  
        'Content-Type': 'application/json',
      },
    });
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}: `, error.message);
    return { error: 'Failed to fetch data' };
  }
};

exports.getApiData = async (req, res) => {
  const { endpoint, lang } = req.params;
  const driverId = req.query.driverId || '';  

  const validEndpoints = {
    GetDriverProfile: `https://gpro.net/${lang}/backend/api/v2/DriProfile${driverId ? `?driverId=${driverId}` : ''}`,
    GetTDProfile: `https://gpro.net/${lang}/backend/api/v2/TDProfile`,
    GetCar: `https://gpro.net/${lang}/backend/api/v2/UpdateCar`,
    GetSponsorNegotiations: `https://gpro.net/${lang}/backend/api/v2/NegOverview`,
    GetStaffFacilities: `https://gpro.net/${lang}/backend/api/v2/StaffAndFacilities`,
    GetRaceAnalysis: `https://gpro.net/${lang}/backend/api/v2/RaceAnalysis`,
    GetAvailDrivers: `https://gpro.net/${lang}/backend/api/v2/AvailDrivers`,
    GetAvailTDs: `https://gpro.net/${lang}/backend/api/v2/AvailTDs`,
  };

  if (!validEndpoints[endpoint]) {
    return res.status(400).json({ error: 'Invalid endpoint' });
  }

  const url = validEndpoints[endpoint];
  const data = await fetchData(url);

  res.json(data);
};
