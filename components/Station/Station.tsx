/** @format */

import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import Router from "next/router";
import { Station } from "../../store/interfaces/station.types";

interface Props {
  station: Station;
}

const StationCard: NextPage<Props> = (props) => {
  const { station_id, name, public_name, latitude, longitude, timezone } =
    props.station;

  const onClickLiveDataHandler = () => {
    Router.push(
      {
        pathname: `/readings/[station-id]`,
        query: {
          station_id,
        },
      },
      `/readings/${station_id}?param=${station_id}`,
      { shallow: true }
    );
  };

  return (
    <Grid.Container gap={3} justify="center">
      <Grid xs={12} md={6}>
        <Card
          variant="bordered"
          css={{
            w: "100%",
            h: "300px",
            $$cardColor: "$colors$primary",
          }}>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://littlevisuals.co/images/the_pines.jpg"
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Weather Station background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#00000044",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}>
            <Row align="center">
              <Col>
                <Text color="white" weight="bold" size={20}>
                  {public_name}
                </Text>
                <Text color="yellow" weight="bold" size={15}>
                  {latitude} | {longitude}
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button
                    onPress={onClickLiveDataHandler}
                    auto
                    rounded
                    color="primary"
                    target="_blank">
                    View Readings
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default StationCard;
