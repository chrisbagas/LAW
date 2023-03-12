import styles from '../../../styles/Home.module.css'
import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AnimeData } from '../../../components/animeObject'
import AnimeList from '../../../components/AnimeList'
export default function StudioDetail() {
    const router = useRouter();
    const [studioId, setStudioId] = useState("");
    const [data, setData] = useState<AnimeData[]>();
    useEffect(() => {
        setStudioId(router.query.studio_id as string);
        if (studioId) {
            const obj = { studioId: { studioId } }
            fetch('http://35.209.28.142/main/anime-studio', {
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
            })
        }
    }, [studioId, router.query])

    return (
        <div>
            {data && <Box textAlign='center'>
                <h1 className={styles.anime_title}>ANIME MADE BY {studioId.slice(3,)}</h1>
                <AnimeList data={data} />
            </Box>}
        </div>
    )
}