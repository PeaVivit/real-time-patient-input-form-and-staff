"use client";

import { useEffect, useState } from "react";
import { socket } from "../../lib/socket";
import Card from "../../components/ui/Card";
import StatusBadge from "../../components/ui/StatusBadge";
import AnimatedField from "../../components/ui/AnimatedField";

export default function StaffPage() {
  const [patient, setPatient] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    socket.on("patient:data", (payload) => {
      setPatient(payload.data);
      setStatus(payload.status);
    });
    return () => socket.off("patient:data");
  }, []);
  if (!patient.firstName) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500 animate-pulse">
          Waiting for patient data...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-6 text-gray-500">
      <Card>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Staff Dashboard</h1>
          <StatusBadge status={status} />
        </div>

        <div className="grid grid-cols-1 gap-4 animate-fade-in">            
          <AnimatedField label="First Name" value={patient.firstName} />
          <AnimatedField label="Last Name" value={patient.lastName} />
          <AnimatedField label="Email" value={patient.email} />
          <AnimatedField label="Phone" value={patient.phone} />
        </div>
      </Card>
    </div>
  );
}