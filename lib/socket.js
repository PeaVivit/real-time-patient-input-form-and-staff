import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production"
    ? "https://real-time-patient-input-form-and-staff-production.up.railway.app"
    : "http://localhost:4000";

export const socket = io(URL, {
  transports: ["websocket"],
});