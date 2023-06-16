import { useNavigate } from "@remix-run/react";
import { Center, Grid } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { Caro } from "./carousel.comp";
import { billBoardMockData } from "./util.lib";
import { Moca } from "./moviecard.comp";

// import { useSetRecoilState } from 'recoil';
// import { MoviesState } from '../state/reservationState';
// import { useNavigate } from 'react-router-dom';
export function Billboard() {
  // const setReserveMovie = useSetRecoilState(MoviesState)
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ height: "25em" }}>
        <Caro />
      </div>
      <div
        style={{
          marginTop: "18em",
        }}
      >
        <Center>
          <h1>CARTELERA</h1>
        </Center>
        <Grid
          justify="center"
          align="stretch"
          style={{
            marginInline: "5em",
          }}
        >
          {billBoardMockData.map((movie) => {
            return (
              <Grid.Col span={3} key={useId()}>
                <Moca
                  title={movie.title}
                  link={movie.poster}
                  sinopsis={movie.sinopsis}
                  onReserveClick={() => {
                    //setReserveMovie(movie);
                    //navigate("/reserva")
                  }}
                />
              </Grid.Col>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Billboard;
