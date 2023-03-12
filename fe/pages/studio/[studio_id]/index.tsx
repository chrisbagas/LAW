import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import { Box, Input, useColorMode, Image, Text } from '@chakra-ui/react'
import { InputGroup, Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AnimeData } from '../../../components/animeObject'
import AnimeList from '../../../components/AnimeList'
export default function StudioDetail(){
    const router = useRouter();
    const [studioId, setStudioId] = useState("");
    const [data, setData] = useState<AnimeData[]>();
    const [Bool, setBool] = useState(false);
    useEffect(() => {
        setStudioId(router.query.studio_id as string);
        if(studioId){
            const obj = {studioId: { studioId } }
        fetch('http://127.0.0.1:8000/main/anime-studio', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj.studioId)
        }).then(res => {
            if (!res.ok) {
                throw Error('FETCH GAGAL');
            }
            return res.json();
        }).then(list => {
            setData(list.result);
            setBool(true);
        })
            .catch(err => {
    
            })
        }
    }, [studioId, router.query])

  return(
    <div>
        {data && <Box textAlign='center'>
            <h1 className={styles.anime_title}>ANIME MADE BY {studioId.slice(3, )}</h1>
            <AnimeList data={data}/>
            </Box>}
    </div>
  )
}