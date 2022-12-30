/** @format */

import { NextPage } from "next";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStationData } from "../store/station-actions";

import { Container } from "@nextui-org/react";
import StationCard from "../components/Station/Station";

const Home: NextPage = () => {
  const station = useSelector((state: any) => state.station);  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStationData() as any);
  }, [dispatch]);

  return (
    <Container>
      <StationCard station={station.station} />
    </Container>
  );
};

export default Home;
