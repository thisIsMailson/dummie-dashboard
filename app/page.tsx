"use client";
import React, { useState } from "react";
import LineGraphComponent from "./components/LineGraph";
import FilterComponent from "./components/Filter";
import PieChartComponent from "./components/PiechartComponent";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [energyData, setEnergyData] = useState([
    { name: "Jan", value: 100, building: "Building A" },
    { name: "Feb", value: 150, building: "Building A" },
    { name: "Mar", value: 200, building: "Building A" },
    { name: "Jan", value: 120, building: "Building B" },
    { name: "Feb", value: 140, building: "Building B" },
    { name: "Mar", value: 180, building: "Building B" },
    { name: "Apr", value: 180, building: "Building A" },
    { name: "May", value: 210, building: "Building A" },
    { name: "Jun", value: 250, building: "Building A" },
    { name: "Apr", value: 110, building: "Building B" },
    { name: "May", value: 260, building: "Building B" },
    { name: "Jun", value: 220, building: "Building B" },
  ]);
  const filterOptions = [
    { label: "Building A", value: "Building A" },
    { label: "Building B", value: "Building B" },
  ];

  const filteredData = selectedFilter
    ? energyData.filter((item) => item.building === selectedFilter)
    : energyData;

  const data = [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 150 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 180 },
    { name: "May", value: 210 },
    { name: "Jun", value: 250 },
    { name: "Jul", value: 220 },
    { name: "Aug", value: 230 },
    { name: "Sep", value: 190 },
    { name: "Oct", value: 160 },
    { name: "Nov", value: 180 },
    { name: "Dec", value: 210 },
  ];
  const buildingData = [
    {
      building: "Building A",
      data: [
        { name: "Jan", value: 100 },
        { name: "Feb", value: 150 },
        { name: "Mar", value: 200 },
      ],
    },
    {
      building: "Building B",
      data: [
        { name: "Jan", value: 120 },
        { name: "Feb", value: 160 },
        { name: "Mar", value: 180 },
      ],
    },

  ];
  const totalEnergyConsumption = buildingData.map((building) => ({
    name: building.building,
    value: building.data.reduce((acc, curr) => acc + curr.value, 0),
  }));
  return (
    <div>
      <h1>Energy Dashboard</h1>
      <FilterComponent
        options={filterOptions}
        onSelectFilter={setSelectedFilter}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "50%" }}>
          <LineGraphComponent data={filteredData} />
          <LineGraphComponent data={energyData} />
        </div>
        <div style={{ width: "50%", marginLeft: "10%" }}>
          <PieChartComponent data={totalEnergyConsumption} />
        </div>
      </div>
    </div>
  );
}
