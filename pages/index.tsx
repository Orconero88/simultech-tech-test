import { useState } from 'react';
import { getMovieByName } from '../src/services/api.service';
import { ResultList } from '@/components/ResultList/ResultList';
import Searchbar from '@/components/Searchbar/Searchbar';
import { Movie } from '@/models/interfaces/movie';
import { GetServerSidePropsContext } from 'next';
import '../src/app/globals.css';

interface HomeProps {
  results: Movie[],
  searchText: string
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const searchText: string | string[] | undefined = context.query.searchText ?? "";
  const res = await getMovieByName(searchText);
  return { props: { results: res, searchText: searchText } };
}

export default function Home(props: HomeProps) {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 gap-y-0">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <Searchbar searchText={props.searchText} />
        <ResultList result={props.results} />

      </div>
    </main>
  )
}



