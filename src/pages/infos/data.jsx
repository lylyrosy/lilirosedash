export let rows = [
  { id: 1, nomm: 'Lili Rose', pree: 'Lili Rose', age :'mzmzmmzmz', mail: '' , adress:'', ville:'mzmzmmzmz',pays:'mzmzmmzmz', res:'ossmmsms', notes:'lslslslsl'},
  { id: 2, nomm: 'Lili Rose', pree: 'Lili Rose',age:'mzmzmmzmz', mail: '' , adress:'', ville:'mzmzmmzmz', pays:'mzmzmmzmz',res:'ossmmsms', notes:'lslslslsl'},
];




export const columns = [
  { field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: "center" },
  { field: 'nom', headerName: 'Nom', flex: 1, align: 'center', headerAlign: "center" },
  { field: 'pre', headerName: 'Prénom',flex: 1, align: 'center', headerAlign: "center" },
  { field: 'tel', headerName: 'tel', flex: 1, align: 'center', headerAlign: "center" },

  { field: 'Age', headerName: 'Age', flex: 1, align: 'center', headerAlign: "center" },

  
  { field: 'email', headerName: 'E-mail', flex: 1, align: 'center', headerAlign: "center" },
  { field: 'adress', headerName: 'Adresse', flex: 1, align: 'center', headerAlign: "center" },
  { field: 'ville', headerName: 'Ville ', flex: 1, align: 'center', headerAlign: "center" },
  { field: 'pays', headerName: 'Pays', flex: 1, align: 'center', headerAlign: "center" },

  { field: 'res', headerName: 'Réseaux sociaux', flex: 1, align: 'center', headerAlign: "center" },
  { field: 'notes', headerName: 'Notes', flex: 1, align: 'center', headerAlign: "center" },
];

export const addRow = (newData) => {
  rows = [...rows, { ...newData, id: rows.length + 1 }];
};
