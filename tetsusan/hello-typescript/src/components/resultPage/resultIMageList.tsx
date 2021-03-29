import React, {FC, useState} from "react";
import firebase from '../../firebase';
import {TileData} from "../../types/types";


const ImageItemList: FC = () => {
  const [data, setData] = useState<TileData[]>([]);

  const getData = async (searchWord: string | undefined) => {
    const db = firebase.firestore();
    const tileDataRef = db.collection("tileData");
    const searchedData = tileDataRef.where("keyword", "array-contains", searchWord);
    const snapShot = await searchedData.get();
    const temporaryData: object[] = [];

    snapShot.docs.map(doc => {
      temporaryData.push(doc.data());
    })

    setData(temporaryData as TileData[]);
  }

  return (
    <div>

    </div>
  )
}