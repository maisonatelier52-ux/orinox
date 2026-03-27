import { MetadataRoute } from 'next';

export const dynamic = 'force-static';


export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://orinoxholding.com';
    const lastModified = new Date();

    return [
        { url: `${baseUrl}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
        { url: `${baseUrl}/home/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/orinox-services/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/operations/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/regions/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/contracts/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/technology/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/ep-services/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/upstream/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/midstream/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/investors/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/esg/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/case-studies-projects/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/team/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/insights/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/contact/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/orinox-oil-gas-drilling-infrastructure/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    ];
}
