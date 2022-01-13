import { motion } from 'framer-motion';
import React from 'react';
import Countdown from 'react-countdown';
import { fadeIn, fadeInUp } from '../../../utils/Constants';

const CountdownTimer = ({ date }) => (
  <Countdown
    autoStart
    date={Date.parse(date)}
    renderer={({ days, hours, minutes, seconds }) => (
      <motion.div className="space-y-6 text-center" variants={fadeIn}>
        <span className="block font-salsa">
          Hitung Mundur Acara{' '}
          <span className="text-indigo700">Resepsi Pernikahan</span>
        </span>
        <div className="flex gap-x-3 items-center justify-center">
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center space-y-0 bg-white p-3 rounded-xl shadow-lg"
          >
            <span className="font-salsa text-2xl font-bold">{days}</span>
            <span className="font-roboto text-xs text-gray-700">Hari</span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center space-y-0 bg-white p-3 rounded-xl shadow-lg"
          >
            <span className="font-salsa text-2xl font-bold">{hours}</span>
            <span className="font-roboto text-xs text-gray-700">Jam</span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center space-y-0 bg-white p-3 rounded-xl shadow-lg"
          >
            <span className="font-salsa text-2xl font-bold">{minutes}</span>
            <span className="font-roboto text-xs text-gray-700">Menit</span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center space-y-0 bg-white p-3 rounded-xl shadow-lg"
          >
            <span className="font-salsa text-2xl font-bold">{seconds}</span>
            <span className="font-roboto text-xs text-gray-700">Detik</span>
          </motion.div>
        </div>
      </motion.div>
    )}
  />
);

export default CountdownTimer;
