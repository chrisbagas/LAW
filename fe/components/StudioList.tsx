import { useState } from 'react'
import { StudioData } from './StudioObject';
import Link from 'next/link';
const StudioList = ({data}: {data:StudioData[]}) => {
    return ( 
        <div>
            {data.map((datas, index) => (
                <div className="studioList" key={index}>
                    <Link href={`studio/ex:${datas.studioid.value.slice(24, )}`}>
                        <h2>{datas.studioName.value}</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default StudioList;