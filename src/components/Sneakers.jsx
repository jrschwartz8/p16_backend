import { useState, useEffect } from 'react';

export default function Sneakers(props) {

    const [allSneakers, setAllSneakers] = useState([]);

    useEffect(() => {
        fetch("https://sneaks-api.azurewebsites.net/home", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setAllSneakers(data);
            // setLoading(false);
            // window.scrollTo({
            //     top: 625,
            //     behavior: 'smooth'
            // })
        })
        .catch(err => alert("No Products Found"));
    }, []);

    return <div>
        <h1>Sneakers</h1>
    </div>
}