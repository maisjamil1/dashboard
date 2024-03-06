import * as React from "react";
import { useState } from "react";
import { Feature } from "@/types";
interface Props {
  drones: Feature[];
  setViewState: (val: any) => void;
}

const ControlPanel: React.FC<Props> = ({ drones, setViewState }) => {
  const nonSDBCount = drones.filter(
    (drone) => !drone.properties.registration.startsWith("SD-B"),
  ).length;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <div className="hidden md:block control-panel text-left">
      <h3 className={"px-6 py-4 text-[15px] font-bold"}>
        {" "}
        DRONE FLYING {nonSDBCount}
      </h3>
      <div className="flex justify-between px-6 py-2">
        <p className="border-b-4 border-red-600">Drons</p>
        <p>Flight History</p>
      </div>
      <ul>
        {drones.map((drone, index) => (
          <li
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              setViewState({
                latitude: drone.geometry.coordinates[1],
                longitude: drone.geometry.coordinates[0],
                zoom: 15,
                bearing: 0,
                pitch: 0,
              });
            }}
            className={`py-2 px-6  ${selectedIndex == index ? "bg-gray-800" : ""}`}
          >
            <h4>{drone.properties.Name}</h4>
            <div className="flex justify-between">
              <div className="px-2">
                <p className="text-[9px]"> {"Serial#"}</p>

                {drone.properties.serial}
              </div>
              <div className="px-2">
                {" "}
                <p className="text-[9px]"> {"Registration#"}</p>
                <div className="flex justify-between items-center">
                  <div>{drone.properties.registration}</div>
                  <div
                    className={`items-center w-3 h-3  rounded-full ${drone.properties.registration.startsWith("SD-B") ? "bg-[#00FF00]" : "bg-[#d00]"}`}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-2">
              <div className="px-2">
                <p className="text-[9px]"> {"Pilot"}</p>

                {drone.properties.pilot}
              </div>
              <div className="px-2">
                {" "}
                <p className="text-[9px]"> {"Organization"}</p>
                {drone.properties.organization}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ControlPanel);
