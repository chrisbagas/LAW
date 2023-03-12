import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Divider, Input, useColorMode, Select } from '@chakra-ui/react'
import { InputGroup, Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import AnimeList from '../components/AnimeList'
import AdvancedSearch from '../components/AdvancedSearch'
import StudioSearch from '../components/StudioSearch'
import { AnimeData } from '../components/animeObject'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [data, setData] =useState<AnimeData[]>();
  const [title, setTitle] = useState("");
  const [Bool, setBool] = useState(false);
  const [studioData, setStudioData] = useState<String[]>();
  const [animeSearch, setAnimeSearch] = useState(true);
  const [studioSearch, setStudioSearch] = useState(false);
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const queryHandle = (event: any) => {
    setTitle(event.target.value)
  }
  const handleButtonSearch = () => {
    if (title!="") {
      console.log(title)
      const obj = {title: {title}}
      fetch('http://127.0.0.1:8000/main/',{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj.title)
      }).then(res => {
        if(!res.ok){
          throw Error('FETCH GAGAL');
        }
        return res.json();
      }).then(list => {
        setData(list.result);
        console.log(list);
        setBool(true);
      })
      .catch(err => {

      })
    }
  }

  const handleButtonAnime = () => {
    setStudioSearch(false);
    setAdvancedSearch(false);
    setAnimeSearch(true);
  }
  const handleButtonStudio = () => {
    setStudioSearch(true);
    setAdvancedSearch(false);
    setAnimeSearch(false);
  }
  const handleButtonAdvanced= () => {
    setStudioSearch(false);
    setAdvancedSearch(true);
    setAnimeSearch(false);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>WSE</title>
        <meta name="description" content="WSE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SemWeb <a href="">Wibu Search Engine</a>
        </h1>
        <p className={styles.description}>
          WSE is a semantic web search engine using myAnimeList as its data. Hence its name WSE (Weaboo Search engine)
        </p>
        <Box m={2}>
        <Stack spacing = {4} direction='row' align='center'>
        <Button colorScheme='cyan' variant='outline'  onClick={handleButtonAnime}>WIBU</Button>
        <Button colorScheme='cyan' variant='outline'  onClick={handleButtonStudio}>Studio</Button>
        <Button colorScheme='cyan' variant='outline'  onClick={handleButtonAdvanced}>Advanced Search</Button>
        </Stack>
        </Box>

        {animeSearch && <Box w='80%' textAlign='center'>
        <Input w="100%" className="anime-search" placeholder='Search' value={title} onChange={queryHandle} />
        <Button colorScheme='cyan' variant='outline' mt='4' onClick={handleButtonSearch}>Search</Button> 
        </Box>}
        {studioSearch && <StudioSearch/>}

        {advancedSearch && <AdvancedSearch/>}
        

        {data && animeSearch && <Box mt='16' h='100vh' id='resultSearch' >
          <AnimeList data={data}/>
        </Box>}

      </main>
    </div>
  )
}