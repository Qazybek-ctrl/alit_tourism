
// Import translation helper
import { translateTourCommon } from './tourTranslations.js';

// Function to get localized tours
export const getLocalizedTours = (language = 'en') => {
    const Tours = require('./ImageHelper.jsx').Tours;

    return Tours.map(tour => ({
        ...tour,
        duration: translateTourCommon(tour.duration, language),
        touristInfo: tour.touristInfo?.map(info => ({
            ...info,
            title: translateTourCommon(info.title, language),
            texts: info.texts?.map(text => translateTourCommon(text, language))
        })),
        tourInfo: tour.tourInfo?.map(info => ({
            ...info,
            title: translateTourCommon(info.title, language),
            texts: info.texts?.map(text => translateTourCommon(text, language))
        }))
    }));
};
