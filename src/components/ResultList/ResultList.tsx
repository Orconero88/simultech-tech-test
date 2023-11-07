import React from 'react';
import { Movie } from '@/models/interfaces/movie';

interface ResultsProps {
    result: Movie[];
}

export const ResultList: React.FC<ResultsProps> = (props) => {
    return <>
        <span className='mt-1'>{props.result.length} results</span>

        <div id="resultList" className="mt-6 flex flex-col gap-y-4">
            {
                props.result.map((movies: Movie) => {
                    return <div key={movies.id} className="flex flex-row gap-x-4 max-w-sm sm:max-w-3xl border border-gray-300 p-1 rounded-md shadow-md">
                        <div className="flex min-w-fit">
                            <div className="m-auto">
                                <img className="flex align-middle h-32 rounded-md" src={movies.cover} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className="font-black text-xl">{movies.title}</h1>
                            <p>{movies.overview}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </>
}
export default ResultList;