import Countries from '../models/country.model.js';

export const getCountries = async (req, res) => {
    console.log(req);
    try {
        console.log('getCountries');
        const document = await Countries.findOne({});
        res.json(document.countries);
    } catch (err) {
        res.status(500).send(err);
    }
};
