import React from "react";
import { useEmails } from "./useEmails";
import "./EmailList.css";

export const EmailList: React.FC = () => {
  const { data: emails, error, isLoading } = useEmails();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="table-container">
        <table className="email-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>From</th>
              <th>To</th>
              <th>Date</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {emails?.map((email, index) => {
              const date = new Date(email.date);
              const dateFormatted = date.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              });

              return (
                <tr key={index}>
                  <td>{email.subject}</td>
                  <td>{email.from}</td>
                  <td>{email.to}</td>
                  <td>{dateFormatted}</td>
                  <td className="body" dangerouslySetInnerHTML={{ __html: email.body }}></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="stats">
        <div>Total emails: {emails?.length}</div>
      </div>
    </>
  );
};
