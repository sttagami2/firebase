import React, {FC, useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

import firebase from '../../firebase';
import {TileDate} from "../../types/types";


const ImageItemList: FC = () => {
  const [data, setData] = useState<TileDate[]>([]);
  const { keyword } = useParams<TileDate>();

  const getData = async (searchWord: string | undefined) => {
    const db = firebase.firestore();
    const tileDataRef = db.collection("tileData");
    const searchedData = tileDataRef.where("keyword", "array-contains", searchWord);
    const snapShot = await searchedData.get();
    const temporaryData: object[] = [];

    snapShot.docs.map(doc => {
      temporaryData.push(doc.data());
    })

    setData(temporaryData as TileDate[]);
  }

  useEffect(() => {
    getData(keyword)
  }, []);

  return (
    <div>
      {data.map((tile) => (
        <div>
          <img src={tile.image} alt={tile.title} />        
        </div> 
      ))} 
    </div>
  )
}