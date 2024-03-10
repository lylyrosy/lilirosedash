import React,{useEffect, useState} from 'react';
import Line from './line';
import Head from '../../components/head';


const Linechart = () => {

    const [data, setData] = useState([]);



    useEffect(() => {
        // Récupérer les données du localStorage
        const storedData = localStorage.getItem('budgetDataline');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []); // Le tableau vide indique que useEffect s'exécutera une fois après le premier rendu
    return (
        <div>
            <Head titre={"LINE CHART"} soustitre={"Coucou Lili Rose , N'oublie pas que chaque point représente une étape vers ton épanouissement personnel. Continue de briller ! !"}/>

                        <Line data= {data} isdash={false}   />

        </div>
    );
}

export default Linechart;
