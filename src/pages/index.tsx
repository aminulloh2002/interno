import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "@/components/Button";
import { FaChevronRight, FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Interno | Home</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.herotext}>
            <h1>Let Your Home Be Unique</h1>
            <p>
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>

        <section className={styles.sectionWrapper}>
          <div className={styles.projectList}>
            <div className={styles.project}>
              <div className={styles.projectTitle}>Project Plan</div>
              <div className={styles.projectDescription}>
                There are many variations of the passages of lorem Ipsum from
                available, majority
              </div>
              <div className={styles.projectReadMore}>
                Read More <FaLongArrowAltRight />
              </div>
            </div>
            <div className={styles.project}>
              <div className={styles.projectTitle}>Interior Work</div>
              <div className={styles.projectDescription}>
                There are many variations of the passages of lorem Ipsum from
                available, majority
              </div>
              <div className={styles.projectReadMore}>
                Read More <FaLongArrowAltRight />
              </div>
            </div>
            <div className={styles.project}>
              <div className={styles.projectTitle}>Realization</div>
              <div className={styles.projectDescription}>
                There are many variations of the passages of lorem Ipsum from
                available, majority
              </div>
              <div className={styles.projectReadMore}>
                Read More <FaLongArrowAltRight />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionWrapper}>
          <div className={styles.contactCTA}>
            <div className={styles.contactCTADescription}>
              <h1>We Create The Art Of Stylish Living Stylishy</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when lookings at its layouts
                the points of using that is has a more or less normal.
              </p>
              <Button>Get Free Estimate</Button>
            </div>
            <div className={styles.contactCTAImage}>
              <Image
                src="/images/ContactCTA.png"
                alt="cta-img"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionWrapper}>
          <div className={styles.testimonials}>
            <h2 className={styles.testimonialTitle}>
              What the People Thinks <br /> About Us
            </h2>

            <div className={styles.testCardList}>
              <div className={styles.testCard}>
                <div className={styles.testUser}>
                  <div className={styles.userPictures}>
                    <Image
                      src="/images/testimonial-1.jpg"
                      alt="test-img"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className={styles.userInformation}>
                    <p className={styles.userName}>Natasha Mith</p>
                    <p className={styles.userAddress}>Sydney, Australia</p>
                  </div>
                </div>
                <div className={styles.userTestimonial}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veritatis reprehenderit unde fuga.
                </div>
              </div>
              <div className={styles.testCard}>
                <div className={styles.testUser}>
                  <div className={styles.userPictures}>
                    <Image
                      src="/images/testimonial-2.jpg"
                      alt="test-img"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className={styles.userInformation}>
                    <p className={styles.userName}>Kateness</p>
                    <p className={styles.userAddress}>London, England</p>
                  </div>
                </div>
                <div className={styles.userTestimonial}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  dolorum quae vitae.
                </div>
              </div>
              <div className={styles.testCard}>
                <div className={styles.testUser}>
                  <div className={styles.userPictures}>
                    <Image
                      src="/images/testimonial-3.jpg"
                      alt="test-img"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className={styles.userInformation}>
                    <p className={styles.userName}>Alice Liddell</p>
                    <p className={styles.userAddress}>Sydney, Australia</p>
                  </div>
                </div>
                <div className={styles.userTestimonial}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aperiam molestias sequi aut?
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionWrapper}>
          <div className={styles.brands}>
            <div className={styles.brandImg}>
              <Image
                src="/images/brands/home.svg"
                alt="brands"
                height={100}
                width={150}
              />
            </div>
            <div className={styles.brandImg}>
              <Image
                src="/images/brands/vs.svg"
                alt="brands"
                height={100}
                width={150}
              />
            </div>
            <div className={styles.brandImg}>
              <Image
                src="/images/brands/brand.svg"
                alt="brands"
                height={100}
                width={150}
              />
            </div>
            <div className={styles.brandImg}>
              <Image
                src="/images/brands/naturehome.svg"
                alt="brands"
                height={100}
                width={150}
              />
            </div>
            <div className={styles.brandImg}>
              <Image
                src="/images/brands/classic.svg"
                alt="brands"
                height={100}
                width={150}
              />
            </div>
          </div>
        </section>
        <section className={styles.sectionWrapper}>
          <div className={styles.projects}>
            <div className={styles.projectsHeader}>
              <h1 className={styles.projectsTitle}>Follow Our Projects</h1>
              <p className={styles.projectsDesc}>
                It is a long established fact that a reader will be distracted
                by the of readable <br /> content of page lookings at its
                layouts points
              </p>
            </div>
            <div className={styles.projectsList}>
              <div className={styles.projectsItem}>
                <div className={styles.projectsImage}>
                  <Image
                    src="/images/projects/first.png"
                    width={500}
                    height={500}
                    alt="project-img"
                  />
                </div>
                <div className={styles.projectsBody}>
                  <div className={styles.projectsInformation}>
                    <p className={styles.projectsTitle}>Modern Kitchen</p>
                    <p className={styles.projectsDesc}>Decor / Architecture</p>
                  </div>
                  <div className={styles.projectsIcon}>
                    <FaChevronRight />
                  </div>
                </div>
              </div>
              <div className={styles.projectsItem}>
                <div className={styles.projectsImage}>
                  <Image
                    src="/images/projects/second.png"
                    width={500}
                    height={500}
                    alt="project-img"
                  />
                </div>
                <div className={styles.projectsBody}>
                  <div className={styles.projectsInformation}>
                    <p className={styles.projectsTitle}>Modern Kitchen</p>
                    <p className={styles.projectsDesc}>Decor / Architecture</p>
                  </div>
                  <div className={styles.projectsIcon}>
                    <FaChevronRight />
                  </div>
                </div>
              </div>
              <div className={styles.projectsItem}>
                <div className={styles.projectsImage}>
                  <Image
                    src="/images/projects/third.png"
                    width={500}
                    height={500}
                    alt="project-img"
                  />
                </div>
                <div className={styles.projectsBody}>
                  <div className={styles.projectsInformation}>
                    <p className={styles.projectsTitle}>Modern Kitchen</p>
                    <p className={styles.projectsDesc}>Decor / Architecture</p>
                  </div>
                  <div className={styles.projectsIcon}>
                    <FaChevronRight />
                  </div>
                </div>
              </div>
              <div className={styles.projectsItem}>
                <div className={styles.projectsImage}>
                  <Image
                    src="/images/projects/forth.png"
                    width={500}
                    height={500}
                    alt="project-img"
                  />
                </div>
                <div className={styles.projectsBody}>
                  <div className={styles.projectsInformation}>
                    <p className={styles.projectsTitle}>Modern Kitchen</p>
                    <p className={styles.projectsDesc}>Decor / Architecture</p>
                  </div>
                  <div className={styles.projectsIcon}>
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.archievementList}>
          <div className={styles.archievement}>
            <h2>12</h2>
            <p>Year Of Experience</p>
          </div>
          <div className={styles.archievement}>
            <h2>85</h2>
            <p>Success Project</p>
          </div>
          <div className={styles.archievement}>
            <h2>15</h2>
            <p>Active Project</p>
          </div>
          <div className={styles.archievement}>
            <h2>95</h2>
            <p>Happy Customers</p>
          </div>
        </section>
        <section className={styles.sectionWrapper}>
          <div className={styles.CTA}>
            <h1>Wanna join the interno?</h1>
            <p>its a long establishe fact will be distracted</p>
            <Button customClass="btnSecondary">Contact With Us</Button>
          </div>
        </section>
      </main>
    </>
  );
}
