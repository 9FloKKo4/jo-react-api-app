import React, { Component } from "react";
import SearchComp from './SearchComp.jsx';

class FaqSearcher extends Component {
  render () {
    const pageTitle = "FAQ";
    const slogan = "Tout savoir sur les JO 2024";
    const dataId = "paris-2024-faq";
    const dataType1 = "topics";
    const dataType2 = "label";
    const dataType3 = "body"
    const tableData1 = "Sujet";
    const tableData2 = "Question";
    const tableData3 = "Réponse"
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

export default FaqSearcher;