import { Box, Divider, Input, useColorMode, Select } from '@chakra-ui/react'
import { InputGroup, Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react';
import StudioList from './StudioList';
import { StudioData } from './StudioObject';
const StudioSearch = () => {
    const [studio, setStudio] = useState("");
    const [data, setData] = useState<StudioData[]>();
    const queryHandle = (event: any) => {
        setStudio(event.target.value);
    }
    const handleButtonStudioSearch = () => {
        if(studio!=""){
            const obj = {studio: {studio}}
      fetch('https://wse-be.up.railway.app/main/studio',{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj.studio)
      }).then(res => {
        if(!res.ok){
          throw Error('FETCH GAGAL');
        }
        return res.json();
      }).then(list => {
        setData(list.result);
        console.log(list);
      })
      .catch(err => {

      })
        }
    }
    return ( 
        <Box w='80%' textAlign='center'>
        <Input w="100%" className="anime-search" placeholder='Search Studio' value={studio} onChange={queryHandle} />
        <Button colorScheme='cyan' variant='outline' mt='4' onClick={handleButtonStudioSearch}>Studio Search</Button> 
        <Box mt='8'>
        {data && <StudioList data={data}/>}
        </Box>
        </Box>
        
     );
}

export default StudioSearch;