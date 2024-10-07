import React from "react";
import useProductStore from "@/app/store/store";
// import { createOrder } from "@/app/lib/wordpress/auth";

const AddToCartButton: React.FC = () => {
    const selectedChain = useProductStore(state => state.selectedChain);
    const selectedMetal = useProductStore(state => state.selectedMetal);
    const selectedLeftChainModel = useProductStore(state => state.selectedLeftChainModel);

    const handleAddToCart = async () => {
        try {
            const orderData = {
                payment_method: "bacs",
                payment_method_title: "Direct Bank Transfer",
                set_paid: true,
                billing: {
                    first_name: "John",
                    last_name: "Doe",
                    address_1: "969 Market",
                    address_2: "",
                    city: "San Francisco",
                    state: "CA",
                    postcode: "94103",
                    country: "US",
                    email: "john.doe@example.com",
                    phone: "(555) 555-5555"
                },
                shipping: {
                    first_name: "John",
                    last_name: "Doe",
                    address_1: "969 Market",
                    address_2: "",
                    city: "San Francisco",
                    state: "CA",
                    postcode: "94103",
                    country: "US"
                },
                line_items: [
                    {
                        product_id: 93, // Replace with actual product ID
                        quantity: 1,
                        meta_data: [
                            {
                                key: "Chain",
                                value: selectedChain
                            },
                            {
                                key: "Metal",
                                value: selectedMetal
                            },
                            {
                                key: "Chain Type",
                                value: selectedLeftChainModel !== null ? `Model ${selectedLeftChainModel + 1}` : 'Not selected'
                            }
                        ]
                    }
                ],
                shipping_lines: [
                    {
                        method_id: "flat_rate",
                        method_title: "Flat Rate",
                        total: "10.00"
                    }
                ]
            };

            // const response = await createOrder(orderData);
            const response = { ok: true, json: () => Promise.resolve({}) };

            if (!response.ok) {
                throw new Error('Failed to create order');
            }

            const data = await response.json();
            console.log("Order created:", data);
            // Handle successful order creation (e.g., show a success message, update cart UI)
        } catch (error) {
            console.error("Error creating order:", error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
        </button>
    );
};

export default AddToCartButton;