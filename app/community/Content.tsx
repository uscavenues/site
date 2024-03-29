import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/community/Content.module.css";
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
            At Avenues Consulting Group USC, we strongly believe in the power of
            community.
          </h2>
          <div className={styles.textSec}>
            <p className={styles.text}>
              We understand that community is not just about working together,
              but also about growing together. That&apos;s why we regularly
              organize team-building activities, social events, and volunteer
              opportunities. We encourage our team members to share their
              passions and interests, and we strive to create an inclusive
              environment where everyone feels valued and respected.
            </p>
            <Image
              src={com1}
              className={styles.contentImg}
              alt="Community Image 1"
            />
          </div>
          <div className={styles.textSec}>
            <Image
              src={com2}
              className={styles.contentImg}
              alt="Community Image 2"
            />
            <p className={styles.text + " " + styles.text2}>
              By joining Avenues Consulting Group, not only will you unlock
              career opportunities, but also a network of students who are
              willing to support you in any way. We love having fun (kickbacks
              at 4 P.M??? 😳), eating (can you beat the high score of 13 meat
              plates an AYCE? 🥩), and building everlasting relationships.
            </p>
          </div>
          <p className={styles.specialText}>
            <span className={styles.bold}>
              Want to join our community?&nbsp;
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
      {/*
      <div className={styles.teamList}>
        <h2 className={styles.teamTitle}>Our Team</h2>
        <div className={styles.teamMems}>{members}</div>
      </div>
              */}
    </>
  );
}
