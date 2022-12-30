/** @format */

import { NextPage } from "next";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Card, Col, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import ReadingList from "../../components/Reading/ReadingList";
import { fetchReadingData } from "../../store/reading-actions";

const Readings: NextPage = () => {
  const dispatch = useDispatch();

  const { query } = useRouter();
  const stationId = query["station-id"];

  const reading = useSelector((state: any) => state.reading.reading);

  useEffect(() => {
    dispatch(fetchReadingData(stationId as string) as any);
  }, [dispatch, stationId]);

  return (
    <Container>
      <h2>{reading.public_name}</h2>

      {/* TODO: Live Reading Card */}
      <Card css={{ marginTop: "25px" }}>
        <Card.Header>
          <Col css={{ width: "100%" }}>
            <Text weight={"bold"} size={40} css={{ textAlign: "center" }}>
              Last Reading
            </Text>
          </Col>
        </Card.Header>
        <Card.Body>
          <ReadingList readings={reading.obs} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Readings;
