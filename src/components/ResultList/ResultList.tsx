import React from 'react';
//import css from "./ResultList.module.css";
import { NoImage } from '../NoImage/NoImage';
import { Movie } from '@/models/interfaces/movie';

interface ResultsProps {
    result: Movie[];

}

export const ResultList: React.FC<ResultsProps> = (props) => {
    return <>
        <span className='mb-8 mt-1'>{props.result.length} results</span>

        <div className="flex flex-col gap-y-4">

            {
                props.result.map((movies: Movie) => {


                    return <div key={movies.id} className="flex flex-row gap-x-4 max-w-sm sm:max-w-3xl">
                        {
                            movies.cover ? <img className="h-32 min-w-32" src={movies.cover} alt="" /> : <NoImage />
                        }
                        <div className='flex flex-col'>
                            <h1 className="font-black text-xl">{movies.title}</h1>
                            <div className=" ">{movies.overview}</div>
                        </div>
                    </div>

                })
            }
        </div>
    </>
}