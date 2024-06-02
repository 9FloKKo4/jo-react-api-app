import React, { Component } from "react";
import SearchComp from './SearchComp.jsx';

class CulturalEvents extends Component {
  render () {
    const pageTitle = "Evenements Culturels";
    const slogan = "Retrouvez l'ensemble des évènements culturels des JO 2024";
    const dataId = "paris-2024-evenements-olympiade-culturelle";
    const dataType1 = "name";
    const dataType2 = "nom_de_la_structure_c";
    const dataType3 = "adresse_c"
    const tableData1 = "Nom";
    const tableData2 = "Structure";
    const tableData3 = "Date de début"
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

export default CulturalEvents;