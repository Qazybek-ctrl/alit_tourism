const certificateImg = "/certificate.png";
import { useLanguage } from "../utility/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-white">
      <div className="bg-[#F5F5F5] rounded-[30px] sm:rounded-[50px] p-6 sm:p-8 lg:p-16 my-20 sm:my-32 mx-6 sm:mx-[72px] lg:mx-[120px]">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center text-[#22324A] mb-10 sm:mb-12 text-gotham font-[500]">
          {t("pages.about.title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Левая часть — текст и блоки */}
          <div className="flex flex-col justify-between items-start text-[#000000] text-gotham text-[12px] sm:text-xl lg:text-2xl leading-snug lg:leading-tight">
            <div className="max-w-[600px]">
              <p className="font-light">
                <span className="font-normal">AILT Tourism</span> {t("pages.about.intro1")}
              </p>
              <p className="font-light">
                {t("pages.about.intro2")}
              </p>
              <p className="mb-6 font-light">
                {t("pages.about.intro3")}
              </p>

              <p className="font-medium">{t("pages.about.safetyTitle")}</p>
              <p className="mb-6 font-light">
                {t("pages.about.safetyText")}
              </p>
            </div>

            {/* Блоки с цифрами */}
            <div className="mt-8 flex flex-col items-start gap-4">
              <div className="bg-[#F4EBE2] rounded-[30px] w-[280px] sm:w-[350px] lg:w-[400px] p-4 sm:p-6 text-center shadow-md">
                <p className="text-xl sm:text-2xl lg:text-3xl text-[#22324A] font-medium">
                  {t("pages.about.experience")}
                </p>
              </div>

              <div className="bg-[#F4EBE2] rounded-[30px] w-[280px] sm:w-[350px] lg:w-[400px] p-4 sm:p-6 text-center shadow-md">
                <p className="text-xl sm:text-2xl lg:text-3xl text-[#22324A] font-medium">
                  {t("pages.about.clients")}
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
