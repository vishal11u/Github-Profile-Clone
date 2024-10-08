"use client";
import React from "react";
// import Layout from "../components/Layout";
// import ProfileColumn from "../components/ProfileColumn";
// import ContentColumn from "../components/ContentColumn";
import { Button } from "@/components/ui/button";
import { RiHomeLine } from "react-icons/ri";

const Home: React.FC = () => {
  // const repositories = [
  //   {
  //     name: "CoreJava",
  //     owner: "Vishal10feb",
  //     language: "Java",
  //   },
  //   {
  //     name: "ProjectManagementTool",
  //     owner: "Vishal10feb",
  //     language: "TypeScript",
  //   },
  //   {
  //     name: "Core-Java-Advanced",
  //     owner: "Vishal10feb",
  //     language: "Java",
  //   },
  //   {
  //     name: "SpringBootApp",
  //     owner: "Vishal10feb",
  //     language: "Java",
  //   },
  //   {
  //     name: "ReactDashboard",
  //     owner: "Vishal10feb",
  //     language: "JavaScript",
  //   },
  //   {
  //     name: "DevOpsPipeline",
  //     owner: "Vishal10feb",
  //     language: "Python",
  //   },
  //   {
  //     name: "FrontendMentor",
  //     owner: "Vishal10feb",
  //     language: "HTML/CSS",
  //   },
  //   {
  //     name: "DataStructures",
  //     owner: "Vishal10feb",
  //     language: "C++",
  //   },
  // ];

  // const value = [
  //   { date: "2024/01/11", count: 2 },
  //   ...[...Array(17)].map((_, idx) => ({
  //     date: `2024/01/${idx + 10}`,
  //     count: idx,
  //   })),
  //   ...[...Array(17)].map((_, idx) => ({
  //     date: `2016/02/${idx + 10}`,
  //     count: idx,
  //   })),
  //   { date: "2024/04/12", count: 2 },
  //   { date: "2024/05/01", count: 5 },
  //   { date: "2024/05/02", count: 5 },
  //   { date: "2024/05/03", count: 1 },
  //   { date: "2024/05/04", count: 11 },
  //   { date: "2024/12/31", count: 32 },
  // ];

  // const contributions = value;

  // const achievements = [
  //   {
  //     name: "Block or Report",
  //     icon: "https://camo.githubusercontent.com/d676af72b3a82eb1ca5dc96a77f0f82ddec61d4c9a55fdf373996e195ba362fb/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f70726f66696c652f616368696576656d656e74732f717569636b647261772d64656661756c742e706e67",
  //   },
  // ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-5">
      <Button
        className="shadow-lg bg-blue-500 rounded-lg font-medium"
        icon={<RiHomeLine />}
        label="Button"
        onClick={() => {}}
        size="sm"
        variant="default"
      />
      <Button
        className="shadow-lg rounded-3xl font-medium"
        icon={<RiHomeLine />}
        label="Button"
        onClick={() => {}}
        size="lg"
        variant="destructive"
      />
      <Button
        className="text-red-500 font-medium"
        icon={<RiHomeLine />}
        label="Default Button"
        onClick={() => {}}
        size="sm"
        variant="ghost"
      />
    </div>
    // <Layout>
    //   <ProfileColumn
    //     username="VishalRS01"
    //     followers={3}
    //     following={9}
    //     achievements={achievements}
    //   />
    //   <ContentColumn
    //     repositories={repositories}
    //     contributions={contributions}
    //   />
    // </Layout>
  );
};

export default Home;
