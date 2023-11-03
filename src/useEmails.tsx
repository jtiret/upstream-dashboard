import { useQuery } from "@tanstack/react-query";

export type EmailResponse = {
  id: string;
  universal_message_id: string;
  in_reply_to: string | null;
  from: string;
  to: string;
  cc: string;
  body: string;
  subject: string;
  date: string;
};

const fetchEmails = async (): Promise<EmailResponse[]> => {
  const response = await fetch("https://my-json-server.typicode.com/jtiret/upstream-sync/emails");

  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }

  return response.json();
};

export const useEmails = () => {
  return useQuery({
    queryKey: ["emails"],
    queryFn: fetchEmails,
  });
};
