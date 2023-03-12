import { Box, Divider, Input, useColorMode, Select, Grid, GridItem, Checkbox, CheckboxGroup,Radio, RadioGroup  } from '@chakra-ui/react'
import { InputGroup, Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'
import { error } from 'console'
import { SetStateAction, useEffect, useState } from 'react'
import { AdvanceObject } from './AdvanceObject'
import styles from '../styles/Home.module.css'
import { Genre } from './AdvanceObject'
import { AnimeData } from './animeObject'
import AnimeList from './AnimeList'
const AdvancedSearch = () => {
    const [data, setData] = useState<AdvanceObject>()
    const [animeList, setAnimeList] = useState<AnimeData[]>()
    var arrayGenre = new Array();
    const handleButtonAdvancedSearch = () => {
        console.log(JSON.stringify({genre: Object.keys(genres), themes:Object.keys(theme), demo:Object.keys(demos), type: type, score: score, start_year:start_year, start_season:start_season, status: status, sort_score:sort_score }))
        fetch('https://wse-be.up.railway.app/main/advance', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({genre: Object.keys(genres), themes:Object.keys(theme), demo:Object.keys(demos), type: type, score: score, start_year:start_year, start_season:start_season, status: status, sort_score:sort_score })
          
        }).then(res => {
          if (!res.ok) {
            throw Error('FETCH GAGAL');
          }
          return res.json();
        }).then(list => {
          console.log(list)
          setAnimeList(list.result);
          console.log("ini animeList")
          console.log(animeList)
        })
          .catch(err => {
    
          })
      
    }
    const [sort_score, setSort_Score] = useState("desc");
    const [type, setType] = useState("");
    const [start_season, setStart_Season] = useState("");
    const [score, setScore] = useState("");
    const [status, setStatus] = useState("");
    const [start_year, setYear] = useState("");
    let genres = {} as any
    let theme = {} as any
    let demos = {} as any
    useEffect(() => {
      fetch('https://wse-be.up.railway.app/main/advance-data').then(res => {
        if(!res.ok){
          throw Error('FETCH GAGAL');
        }
        return res.json();
      }).then(list => {
        setData(list);
        console.log(list);
      }).catch(err => {

      })
    }, [])
    
    const genreData = data?.genre
    const themeData = data?.theme
    const demoData = data?.demo
    const statusData = data?.status
    const tipeData = data?.tipe
    
    const handleGenreCheckBox = (e: any) => {
      if(e.target.checked==true){
        genres[e.target.value as any] = true
      }else if(e.target.checked==false){
        delete genres[e.target.value as any]
      }
      console.log(Object.keys(genres))
    }
    const handleThemeCheckBox = (e: any) => {
      if(e.target.checked==true){
        theme[e.target.value as any] = true
      }else if(e.target.checked==false){
        delete theme[e.target.value as any]
      }
      console.log(Object.keys(theme))
    }
    const handleDemoCheckBox = (e: any) => {
      if(e.target.checked==true){
        demos[e.target.value as any] = true
      }else if(e.target.checked==false){
        delete demos[e.target.value as any]
      }
      console.log(Object.keys(demos))
    }
    const handleRadioButton = (e: { target: { value: SetStateAction<string> } }) => {
      setSort_Score(e.target.value);
      console.log(e.target.value)
    }
    const handleScoreOption = (e: any) => {
      setScore(e.target.value);
    }
    const handleType = (e: any) => {
      setType(e.target.value);
    }
    const handleStatus = (e: any) => {
      setStatus(e.target.value);
    }
    const handleSeason = (e:any) => {
      setStart_Season(e.target.value);
    }
    const handleYear = (e:any) => {
      setYear(e.target.value);
    }
    return (
        
        <Box w='80%' textAlign='center'>
        <h1 className={styles.info_title}>Filter</h1>

        <HStack className={styles.filter_main}>
        <p className={styles.tes}><strong>Type</strong></p> 
        <Select placeholder='Select Type' onChange={handleType}>
          <option value='ova'>OVA</option>
          <option value='tv'>TV</option>
          <option value='ona'>ONA</option>
          <option value='movie'>MOVIE</option>
          <option value='music'>MUSIC</option>
          <option value='special'>SPECIAL</option>
        </Select>
        </HStack>

        <HStack className={styles.filter_main}>
        <p className={styles.tes}><strong>Score</strong></p>
        <Select placeholder='Select Score' onChange={handleScoreOption}>
          <option value='10'>(10) Masterpiece</option>
          <option value='9'>(9) Great</option>
          <option value='8'>(8) Very Good</option>
          <option value='7'>(7) Good</option>
          <option value='6'>(6) Fine</option>
          <option value='5'>(5) Average</option>
          <option value='4'>(4) Bad</option>
          <option value='3'>(3) Very Bad</option>
          <option value='2'>(2) Horrible</option>
          <option value='1'>(1) Appalling</option>
        </Select>
        </HStack>

        <HStack className={styles.filter_main}>
        <p className={styles.tes}><strong>Status</strong></p>
        <Select placeholder='Select Status' onChange={handleStatus}>
          <option value='finished_airing'>Finished Airing</option>
          <option value='currently_airing'>Currently Airing</option>
          <option value='not_yet_aired'>Not Yet Aired</option>
        </Select>
        </HStack>

        <HStack className={styles.filter_main}>
        <p className={styles.tes}><strong>Season</strong></p>
        <Select placeholder='Select Season' onChange={handleSeason}>
          <option value='spring'>Spring</option>
          <option value='summer'>Summer</option>
          <option value='winter'>Winter</option>
          <option value='fall'>Fall</option>
        </Select>
        </HStack>

        <HStack className={styles.filter_main}>
        <p className={styles.tes}><strong>Year</strong></p>
        <select className={styles.new} onChange={handleYear}>
          <option value=''> Select Year </option>
          {[...Array(107).keys()].map((item, index) => {
            return (  
              <option value={2023 - item} key={index}>
                {2023 - item}
              </option>
            )
          })}
        </select>
        </HStack>

        <h1 className={styles.info_title}>Content Filter</h1>
        
        <Grid templateColumns='repeat(3, 1fr)' gap={10}>
          <GridItem w='100%' >
          <h1 className={styles.content_title}>Genre</h1>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
              {genreData?.map((datas, index) => (
                <GridItem pl='2' key={index}>
                  <div className="genrelist" >
                    <Checkbox onChange={handleGenreCheckBox} value={datas?.genreId.value.slice(24, )} >{datas?.genreName.value}</Checkbox>
                  </div>
                </GridItem>
              ))}
            </Grid>
          </GridItem>

          <GridItem w='100%' >
          <h1 className={styles.content_title}>Theme</h1>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
              {themeData?.map((datas, index) => (
                <GridItem pl='2' key={index}>
                  <div className="genrelist" >
                    <Checkbox onChange={handleThemeCheckBox} value={datas?.themeId.value.slice(24, )} >{datas?.themeName.value}</Checkbox>
                  </div>
                </GridItem>
              ))}
            </Grid>
          </GridItem>

          <GridItem w='100%' >
          <h1 className={styles.content_title}>Demo</h1>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
              {demoData?.map((datas, index) => (
                <GridItem pl='2' key={index}>
                  <div className="genrelist" >
                    <Checkbox onChange={handleDemoCheckBox} value={datas?.demographicId.value.slice(24, )} >{datas?.demographicName.value}</Checkbox>
                  </div>
                </GridItem>
              ))}
            </Grid>
          </GridItem>
        </Grid>

        <p className={styles.sort_title}><strong>Sort by Score</strong></p>
        <div className={styles.sort_score}>
          <RadioGroup className={styles.sort_score} defaultValue='desc'>
            <Stack spacing={5} direction='row'>
              <Radio  colorScheme='blue' value='desc' onChange={handleRadioButton}>
                Descending
              </Radio>
              <Radio colorScheme='blue' value='asc' onChange={handleRadioButton}>
                Ascending
              </Radio>
            </Stack>
          </RadioGroup>
        </div>
        <Button colorScheme='cyan' variant='outline' mt='4' onClick={handleButtonAdvancedSearch}>Search</Button> 
        {animeList && <Box mt='16' h='100vh' id='resultSearch' >
          <AnimeList data={animeList}/>
        </Box>}
        </Box>

          
     );
}
 
export default AdvancedSearch;