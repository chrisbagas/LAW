import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import React from 'react'
import ReactPlayer from 'react-player'
import { Image, Text, AspectRatio, GridItem, Grid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AnimeDetailObject } from '../../components/AnimeDetailObject'
import { CharacterList } from '../../components/CharacterList'

export default function AnimeDetail() {
  const router = useRouter();
  const [animeId, setAnimeId] = useState("");
  const [data, setData] = useState<AnimeDetailObject>();
  const [data2, setData2] = useState<CharacterList[]>([]);

  useEffect(() => {
    setAnimeId(router.query.anime_id as string);
    if (animeId) {
      const obj = {animeId: { animeId } }
      fetch('http://35.209.28.142:8000/main/detail', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj.animeId)
      }).then(res => {
        if (!res.ok) {
          throw Error('FETCH GAGAL');
        }
        return res.json();
      }).then(list => {
        console.log(list)
        setData(list.result[0]);
        console.log("ini data")
        console.log(data)
        setData2(list.character)
      })
    }
  }, [animeId, router.query])
  //getAnimeId
  console.log(data2)

  if(data){
    console.log("data ada")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{data?.title.value}</title>
        <meta name="description" content="WSE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main_info}>
        <div className={styles.main_left} >
          <Image alt="gambar" src={data?.main_picture===undefined ? "-" : data?.main_picture.value}/>
          <h2 className={styles.score}>Score : {data?.score===undefined ? "?" : data?.score.value}</h2>
          <div>
            <h3 className={styles.info_title}>Alternative Title</h3>
            <p><strong>Japanese: </strong>{data?.title_japanese===undefined ? "-" : data?.title_japanese.value}</p>
            <br />
            <p><strong>English: </strong>{data?.title_english===undefined ? "-" : data?.title_english.value}</p>

            <h3 className={styles.info_title}>Information</h3>
            <p><strong>Type: </strong>{data?.type===undefined ? "?" : data?.type.value}</p>
            <p><strong>Episodes: </strong>{data?.episodes===undefined ? "?" : data?.episodes.value}</p>
            <p><strong>Status: </strong>{data?.status.value}</p>
            <p><strong>Aired: </strong>{data?.real_start_date===undefined ? "?" : data?.real_start_date.value} to {data?.real_end_date===undefined ? "?" : data?.real_end_date.value}</p>
            <p><strong>Premiered: </strong>{data?.start_season===undefined ? "?" : data?.start_season.value} {data?.start_year===undefined ? "?" : data?.start_year.value}</p>
            <p><strong>Broadcast: </strong>-</p>
            <p><strong>Producers: </strong>{data?.producer===undefined ? "?" : data?.producer.value}</p>
            <p><strong>Licensors: </strong>{data?.licensor===undefined ? "?" : data?.licensor.value}</p>
            <p><strong>Studios: </strong>{data?.studio===undefined ? "?" : data?.studio.value}</p>
            <p><strong>Source: </strong>{data?.source===undefined ? "?" : data.source.value}</p>
            <p><strong>Genres: </strong>{data?.genre===undefined ? "?" : data?.genre.value}</p>
            <p><strong>Theme: </strong>{data?.theme===undefined ? "?" : data?.theme.value}</p>
            <p><strong>Demographic: </strong>{data?.demographic===undefined ? "?" : data?.demographic.value}</p>
            <p><strong>Duration: </strong>{data?.episode_duration===undefined ? "?" :data?.episode_duration.value}</p>
            <p><strong>Rating: </strong>{data?.rating===undefined ? "?" :data?.rating.value}</p>

            <h3 className={styles.info_title}>Statistics</h3>
            <p><strong>Members: </strong>{data?.members===undefined ? "?" :data.members.value}</p>
            <p><strong>Favorites: </strong>{data?.favorites===undefined ? "?" :data.favorites.value}</p>
          </div>
        </div>

        <div className={styles.main_right}>
          <h1 className={styles.anime_title}>{data?.title.value}</h1>
          <Text className={styles.teks}>
          {data?.synopsis===undefined ? "?" : data.synopsis.value}
          </Text>
          <h3 className={styles.info_det}>Trailer</h3>
          {data?.trailer_url===undefined ? " " :
          <AspectRatio maxW='560px' ratio={16 / 9}>
            <ReactPlayer url={data.trailer_url.value} controls={true} />

          </AspectRatio>
          }
          <br />
          <h3 className={styles.info_det}>Characters</h3>
          <Grid templateColumns='repeat(2, 1fr)' gap={6}>
              
            {data2?.map((datas, index) => (
              <GridItem pl='2' key={index}>
                  <div className="animelist" >
                      <p className={styles.character}>{datas?.charactersLabel?.value}</p>
                      <h2>{datas?.genderLabel?.value}</h2>
                      <p>{datas?.actorsLabel?.value}</p>
                  </div>
                </GridItem>
            ))}
          </Grid>
        </div>
      </div>


    </div>
  )
}
