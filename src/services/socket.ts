import { io, Socket } from "socket.io-client";
import { FlightsRespons } from "@/types";

class SocketService {
  socket: Socket;

  constructor() {
    this.socket = io(import.meta.env.VITE_SOCKET_URL);
  }

  connect() {
    this.socket.on("connect", () => {
      console.log("Connected to socket server");
    });
  }

  listenForMessages(callback: (data: any) => void) {
    this.socket.on("message", (data: FlightsRespons) => {
      callback(data);
    });
  }

  disconnect() {
    if (this.socket) this.socket.disconnect();
  }
}

export const socketService = new SocketService();
