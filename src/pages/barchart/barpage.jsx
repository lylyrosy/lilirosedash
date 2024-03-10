import React,{useEffect, useState} from 'react';
import Barchart from './barchart';
import Head from '../../components/head';

const Barpage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Récupérer les données du localStorage
        const storedData = localStorage.getItem('budgetDatabar');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []); // Le tableau vide indique que useEffect s'exécutera une fois après le premier rendu
    return (
        <div>
            <Head titre={"BAR CHART"} soustitre={"Regarde cette jolie bande de diagramme, Rose ! C'est une représentation colorée de ton bien-être !"}/>

                        <Barchart data= {data} isbar={false} />

        </div>
    );
}

export default Barpage;
