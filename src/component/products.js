import React, { useState, useEffect } from 'react';
import axios from "axios";
const Products = () => {
    const [items, setItems] = useState([]);
    const [all, setAll] = useState(0);

    useEffect(() => {

        const axiosData = async () => {
            const res = await axios.get("https://fakestoreapi.com/products")
            const data = await res.data
            // console.log(data);
            setItems(data);
        }
        axiosData();
    }, [])

    function grandTotal() {
        const total = items.reduce((sum, i) => {
            sum = i.price + sum;
            // console.log(sum);
            return sum
        }, 0)
        console.log(total);
        setAll(all + total);
        return total;
    }

    return (
        <div style={{ margin: "45px" }}>
            <h1>Vendor Table</h1>
            <table className='table table-bordered' style={{ marginTop: "15px", marginBottom: "20px" }}>
                <tbody >
                    <tr>
                        <th>S.NO</th>
                        <th>NAME OF PRODUCT</th>
                        <th>PRICE</th>
                        <th>CATEGORY</th>
                        <th>QTY</th>
                        <th>TOTAL</th>
                    </tr>
                    {
                        items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title.split(" ").slice(0, 3)}</td>
                                <td>{item.price}$</td>
                                <td>{item.category}</td>
                                <td>{item.id}</td>
                                <td>{item.price * item.id}$</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <button onClick={grandTotal} style={{ marginRight: "15px" }}><b>Grand Total </b></button> <span style={{ marginRight: "-825px" }}><b>{all}$</b></span>
        </div>
    )
}

export default Products
