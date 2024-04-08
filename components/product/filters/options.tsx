"use client";

import { Accordion, Checkbox, Label, Select } from "flowbite-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

export default function Options() {
  const [priceRange, setPriceRange] = useState([0, 100]);

  function changePriceRange(event: any) {
    setPriceRange(event);
  }

  return (
    <form action="">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>Categoría</Accordion.Title>
          <Accordion.Content>
            <Select id="category" required>
              <option value="1">Gas industrial</option>
              <option value="2">Gas doméstico</option>
            </Select>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>Marca</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col h-[200px] overflow-hidden overflow-y-auto p-2 gap-2">
              <div className="flex gap-4 items-center">
                <Checkbox id="brand" />
                <Label htmlFor="brand">Costagas</Label>
              </div>
              <div className="flex gap-4 items-center">
                <Checkbox id="brand" />
                <Label htmlFor="brand">Llamagas</Label>
              </div>
              <div className="flex gap-4 items-center">
                <Checkbox id="brand" />
                <Label htmlFor="brand">Primax</Label>
              </div>
              <div className="flex gap-4 items-center">
                <Checkbox id="brand" />
                <Label htmlFor="brand">Solgas</Label>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>Precio</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col">
              <label className="flex justify-between mb-2">
                <span className="text-sm">S/. {priceRange[0]}</span>
                <span className="text-sm">S/. {priceRange[1]}</span>
              </label>
              <Slider
                styles={{
                  track: { backgroundColor: "#070707" },
                  handle: { backgroundColor: "#fff", borderColor: "#000" },
                }}
                range
                value={priceRange}
                onChange={(e) => changePriceRange(e)}
              />
            </div>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>Vendedor</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col h-[160px] overflow-hidden overflow-y-auto p-2 gap-2">
              <div className="flex gap-4 items-center">
                <Checkbox id="age" />
                <Label htmlFor="age">Gas Norte S.A.</Label>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </form>
  );
}
