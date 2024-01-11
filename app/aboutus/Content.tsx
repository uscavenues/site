import styles from "../../styles/aboutus/Content.module.css";
import Link from "next/link";
import Image from "next/image";
import debraImg from "../../public/images/team/members/debra.jpg";
import delaneImg from "../../public/images/team/members/delane.jpg";
import jackImg from "../../public/images/team/members/jack.jpg";
import jennImg from "../../public/images/team/members/jenn.jpg";
import akashImg from "../../public/images/team/members/akash.jpg";
import avinashImg from "../../public/images/team/members/avinash.jpg";
import gabeImg from "../../public/images/team/members/gabe.jpg";
import timImg from "../../public/images/team/members/tim.jpg";
import christianImg from "../../public/images/team/members/christian.jpg";
import benImg from "../../public/images/team/members/ben.jpg";
import com1 from "../../public/images/community/gameday1.jpg";
import com2 from "../../public/images/community/retreat4.jpg";

const membersList = [
  {
    id: 0,
    name: "Delane Ly",
    role: "President",
    img: delaneImg,
    linkedin: "https://www.linkedin.com/in/delanely/",
  },
  {
    id: 1,
    name: "Debra Erdenemandakh",
    role: "Vice President",
    img: debraImg,
    linkedin: "https://www.linkedin.com/in/debraerdene/",
  },
  {
    id: 2,
    name: "Jennifer Liu",
    role: "Director of Professional Development General",
    img: jennImg,
    linkedin: "https://www.linkedin.com/in/jennifer-wei-liu/",
  },

  {
    id: 3,
    name: "Jack Murphy",
    role: "Director of Professional Development Pre-Law",
    img: jackImg,
    linkedin: "https://www.linkedin.com/in/jack-murphy-407522251/",
  },
  {
    id: 4,
    name: "Akash Khanna",
    role: "Director of Recruitment",
    img: akashImg,
    linkedin: "https://www.linkedin.com/in/akash-khanna-/",
  },
  {
    id: 5,
    name: "Avinash Chauhan",
    role: "Director of Recruitment",
    img: avinashImg,
    linkedin: "https://www.linkedin.com/in/avinashchauhanusc/",
  },
  {
    id: 6,
    name: "Gabriel Sianipar",
    role: "Director of Affairs",
    img: gabeImg,
    linkedin: "https://www.linkedin.com/in/gabe-sianipar-b9987221a/",
  },
  {
    id: 7,
    name: "Christian Yen",
    role: "Director of Affairs",
    img: christianImg,
    linkedin: "https://www.linkedin.com/in/christianyen/",
  },
  {
    id: 8,
    name: "Ben Reed",
    role: "Director of Finance",
    img: benImg,
    linkedin: "https://www.linkedin.com/in/benreed4/",
  },
  {
    id: 9,
    name: "Timothy Tso",
    role: "Director of Technology",
    img: timImg,
    linkedin: "https://www.linkedin.com/in/t1mtw0/",
  },
];


export default function Content() {
  const members = membersList.map((member) => {
    return (
      <Link
        href={member.linkedin}
        key={member.id}
        className={styles.memberLink}
      >
        <div className={styles.member}>
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
      </Link>
    );
  });

  return (
    <>
    <div className={styles.content}>
      <div className={styles.contentSec}>
        <h2 className={styles.header}>
          At Avenues Consulting Group, we believe that any student regardless of
          major can break into the rigorous journey of consulting and
          project-building.
        </h2>
        <p className={styles.text}>
          We welcome students from all majors and backgrounds to join our team
          and contribute their unique skills and perspectives. We focus on the
          following industries:{" "}
          <span className={styles.bold}>
            pre-law, pre-med, pre-education, tech, and real estate
          </span>
          .
        </p>
        <p className={styles.text}>
          Our team of talented students from a diverse range of backgrounds and
          majors work together to provide pro-bono consulting services to
          companies in pre-professional industries. Not only will you gain
          valuable skills and experience, but you will also have the opportunity
          to gain mentorship, network, and gain an industry perspective.
        </p>
        <p className={styles.text}>
          Joining Avenues is not just about gaining experience and skills, it is
          also about being part of a community of like-minded individuals who
          are passionate about making a difference. Our team participates in
          various social and professional events throughout the year, providing
          opportunities to connect with other students and industry
          professionals.
        </p>
        <p className={styles.specialText}>
          <span className={styles.bold}>
            Ready to take the first step in joining our team?&nbsp;
          </span>
          Fill out our{" "}
          <Link href="https://forms.gle/2qXD2SRk3LfSQfnFA">
            potential member interest form
          </Link>{" "}
          or contact us at{" "}
          <a href="mailto:uscavenues@gmail.com">uscavenues@gmail.com</a> to
          learn more. We can&apos;t wait to hear from you!
        </p>
      </div>

 
    </div>

      <div className={styles.teamList}>
        <h2 className={styles.teamTitle}>Our Team</h2>
        <div className={styles.teamMems}>{members}</div>
      </div>
      </>
  );
}
