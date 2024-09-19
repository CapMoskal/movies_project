import { CarouselRender } from '../../components/Carousel/CarouselRender'
import { LinesRender } from '../../components/Lines/LinesRender'
import { useMoviesCarousel } from '../../components/Carousel/useMoviesCarousel'
import { useMoviesLines } from '../../components/Lines/useMoviesLines'
import { Loading } from '../../components/Loading/Loading'

export const MainPage = () => {
  const { errorCarousel, statusCarousel, listCarousel } =
    useMoviesCarousel()
  const { errorLines, statusLines, genresObject } = useMoviesLines()

  if (statusCarousel === 'loading') return <Loading />
  return (
    <div>
      <CarouselRender
        list={listCarousel}
        status={statusCarousel}
        error={errorCarousel}
      />
      <LinesRender
        genresObject={genresObject}
        error={errorLines}
        status={statusLines}
      />
    </div>
  )
}
