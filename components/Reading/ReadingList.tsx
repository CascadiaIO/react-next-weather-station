/** @format */

import { Table } from "@nextui-org/react";

import type { NextPage } from "next";
import { Ob } from "../../store/interfaces/reading.types";
import { convertFromEpoch } from "../../utils/utils";

interface Props {
  readings: Ob[];
}

const ReadingList: NextPage<Props> = (props) => {
  const readings: Ob[] = [];

  if (props.readings && props.readings.length) {
    props.readings.map((r: any) => {
      readings.push(r);
    });
  }

  return (
    <Table
      aria-label="Reading"
      bordered
      color="primary"
      css={{
        height: "auto",
        minWidth: "100%",
      }}>
      <Table.Header>
        <Table.Column>TIMESTAMP</Table.Column>
        <Table.Column>TEMP</Table.Column>
        <Table.Column>HUMIDITY</Table.Column>
        <Table.Column>BAROMETRIC</Table.Column>
      </Table.Header>
      <Table.Body>
        {readings.map((reading) => (
          <Table.Row key={reading.timestamp}>
            <Table.Cell>{convertFromEpoch(reading.timestamp)}</Table.Cell>
            <Table.Cell>{reading.air_temperature}&#8457;</Table.Cell>
            <Table.Cell>{reading.relative_humidity}%</Table.Cell>
            <Table.Cell>{reading.barometric_pressure}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ReadingList;
