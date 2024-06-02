import React, { Component } from "react";
import SearchComp from './SearchComp.jsx';

class Volonteers extends Component {
  render () {
    const pageTitle = "Carte d'aide pour les Volontaires Paris 2024";
    const slogan = "Trouvez tous les points d'intérêt des JO Paris 2024";
    const dataId = "carte-aide-volontaires";
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

export default Volonteers;