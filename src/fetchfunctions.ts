import axios from "axios";

const SPACE_ID = 'j4ahkdodtsz5'
const CONTENTFUL_API_ACCESS_TOKEN = 'oL0mevmlPOGheC2bU-etFyLY-ACLtncwu4oTgBSYp1s'
const endpoint = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries`;
export async function getPortfolioEntries() {
    try {
        const res = await axios.get(endpoint, {
            headers: {
                Authorization: `Bearer ${CONTENTFUL_API_ACCESS_TOKEN}`
            }
        })
        return await res?.data
    }
    catch (error) {
        console.error(error)
    }
}