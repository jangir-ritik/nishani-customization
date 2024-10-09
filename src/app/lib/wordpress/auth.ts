"use client"
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from "axios";
import { useEffect } from "react";

const customAxiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

// Remove any attempt to set User-Agent
delete customAxiosInstance.defaults.headers.common['User-Agent'];

export const api = new WooCommerceRestApi({
    url: "https://nishanistudio.com",
    consumerKey: "ck_96d94f775b205d983c24968ee9054914dcb3a00b",
    consumerSecret: "cs_18884552606f1cd6e53c0bb6a3ecc18b1dfd98d0",
    version: "wc/v3",
    axiosConfig: {
        ...customAxiosInstance.defaults,
    }
});

// Add this interface above the createOrder function
// interface OrderData {
//     payment_method: string;
//     payment_method_title: string;
//     set_paid: boolean;
//     billing: {
//         first_name: string;
//         last_name: string;
//         address_1: string;
//         address_2?: string;
//         city: string;
//         state: string;
//         postcode: string;
//         country: string;
//         email: string;
//         phone: string;
//     };
//     line_items: Array<{
//         product_id: number;
//         quantity: number;
//     }>;
// }

// Update the createOrder function
// export const createOrder = async (orderData: OrderData) => {
//     try {
//         const response = await api.post("orders", orderData);
//         return response.data;
//     } catch (error) {
//         console.error("Error creating order:", error);
//         throw error;
//     }
// }