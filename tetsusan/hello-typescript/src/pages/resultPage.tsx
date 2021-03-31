import React, {FC} from "react";
import TopHeader from "../components/topPage/topHeader";
import ImageItemList from "../components/resultPage/resultIMageList"

const ResultPage: FC = () => {
  return(
    <div>
      <TopHeader />
      <ImageItemList />
    </div>
  )
}

export default ResultPage;