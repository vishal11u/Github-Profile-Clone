import React from "react";
import Layout from "../components/Layout";
import ProfileColumn from "../components/ProfileColumn";
import ContentColumn from "../components/ContentColumn";

const Home: React.FC = () => {
  const repositories = [
    { name: "March", language: "Java" },
    { name: "javafullstack", owner: "Omkar10feb", language: "Java" },
    { name: "Corejava", owner: "Omkar10feb", language: "Java" },
    { name: "Omkar10Feb", language: undefined },
    { name: "Core-Java", language: undefined },
    { name: "spring6april", language: undefined },
  ];

  const value = [
    { date: "2024/01/11", count: 2 },
    ...[...Array(17)].map((_, idx) => ({
      date: `2024/01/${idx + 10}`,
      count: idx,
    })),
    ...[...Array(17)].map((_, idx) => ({
      date: `2016/02/${idx + 10}`,
      count: idx,
    })),
    { date: "2024/04/12", count: 2 },
    { date: "2024/05/01", count: 5 },
    { date: "2024/05/02", count: 5 },
    { date: "2024/05/03", count: 1 },
    { date: "2024/05/04", count: 11 },
    { date: "2024/12/31", count: 32 },
  ];

  const contributions = value;

  const achievements = [
    { name: "Block or Report", icon: "https://camo.githubusercontent.com/d676af72b3a82eb1ca5dc96a77f0f82ddec61d4c9a55fdf373996e195ba362fb/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f70726f66696c652f616368696576656d656e74732f717569636b647261772d64656661756c742e706e67" },
  ];

  return (
    <Layout>
      <ProfileColumn
        username="OmkarSK01"
        followers={3}
        following={9}
        achievements={achievements}
      />
      <ContentColumn
        repositories={repositories}
        contributions={contributions}
      />
    </Layout>
  );
};

export default Home;
