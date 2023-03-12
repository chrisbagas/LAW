import { useState } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import { AnimeData } from './animeObject';
import Link from 'next/link';
const AnimeList = ({data}: {data:AnimeData[]}) => {
  console.log(data);
  
    return (  
        <div>
          <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            {data.map((datas, index) => (
              <GridItem pl='2' key={index}>
                <div className="animelist" >
                    <Link href={`/ex:${datas.animeId.value.slice(24, )}`}>
                    <img src={datas?.main_picture===undefined ? "-" : datas?.main_picture.value} alt="" />
                    <h2 className={styles.title_list}>{datas.animeTitle.value}</h2>
                    </Link>
                </div>
              </GridItem>
          ))}
          </Grid>
        </div>
    );
}
 
export default AnimeList;