import React, { Component } from "react";
import SearchComp from './SearchComp.jsx';

class Velos extends Component {
  render () {
    const pageTitle = "Parkings à vélos";
    const slogan = "Trouvez tous les parkings à vélos mis à disposition pour les JO 2024";
    const dataId = "paris-2024-parkings-velo-spectateurs-en-idf";
    const dataType1 = "nom_site";
    const dataType2 = "nom_du_parking_velo";
    const dataType3 = "adresse_du_parking_velo"
    const tableData1 = "Site";
    const tableData2 = "Parking";
    const tableData3 = "Adresse parking"
    return (
      <div>
        <SearchComp 
          pageTitle={pageTitle}
          slogan={slogan}
          dataId={dataId}
          dataType1={dataType1}
          dataType2={dataType2}
          dataType3={dataType3}
          tableData1={tableData1}
          tableData2={tableData2}
          tableData3={tableData3}
        />
      </div>
    );
  };
};

export default Velos;