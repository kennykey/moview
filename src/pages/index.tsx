import HomeLayout from "@/component/layout/HomeLayout";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [movie, setMovie] = useState([]);
  const [popular, setPopular] = useState([]);
  const [rated, setTopRated] = useState([]);
  const [coming, setUpComing] = useState([]);

  const truncateOverview = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  useEffect(() => {
    const handleNowPlaying = async () => {
      const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTJkOGNjMDRlZjc0MDIwNzZkNjJiODMxNmU3NzNmNSIsIm5iZiI6MTcxOTkyNTU5NC4zMjAwMjEsInN1YiI6IjY2ODM3NTY5MzA5OTA2ZGI0MDFlNmVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W-00nk_Fbxb0naN4pcykqJpc1OYCVZjWeSD30fFMfcM'
        },
      });
      setMovie(response.data.results);  
    }

    const handlePopuler = async () => {
      const responsePopular = await axios.get("https://api.themoviedb.org/3/movie/popular", {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTJkOGNjMDRlZjc0MDIwNzZkNjJiODMxNmU3NzNmNSIsIm5iZiI6MTcxOTkyNTU5NC4zMjAwMjEsInN1YiI6IjY2ODM3NTY5MzA5OTA2ZGI0MDFlNmVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W-00nk_Fbxb0naN4pcykqJpc1OYCVZjWeSD30fFMfcM'
        },
      });
      setPopular(responsePopular.data.results);  
    }

    const handleRated= async () => {
      const responseRated = await axios.get("https://api.themoviedb.org/3/movie/top_rated", {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTJkOGNjMDRlZjc0MDIwNzZkNjJiODMxNmU3NzNmNSIsIm5iZiI6MTcxOTkyNTU5NC4zMjAwMjEsInN1YiI6IjY2ODM3NTY5MzA5OTA2ZGI0MDFlNmVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W-00nk_Fbxb0naN4pcykqJpc1OYCVZjWeSD30fFMfcM'
        },
      });
      setTopRated(responseRated.data.results);  
    }

    const handleComing = async () => {
      const responseComing = await axios.get("https://api.themoviedb.org/3/movie/upcoming", {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTJkOGNjMDRlZjc0MDIwNzZkNjJiODMxNmU3NzNmNSIsIm5iZiI6MTcxOTkyNTU5NC4zMjAwMjEsInN1YiI6IjY2ODM3NTY5MzA5OTA2ZGI0MDFlNmVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W-00nk_Fbxb0naN4pcykqJpc1OYCVZjWeSD30fFMfcM'
        },
      });
      setUpComing(responseComing.data.results);  
    }

    handleNowPlaying();
    handlePopuler();
    handleRated();
    handleComing();
  }, []);

  console.log(coming);
  
  

  return (
      <HomeLayout>
        <section>
            <h2 className="text-3xl font-bold text-center mt-5">Now Playing</h2>
            <div className="flex flex-wrap">
              {movie.slice(0, 4).map((item: any, index) => (
                <div className="max-w-sm mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden m-5 w-60" key={index}>
                  <div className="md:shrink-0 px-8 pt-4">
                      <Image className="h-30 w-full object-cover md:h-full md:w-30" src={"https://image.tmdb.org/t/p/original" + item.poster_path} alt={item.original_title} width={300} height={300} />
                  </div>
                  <div className=" py-3 px-8 top-0 w-60">
                    <h5 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center">{item.original_title}</h5>
                    <p className="mt-2 text-slate-500 text-sm">{truncateOverview(item.overview, 100)}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>

        <section>
            <h2 className="text-3xl font-bold text-center mt-5">Popular</h2>
            <div className="flex flex-wrap">
              {popular.slice(0, 4).map((item: any, index) => (
                <div className="max-w-sm mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden m-5 w-60" key={index}>
                  <div className="md:shrink-0 px-8 pt-4">
                      <Image className="h-30 w-full object-cover md:h-full md:w-30" src={"https://image.tmdb.org/t/p/original" + item.poster_path} alt={item.original_title} width={300} height={300} />
                  </div>
                  <div className=" py-3 px-8 top-0 w-60">
                    <h5 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center">{item.original_title}</h5>
                    <p className="mt-2 text-slate-500 text-sm">{truncateOverview(item.overview, 100)}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>

        <section>
            <h2 className="text-3xl font-bold text-center mt-5">Top Rated</h2>
            <div className="flex flex-wrap">
              {rated.slice(0, 4).map((item: any, index) => (
                <div className="max-w-sm mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden m-5 w-60" key={index}>
                  <div className="md:shrink-0 px-8 pt-4">
                      <Image className="h-30 w-full object-cover md:h-full md:w-30" src={"https://image.tmdb.org/t/p/original" + item.poster_path} alt={item.original_title} width={300} height={300} />
                  </div>
                  <div className=" py-3 px-8 top-0 w-60">
                    <h5 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center">{item.original_title}</h5>
                    <p className="mt-2 text-slate-500 text-sm">{truncateOverview(item.overview, 100)}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>
        
        <section>
            <h2 className="text-3xl font-bold text-center mt-5">Coming Soon</h2>
            <div className="flex flex-wrap">
              {coming.slice(0, 4).map((item: any, index) => (
                <div className="max-w-sm mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden m-5 w-60" key={index}>
                  <div className="md:shrink-0 px-8 pt-4">
                      <Image className="h-30 w-full object-cover md:h-full md:w-30" src={"https://image.tmdb.org/t/p/original" + item.poster_path} alt={item.original_title} width={300} height={300} />
                  </div>
                  <div className=" py-3 px-8 top-0 w-60">
                    <h5 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center">{item.original_title}</h5>
                    <p className="mt-2 text-slate-500 text-sm">{truncateOverview(item.overview, 100)}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>
      </HomeLayout>
  );
}
