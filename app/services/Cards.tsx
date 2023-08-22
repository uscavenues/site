import styles from "../../styles/services/Cards.module.css";
import Image from "next/image";
import dt from "../../public/images/content/dt.jpg";
import ma from "../../public/images/content/ma.jpg";
import sp from "../../public/images/content/sp.jpg";
import uiux from "../../public/images/content/uiux.jpg";
import ed from "../../public/images/content/ed.jpg";
import cs from "../../public/images/content/cs.jpg";

export default function Cards() {
  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.cardsSec}>
        <div>
          <div className={styles.card + " card"}>
            <Image src={ed} alt="Engineering and Development Stock Photo" />
            <div className={"cardContent"}>
              <h2>Engineering and Development</h2>
              <ul>
                <li>
                  Program functioning streamlining apps, websites and more
                </li>
                <li>
                  Use search engine optimization for marketing and outreach
                </li>
                <li>
                  Analyze data trends in current software and website activity
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.card + " card"}>
            <Image src={dt} alt="Digital Transformation Stock Photo" />
            <div className={"cardContent"}>
              <h2>Digital Transformation</h2>
              <ul>
                <li>
                  Guide your organization through digital transformation
                  initiatives
                </li>
                <li>
                  Advise technologies and strategies to enhance customer
                  engagement
                </li>
                <li>Engineer efficiency through SEO and website development</li>
              </ul>
            </div>
          </div>
          <div className={styles.card + " card"}>
            <Image src={uiux} alt="UI/UX Design Stock Photo" />
            <div className={"cardContent"}>
              <h2>UI/UX Design</h2>
              <ul>
                <li>
                  Advise website design, branding, and overall brand identity
                </li>
                <li>Create digital media content</li>
                <li>Graphic design and interactive media</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card + " card"}>
            <Image src={ma} alt="Market Analysis Stock Photo" />
            <div className={"cardContent"}>
              <h2>Market Analysis</h2>
              <ul>
                <li>In-depth market research and analysis</li>
                <li>
                  Insights into customer behavior, industry trends, and emerging
                  opportunities
                </li>
                <li>
                  Make informed decisions that resonate with target audience
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.card + " card"}>
            <Image src={sp} alt="Strategic Planning Stock Photo" />
            <div className={"cardContent"}>
              <h2>Strategic Planning</h2>
              <ul>
                <li>
                  Develop comprehensive strategic plans that align with goals
                </li>
                <li>
                  Analyze market trends, competition, and internal capabilities
                </li>
                <li>
                  Formulate strategies that drive growth and sustainable success
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.card + " card"}>
            <Image src={cs} alt="Custom Solutions Stock Photo" />
            <div className={"cardContent"}>
              <h2>Custom Solutions</h2>
              <ul>
                <li>Tailor our consulting approach to specific needs</li>
                <li>
                  Ensure that the solutions provided are practical, actionable,
                  and aligned with long-term vision
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
