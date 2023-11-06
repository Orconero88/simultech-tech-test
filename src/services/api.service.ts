import axios, { AxiosResponse } from 'axios';
import { Result, SearchMovieDbApiResponse } from '../models/api/searchMovieDbApiResponse'
import { Movie } from '@/models/interfaces/movie';

export async function getMovieByName(text: string | string[] | undefined): Promise<Movie[]> {
    if (!text) return []

    const apiResponse: AxiosResponse<SearchMovieDbApiResponse> = await axios.get<SearchMovieDbApiResponse>(`https://api.themoviedb.org/3/search/movie?query=${text}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);

    return apiResponse.data.results.map((res: Result) => {
        const movie: Movie = {
            id: res.id,
            title: res.title,
            overview: res.overview,
            cover: res.poster_path ? "https://image.tmdb.org/t/p/w500/" + res.poster_path : "https://placehold.co/85x128/222/222"
        }
        return movie;
    });
}

