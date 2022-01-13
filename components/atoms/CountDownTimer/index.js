import React from "react";
import Countdown from "react-countdown";

export const CountdownTimer = ({ date }) => (
  <Countdown
    autoStart
    date={Date.parse(date)}
    renderer={({ days, hours, minutes, seconds }) => (
      <div className="space-y-6 text-center">
        <span className="block font-salsa">
          Hitung Mundur Acara{" "}
          <span className="text-yellow-500">Resepsi Pernikahan</span>
        </span>
        <div className="flex gap-x-3 items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-0 bg-white p-3 rounded-xl shadow-lg">
            <span className="font-salsa text-2xl font-bold">{days}</span>
            <span className="font-roboto text-xs text-gray-700">Hari</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-0 bg-white p-3 rounded-xl shadow-lg">
            <span className="font-salsa text-2xl font-bold">{hours}</span>
            <span className="font-roboto text-xs text-gray-700">Jam</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-0 bg-white p-3 rounded-xl shadow-lg">
            <span className="font-salsa text-2xl font-bold">{minutes}</span>
            <span className="font-roboto text-xs text-gray-700">Menit</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-0 bg-white p-3 rounded-xl shadow-lg">
            <span className="font-salsa text-2xl font-bold">{seconds}</span>
            <span className="font-roboto text-xs text-gray-700">Detik</span>
          </div>
        </div>
      </div>
    )}
  />
);
