import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-cream">
      <header className="bg-blue-600 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-poppins font-bold">
            About Us
          </h1>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col mb-4">
              <div>
                <h2 className="text-4xl font-bold mb-4 ">Our Mission</h2>
                <p className="text-gray-800 font-poppins ">
                  DoubtFree is committed to providing high-quality education and
                  empowering students to achieve their goals. We strive to
                  create an inclusive and supportive learning environment where
                  students can gain confidence and excel in their academic
                  journey.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold mt-6 mb-4 ">Our Vision</h2>
                <p className="text-gray-800 font-poppins">
                  Our vision is to revolutionize education by leveraging
                  technology and innovative teaching methods. We aim to reach
                  students worldwide and make quality education accessible to
                  all, irrespective of their geographic location or
                  socio-economic background.
                </p>
              </div>
            </div>
            <div className="mb-4">
              <div className="md:ml-30 text-center">
                <div className=" p-4 md:w-[100%] ">
                  <img
                    src="https://doubtfree.in/wp-content/uploads/2022/06/214222957_7058740594196891_2148591290675333303_n.jpg"
                    alt="Team Member"
                    className="w-4/5 mx-auto h-auto mb-2 shadow-md rounded-md"
                  />
                  <h3 className="text-lg font-bold">Mayank Kumar</h3>
                  <p className="text-gray-800">Founder and CEO</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-15">
            <div className="mb-4 flex flex-nowrap">
              {/* Add your image/gif component here */}
              <img
                className="w-[30%] h-auto ml-20 align-baseline"
                src="https://doubtfree.in/wp-content/uploads/2023/04/112042-target-commercial.gif"
                alt="About Us"
              />
              <div className="w-[50%] h-auto ml-20 align-baseline">
                <h1 className="text-5xl font-bold mb-4  text-black">
                  Our Goals
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti qui quas rem voluptatum in animi rerum similique. Vel
                  maiores debitis dicta libero! Commodi omnis velit unde ipsam
                  ipsa culpa eum. Vitae autem nesciunt deleniti eos alias
                  ducimus ut laudantium nihil ratione odit expedita repellat
                  obcaecati error, accusantium debitis in provident molestiae
                  blanditiis perferendis vel doloribus quos atque quidem
                  sapiente? Obcaecati. Cum velit odit earum veritatis mollitia
                  modi, provident sunt ad natus commodi quidem. Quas tempore
                  earum et voluptatem fugit ut quam, tempora dolor corporis quia
                  veniam. Ea, provident. Nemo, illum.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
