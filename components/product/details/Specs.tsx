"use client"
import { Table } from "flowbite-react";
import { ProductSpecs } from "types/Product";

interface Props {
  specs?: ProductSpecs[];
}
export default function Specs({ specs }: Props) {
  return (
    <div className="overflow-x-auto w-full">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Value</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {specs?.map((spec) => {
            return (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {spec.specName}
                </Table.Cell>
                <Table.Cell>{spec.specValue}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
