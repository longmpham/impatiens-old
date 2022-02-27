import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProductListAsync = () => {

    const [loading, setLoading] = useState(false);
    const [nailList, setNailList] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            // loading...
            setLoading(true);

            const result = await axios.get('./data.json');
            console.log(result);
            setNailList(result.data);
            setLoading(false);
        }
        fetchData();
    }, []);
      
    return(
        <div>
            {loading ? (<h4>Loading...</h4>) :
            (nailList.map((nail) =>
                <div key={nail.id}>
                    <h1>{nail.title}</h1>
                    <h1>{nail.price}</h1>
                    <h1>{nail.description}</h1>
                </div>
            ))}
        </div>
    )

}

export default ProductListAsync