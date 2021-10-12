import { API_URL } from "../utils/constants";

export async function inventario(products) {
    try {
        const url = `${API_URL}/auth/local/CRUDE`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",                
            },
            body: JSON.stringify(products),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;        
    }   catch (error) {
        console.log(error);
        return null;
    }
}