import { Box, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Head from '../../components/head';

import Pie from "./pie";

const currencies = [
  { value: "Janvier", label: "Janvier" },
  { value: "Février", label: "Février" },
  { value: "Mars", label: "Mars" },
  { value: "Avril", label: "Avril" },
  { value: "Mai", label: "Mai" },
  { value: "Juin", label: "Juin" },
  { value: "Juillet", label: "Juillet" },
  { value: "Août", label: "Août" },
  { value: "Septembre", label: "Septembre" },
  { value: "Octobre", label: "Octobre" },
  { value: "Novembre", label: "Novembre" },
  { value: "Décembre", label: "Décembre" },
  { value: "Tous", label: "Tous" },


];

const Piechart = () => {
  const { register } = useForm();

  const [data, setData] = useState([]);

  const [message, setMessage] = useState("");


  useEffect(() => {
    // Charger les données du mois de janvier par défaut
    handleMonthChange({ target: { value: "Janvier" } });
  }, []);



  useEffect(() => {
    // Vérifier si un mois est déjà sélectionné dans le localStorage
    const selectedMonth = localStorage.getItem("selectedMonth");
    if (!selectedMonth) {
      // Si aucun mois n'est sélectionné, utiliser janvier par défaut
      localStorage.setItem("selectedMonth", "Janvier");
    }
  }, []);

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    localStorage.setItem("selectedMonth", selectedMonth);
    console.log("Mois sélectionné :", selectedMonth);

    let storedData;

    switch (selectedMonth) {
      case "Janvier":
        storedData = localStorage.getItem("budgetDatajanv");
        break;
      case "Février":
        storedData = localStorage.getItem("budgetDatafev");
        break;
      case "Mars":
        storedData = localStorage.getItem("budgetDatamar");
        break;

      case "Avril":
        storedData = localStorage.getItem("budgetDataavr");
        break;

      case "Mai":
        storedData = localStorage.getItem("budgetDatamai");
        break;

      case "Juin":
        storedData = localStorage.getItem("budgetDatajuin");
        break;

      case "Juillet":
        storedData = localStorage.getItem("budgetDatajuil");
        break;

      case "Août":
        storedData = localStorage.getItem("budgetDataaout");
        break;

      case "Septembre":
        storedData = localStorage.getItem("budgetDatasep");
        break;

      case "Octobre":
        storedData = localStorage.getItem("budgetDataoct");
        break;

      case "Novembre":
        storedData = localStorage.getItem("budgetDatanov");
        break;
      case "Décembre":
        storedData = localStorage.getItem("budgetDatadec");
        break;

        case "Tous":
          storedData = localStorage.getItem("piemois");
          break

      

      // Ajoutez des cas pour les autres mois
      default:
        storedData = null;
        break;
    }

    if (storedData) {
      setData(JSON.parse(storedData)); // Le résultat de localStorage.getItem("********") est une chaîne de caractères JSON, je dois la parser en utilisant JSON.parse() pour obtenir un tableau d'objets avant de le fournir au composant ResponsivePie.
    }else {
        // Si les données sont vides, définir un Pie vide
        setData([]);
        setMessage("Aucune donnée disponible pour ce mois.");

      }
  };

  return (
    <Box component="form">

<Head titre={"PIE CHART"} soustitre={"Lili, regarde ce magnifique diagramme en camembert ! C'est une douce représentation de ton bien-être!"}/>

      <TextField
        {...register("mois")}
        select
        label="Mois"
        defaultValue="Janvier"
        onChange={handleMonthChange}
        helperText="Please select month"
        variant="filled"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {data.length > 0 ? (
        <Pie data={data} ispie={false} />
      ) : (
        <p style={{ textAlign: "center", fontStyle: "italic" }}>{message}</p>
      )}
    
    </Box>
  );
};

export default Piechart;

