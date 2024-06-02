import React, { Component } from "react";
import SearchComp from './SearchComp.jsx';

class SitesCompetition extends Component {
  render () {
    const pageTitle = "Sites de Compétition";
    const slogan = "Retrouvez l'ensemble des sites de Compétitions des JO 2024";
    const dataId = "paris-2024-sites-de-competition";
    const dataType1 = "nom_site";
    const dataType2 = "sports";
    const dataType3 = "start_date"
    const tableData1 = "Nom";
    const tableData2 = "Sports";
    const tableData3 = "Ouverture du site"
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

export default SitesCompetition;