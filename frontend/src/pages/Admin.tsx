import { useEffect, useState } from "react";
import axios from "axios";

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function Admin() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/messages")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">
        Contact Messages
      </h2>
      <div className="bg-white shadow rounded-xl overflow-x-auto">
        <table className="min-w-full table-auto border">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-4 text-left font-semibold text-sm text-blue-800">
                Name
              </th>
              <th className="p-4 text-left font-semibold text-sm text-blue-800">
                Email
              </th>
              <th className="p-4 text-left font-semibold text-sm text-blue-800">
                Message
              </th>
              <th className="p-4 text-left font-semibold text-sm text-blue-800">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id} className="border-t hover:bg-gray-100">
                <td className="p-4">{msg.name}</td>
                <td className="p-4">{msg.email}</td>
                <td className="p-4">{msg.message}</td>
                <td className="p-4 text-sm text-gray-500">
                  {new Date(msg.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
            {messages.length === 0 && (
              <tr>
                <td className="p-4 text-center" colSpan={4}>
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
