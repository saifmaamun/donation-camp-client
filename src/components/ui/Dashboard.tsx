"use client";

import { useAppSelector } from "@/redux/hooks";

const DashboardPage = () => {
  const { email, role } = useAppSelector((state) => state.user);
  return (
    <div className="my-6 text-center mx-auto space-y-6">
      <h1>
        WelCome <span className="text-4xl text-cyan-800">{email}</span>
      </h1>
      <h1>
        You are an <span className="text-6xl text-cyan-800">{role}</span> user
      </h1>
      <h1>Feel free to roam aroun your data and donations</h1>
      {role === "user" && (
        <p>
          Though You Are Seeing The Graph Button, You Cannot Access This page.
          Only An Admin can Visit There. What`s In There? It`s Secret, shhh....
        </p>
      )}
    </div>
  );
};

export default DashboardPage;
