
export let rows = JSON.parse(localStorage.getItem('rows')) || [];

export const getRows = () => rows;


  export const addRow = (newData) => {


  // Générer un ID unique pour la nouvelle ligne
  const id = rows.length + 1;
  // Ajouter l'ID à la nouvelle donnée
  newData.id = id;
  // Ajouter la nouvelle ligne au tableau rows
 
     rows = [...rows, newData];


     
  localStorage.setItem('rows', JSON.stringify(rows));

   // Vérifier si le tableau rows n'est pas vide
  //  if (rows.length > 0) {
  //   // Récupérer le dernier élément (dernière ligne) du tableau rows
  //   let lastRow = rows[rows.length - 1];
  //   // Récupérer le titre de la dernière ligne
  //   let lastTitle = lastRow.titre;
  //   localStorage.setItem('lastact',lastTitle  );

  //   // Récupérer la longueur du tableau rows
  //   let nb = rows.length;
  //   localStorage.setItem('nbact', nb);



  //   // Retourner le dernier titre et la longueur du tableau
    

  // } else {
  //   // Si le tableau rows est vide, retourner des valeurs par défaut
  //   localStorage.setItem('lastact',"Aucune activité"  );
  //   localStorage.setItem('nbact', "0");

  // }







  
  };

 export const handleDelete = (idToDelete) => {


  
    // Filtrer les lignes pour exclure la ligne à supprimer
const updatedRows = rows.filter(row => row.id !== idToDelete);


// Mettre à jour le localStorage avec les lignes filtrées
localStorage.setItem('rows', JSON.stringify(updatedRows));




  // Vérifier si le tableau rows n'est pas vide
  if (updatedRows.length > 0) {
    // Récupérer le dernier élément (dernière ligne) du tableau rows
    let lastRow = updatedRows[updatedRows.length - 1];
    // Récupérer le titre de la dernière ligne
    let lastTitle = lastRow.titre;
    localStorage.setItem('lastact',lastTitle  );

    // Récupérer la longueur du tableau rows
    let nb = updatedRows.length;
    localStorage.setItem('nbact', nb);



    // Retourner le dernier titre et la longueur du tableau
    

  } else {
    // Si le tableau rows est vide, retourner des valeurs par défaut
    localStorage.setItem('lastact',"Aucune activité"  );
    localStorage.setItem('nbact', "0");

  }









  };
