import React, { Component } from "react";
import SearchComp from './SearchComp.jsx';

class CentresPrepa extends Component {
  render () {
    const formatAddress = (location) => {
        return `${location.name}, ${location.postcode} ${location.city}, ${location.county}, ${location.administrative}, ${location.country}`;
      };
    const pageTitle = "Centres de Préparation";
    const slogan = "Retrouvez l'ensemble des Centres de Préparation aux Jeux de Paris 2024";
    const dataId = "paris-2024-centres-de-preparation-aux-jeux";
    const dataType1 = "title";
    const dataType2 = "special_features";
    const dataType3 = "location";
    const tableData1 = "Nom du Centre";
    const tableData2 = "Aménagements";
    const tableData3 = "Adresse"

   

    
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

export default CentresPrepa;