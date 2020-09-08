import React, { useMemo } from 'react'
import { getHeroeByPublisher } from '../../selectors/getHeroeByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({publisher}) => {

    const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher]);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
           {
               heroes.map( hero => (
                   <HeroeCard 
                        key={hero.id}
                        { ...hero }

                   />
               ))
           } 
        </div>
    )
}
