import certificateImg from "../assets/certificate.png"; // твоя картинка сертификата

export default function About() {
  return (
    <section className="w-full bg-white">
      <div className="bg-[#F5F5F5] rounded-[30px] sm:rounded-[50px] p-6 sm:p-8 lg:p-16 my-20 sm:my-32 mx-6 sm:mx-[72px] lg:mx-[120px]">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center text-[#22324A] mb-10 sm:mb-12 text-gotham font-[500]">
          About Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Левая часть — текст и блоки */}
          <div className="flex flex-col justify-between items-start text-[#000000] text-gotham text-[12px] sm:text-xl lg:text-2xl leading-snug lg:leading-tight">
            <div className="max-w-[600px]">
              <p className="font-light">
                <span className="font-normal">AILT Tourism -</span> is a licensed and registered
                tourism company in Kazakhstan.
              </p>
              <p className="mb-6 font-light">
                We offer a full range of services, including visa support (business, tourist, and work visas),
                organizing memorable tours, and providing insurance services.
              </p>

              <p className="font-medium">Safety is Our Top Priority</p>
              <p className="mb-6 font-light">
                Your safety and comfort are at the heart of our tours. Our team is made up of
                <span className="font-medium"> certified guides</span>, trained to deliver the highest level of service both in the
                city and in nature. They are skilled in{" "}
                <span className="font-medium">guided tours, landscape navigation, and mountain trekking</span>,
                ensuring you feel confident and supported throughout your journey. In addition, all our guides are{" "}
                <span className="font-medium">certified in first aid</span>, so you can enjoy your experience with peace of mind.
              </p>
            </div>

            {/* Блоки с цифрами */}
            <div className="mt-8 flex flex-col items-start gap-4">
              <div className="bg-[#F4EBE2] rounded-[30px] w-[280px] sm:w-[350px] lg:w-[400px] p-4 sm:p-6 text-center shadow-md">
                <p className="text-xl sm:text-2xl lg:text-3xl text-[#22324A] font-medium">
                  10+ Years of Experience
                </p>
              </div>

              <div className="bg-[#F4EBE2] rounded-[30px] w-[280px] sm:w-[350px] lg:w-[400px] p-4 sm:p-6 text-center shadow-md">
                <p className="text-xl sm:text-2xl lg:text-3xl text-[#22324A] font-medium">
                  5,000+ Satisfied Clients
                </p>
              </div>
            </div>
          </div>

          {/* Правая часть — изображение */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={certificateImg}
              alt="Certificate"
              className="rounded-2xl shadow-lg w-[90%] sm:w-4/5 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
