import React from "react";

const Renderlogos = ({ logo, title }: { logo: any; title: string }) => {
  return (
    <section className="flex hover:bg-green-700/40  items-center p-4">
      <div className="p-2">{logo}</div>
      <div className="p-2">{title}</div>
    </section>
  );
};

export default Renderlogos;
