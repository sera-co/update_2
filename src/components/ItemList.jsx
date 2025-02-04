import Item from "./Item";
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;
import axios from "axios";
import { useState, useEffect } from "react";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(API_URI)
            .then((res) => {
                setItems(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URI}/${id}`);
            setItems(items.filter(item => item.id !== id));
        } catch (er) {
            console.log(er.message);
        }
    };

    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} onDelete={handleDelete} />
            ))}
        </>
    );
};

export default ItemList;
