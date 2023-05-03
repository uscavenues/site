import Image from "next/image";
import styles from "./TeamList.module.css";
import debraImg from "../../public/images/team/members/debra.jpg";
import delaneImg from "../../public/images/team/members/delane.jpg";
import mykaelaImg from "../../public/images/team/members/mykaela.jpg";
import jackImg from "../../public/images/team/members/jack.jpg";
import joshImg from "../../public/images/team/members/josh.jpg";
import jennImg from "../../public/images/team/members/jenn.jpg";
import akashImg from "../../public/images/team/members/akash.jpg";
import avinashImg from "../../public/images/team/members/avinash.jpg";
import gabeImg from "../../public/images/team/members/gabe.jpg";
import annaImg from "../../public/images/team/members/anna.jpg";
import timImg from "../../public/images/team/members/tim.jpg";
import christianImg from "../../public/images/team/members/christian.jpg";

const membersList = [
  {
    id: 0,
    name: "Debra Erdenemandakh",
    role: "President",
    img: debraImg,
  },
  {
    id: 1,
    name: "Delane Ly",
    role: "Vice President",
    img: delaneImg,
  },
  {
    id: 2,
    name: "Mykaela Mae Ebalo",
    role: "Director of Professional Development General",
    img: mykaelaImg,
  },
  {
    id: 3,
    name: "Jennifer Liu",
    role: "Director of Professional Development General",
    img: jennImg,
  },

  {
    id: 4,
    name: "Jack Murphy",
    role: "Director of Professional Development Pre-Law",
    img: jackImg,
  },
  {
    id: 5,
    name: "Josh Kim",
    role: "Director of Professional Development Pre-Health",
    img: joshImg,
  },
  {
    id: 6,
    name: "Akash Khanna",
    role: "Director of Recruitment",
    img: akashImg,
  },
  {
    id: 7,
    name: "Avinash Chauhan",
    role: "Director of Recruitment",
    img: avinashImg,
  },
  {
    id: 8,
    name: "Gabriel Sianipar",
    role: "Director of Affairs",
    img: gabeImg,
  },
    {
    id: 9,
    name: "Christian Yen",
    role: "Director of Affairs",
    img: christianImg,
  },
  {
    id: 10,
    name: "Timothy Tso",
    role: "Director of Technology",
    img: timImg,
  },

  /*
  {
    id: 13,
    name: "Ben Reed",
    role: "Director of Human Resources",
    img: "/images/team/members/ben.jpg",
  },
  {
    id: 14,
    name: "Ethan Kim",
    role: "Director of Finance",
    img: "/images/team/members/ethan.jpg",
  },
  {
    id: 15,
    name: "Wendi Lu",
    role: "Director of Marketing",
    img: "/images/team/members/wendi.jpg",
  },
  {
    id: 16,
    name: "Andy Le",
    role: "Director of Design",
    img: "/images/team/members/andy.jpg",
  },
  */
];

export default function TeamList() {
  const members = membersList.map((member) => {
    return (
      <div key={member.id} className={styles.member}>
        <Image
          className={styles.memberImg}
          src={member.img}
          alt={`${member.name} Member Image`}
        />
        <div className={styles.memberInfo}>
          <h3 className={styles.memberName}>{member.name}</h3>
          <p className={styles.memberRole}>{member.role}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.teamList}>
      <div className={styles.teamMems}>{members}</div>
    </div>
  );
}
