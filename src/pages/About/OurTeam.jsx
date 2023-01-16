import React from "react";
import img1 from "../../assets/team/team1.png";
import img2 from "../../assets/team/team2.png";
import img3 from "../../assets/team/team3.png";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  const teamMembers = [
    { id: 1, name: "Michael Scott", title: "General Manager", image: img1 },
    { id: 2, name: "Dwight Schrute", title: "General Manager", image: img2 },
    { id: 3, name: "Pam Beetsley", title: "General Manager", image: img3 },
  ];
  return (
    <section className="max-w-[1000px] mx-auto px-3">
      <article className="max-w-[800px] mx-auto mt-10 md:mb-[52px] p-2">
        <h3 className="text-xl text-[#777777] leading-[32px]">Our team</h3>
        <h2 className="text-2xl md:text-4xl lg:text-[48px] lg:leading-[72px] mt-3 font-Manrope">
          The leadership team
        </h2>
        <p className="text-xl text-[#777777] leading-[32px] mt-[30px]">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
      </article>
      <div className="md:flex justify-between gap-5  lg:gap-[51px]">
        {teamMembers.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
