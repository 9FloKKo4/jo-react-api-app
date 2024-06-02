import React, { Component } from "react";
import SearchComp from "./SearchComp.jsx";


class ShopsMain extends Component {
  render() {
    const pageTitle = "Boutiques Officielles";
    const slogan =
      "Retrouvez toutes les boutiques officielles à proximité des sites de compétitions des JO 2024.";
    const dataId = "paris-2024-boutiques-officielles";
    const dataType1 = "title";
    const dataType2 = "address";
    const dataType3 = "ville"
    const tableData1 = "Nom";
    const tableData2 = "Adresse";
    const tableData3 = "Ville";
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
  }
}

export default ShopsMain;
