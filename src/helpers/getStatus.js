import axios from "axios";

export default async function getStatus() {
    try {
        const response = await axios.get('https://backend.gatortech.dev/items/Globals', {
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log(response);

        return response?.data?.data?.status;

    } catch (error) {

        console.log('Error getting status:' + error);

        return 'Error';
    }
}