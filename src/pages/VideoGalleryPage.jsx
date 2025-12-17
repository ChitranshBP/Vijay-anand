import React, { useState } from "react";
import { FiPlay, FiX } from "react-icons/fi";
import Footer from "../components/Footer";
import Header from "../components/Header";

const videos = [

  { "id": "Nk_tfJbgIwY", "title": "Is One Vaccine for All Cancers Possible? | Dr P Vijay Anand Reddy" },
  { "id": "NwBbGvNnogQ", "title": "Preventive Health Tips for Women Above 40 | Dr P Vijay Anand Reddy" },
  { "id": "OLa-1urRMAY", "title": "Oral Cancer Burden in India | Dr P Vijay Anand Reddy" },
  { "id": "a6lw6I0GQjc", "title": "When Are Mouth Ulcers Serious? | Dr P Vijay Anand Reddy" },
  { "id": "0MJkFoS7xQk", "title": "Rising Breast Cancer Cases in India | Dr P Vijay Anand Reddy" },
  { "id": "iWpXsDDJtOM", "title": "Diet Tips for Cancer Prevention & Care | Dr P Vijay Anand Reddy" },
  { "id": "JFbGcv8XV5g", "title": "Cervical Cancer Awareness & Prevention | Dr P Vijay Anand Reddy" },
  { "id": "oswzJc0Ih9o", "title": "Why Pap Smear Tests Are Important | Dr P Vijay Anand Reddy" },
  { "id": "AkdpdWgwzyE", "title": "What Is Stereotactic Radiosurgery? | Dr P Vijay Anand Reddy" },




  { "id": "ZK62wLVizDc", "title": "Daily Annadaan: A Noble Cause Supported by Dr. Vijayanand Reddy" },
  { "id": "tueNCxI1IjE", "title": "Students & staff Osmania medical college gave unique heartfelt farewell : Dr P Shashikala principal" },
  { "id": "et5lAx7osfs", "title": "Ramp Walk – Models with Golfers | Hyderabad golfers on the ramp!" },
  { "id": "1b9RTXO9dzM", "title": "Ramp Walk – Models" },
  { "id": "K-VHXu1Sf6c", "title": "Men Achievers Felicitation Ceremony" },
  { "id": "NK-QyBnlCeA", "title": "Crazy Hoppers Show 2" },
  { "id": "4Rs3Bbg5rZg", "title": "Crazy hoppers show 1" },
  { "id": "JSIk86W1jmc", "title": "Complete Man by Dr Shashi & Dr Vijay Anand Reddy" },
  { "id": "UyEwUGu7LYU", "title": "Cure Foundation and Apollo Cancer Centers Hyderabad hosts Charity fund raising golf tournament" },
  { "id": "tNCQmz9kLqo", "title": "Cure foundation and Apollo Cancer Centers Hyderabad hosts International Men's Day ANANTH at HICC" },
  { "id": "9dSTZQutfXw", "title": "ANANTH - the endless spirit of men!" },
  { "id": "rPLIiirXC0I", "title": "ANANTH - the endless spirit of men!" },
  { "id": "0DaB-HDiOSk", "title": "ANANTH | A THEME BASED INTERNATIONAL MEN'S DAY EVENT | Dr Vijay Anand Reddy" },
  { "id": "emP0mLU1eMw", "title": "Dr Vijay Anand Reddy | Top Oncologist in India | Best Cancer/Radionation oncology doctor in india" },
  { "id": "9SMPYFx-yWM", "title": "How does Cancer start & Is it genetic? #drvijayanandreddy #cancerspecialist #bestoncologist" },
  { "id": "Cg6eayNApV4", "title": "2/3 of the cancers are curable if detected early.#cancerawarness #drvijayanandreddy #cancerdoubts" },
  { "id": "GyfJuHJXBYI", "title": "Cancer can be treated successfully if you seek medical attention promptly❤️" },
  // { "id": "KdLVuQaeAHw", "title": "Ovarian Cancer Awareness" },
  // { "id": "6IhA7eBQdok", "title": "Cancer Awareness regarding Tobacco smoking" },
  { "id": "cJqB7BJnEpA", "title": "All you need to know about Thyroid Cancer" },
  { "id": "_QTYcn_pKsU", "title": "What are the possible side effects of the radiation treatment? #cancerdoubts #radiationsideaffects" },
  { "id": "arrUexOyJw4", "title": "What side effects may happen during or between my radiation treatment sessions? #cancerspecialist" },
  { "id": "k4siFGCny44", "title": "Are there any lasting side effects of the cancer treatment?#radiationeffects  #cancersideeffects" },
  { "id": "gBNV6J5Axhk", "title": "Will the radiation treatment effect my ability to have children? #cancerspecialist" },
  { "id": "VaHA6AIw418", "title": "How can i prevent side effects while taking chemo#radiationrisks #radiationeffects #cancerawareness" },
  { "id": "TDQEIeONPFA", "title": "Will radiation treatment affect my appetite? #radiationbenifits #radiationrisks #cancerspecialist" },
  { "id": "0E4lr2Wuo9g", "title": "What are the benefits & risks of radiation Cancer?  #radiationrisks #radiationbenifits" },
  // { "id": "ZTxSNeeQ_ZM", "title": "Ask your questions in the comments section #cancerawareness #cancerdoubts #drvijayanandreddy" },
  // { "id": "tF_qKCOSL4s", "title": "Cancer awareness for women #cancerawareness #womenempowerment #cancerinwomen #womensday" },
  { "id": "Rq99Gf57uyY", "title": "Will radiation treatment affect my appetite or make it hard to eat?#radiationtherapy #cancerawarenes" },
  { "id": "rJpbWR7eoso", "title": "Do I need rest after taking radiation treatment?#radiationtherapy #cancermyths #cancerawareness" },
  { "id": "a5t4YP7E2KM", "title": "Did you know that your cancer gets cured completely in maximum 3 days if it's in the early stage?" },
  { "id": "uLxkdSmfXXg", "title": "Super useful information for the people who are scared of Radiation Therapy.  #cancerinformation" },
  { "id": "-BDlVd5ADhM", "title": "Isn't it The Golden Information? #cancerspecialist #radiation  #cancerconsultation #cancerawareness" },
  { "id": "L2CB0VIzz84", "title": "What is my change of recovery with lung cancer treatment?#lungcancer  #cancerawareness #cancerdoubts" },
  { "id": "OOKrfveoCYs", "title": "When will I need to start treatment for cancer stage1? #cancertreatment #cancerstage1 #cancerdoubts" },
  { "id": "H6Y9QuPDfhg", "title": "What a year it has been❤️#recap2022 #drvijayanandreddy #happyyear #cancerdoctor #bestoncologist" },
  { "id": "KPVqol75eik", "title": "Is it possible to cure a person's cancer, if he is already suffering with AIDS?#aids #cancerdoubts" },
  { "id": "2_lw3He3ilo", "title": "Does stomach cancer spread quickly?#stomachcancer #stomachcancerawareness #cancerdoubts  #cancer" },
  { "id": "D9K3tq3S4zE", "title": "Reasons for Stomach Cancer?#stomachcancer   #cancerdoubts  #cancerquestions #bestoncologist" },
  { "id": "sGEHWtYnh9g", "title": "How do I know whether I have stomach cancer?#stomachcancer  #cancerawareness #cancerquestions" },
  { "id": "i0ALiAjKgU0", "title": "Is there any link between AIDS and cancer?#aids #cancer #cancerresearch #hiv #drvijayanandreddy" },
  { "id": "Ik6kduXmFW0", "title": "Will I get cured If i get lung cancer once?  #lungcancer  #drvijayanandreddy #bestcancerdoctor" },
  { "id": "zy0g7fCAhbY", "title": "Do i get lung cancer if i stand next to a smoking person? #lungcancer #drvijayanandreddy" },
  { "id": "hefT59hk4Tk", "title": "What do my patients think about my treatment?" },
  { "id": "Yh0BWmPKWKk", "title": "Do I get lung cancer because of genes? #lungcancer #drvijayanandreddy" },
  { "id": "5d2op1EOZOI", "title": "How can I check whether I have lung cancer?" },
  { "id": "cCwYEGsa0C8", "title": "why do people get Lung cancer?" },
  { "id": "AM2OpsmQlOA", "title": "A Glance at Osmania Medical College 2022" },
  { "id": "nV2uSOYmJbU", "title": "CURE FOUNDATION CANCER CRUSADERS GOLF CHAMPIONSHIP 2022 - Hyderabad Golf Club" },
  { "id": "DJ4N9VdwLRc", "title": "Cancer Crusaders Golf Championship  2022 Award Ceremony" },
  { "id": "KXpYMxKFbYw", "title": "MYRA - An Event by CURE Foundation, Women Achievers Ramp Walk" },
  { "id": "dmSh-_SwwMw", "title": "MYRA (Promo Video) A Gift of God: An Event by CURE Foundation" },
  { "id": "bszvjToUTo0", "title": "MYRA - An event by CURE FOUNDATION, Opening Ceremony" },
  { "id": "_2jMYf-U5tg", "title": "MYRA : An Event by CURE Foundation - GIRL ON FIRE" },
  { "id": "CjkETWEtpjQ", "title": "MYRA - An event by CURE FOUNDATION | Cancer Crusaders Golfers Ramp Walk | Madhu Shalini Actress" },
  { "id": "3-vYVBLcymc", "title": "World Cancer Day 2022 – Message from Dr Vijay Anand Reddy, Director Apollo Cancer Institute, Hyd." },
  { "id": "JSOOg2GDS4I", "title": "Dr. P. Vijay Anand Reddy, Director - Apollo Cancer Institute Interview on Lung Cancer | NTV Telugu" },
  { "id": "uNLDl88Mybo", "title": "Cancer Crusaders Golf Invitation Cup 2020" },
  { "id": "V1eUMbztdUM", "title": "Freedom from Disease - Dr Vijay Anand Reddy, Director, Apollo Cancer Institute" },
  { "id": "nrX6RbnurzM", "title": "National Cancer Survivors Day 21 - Dr Vijay Anand Reddy,  Director, Apollo Cancer Hospital, Hyd." },
  { "id": "N63ud9sPcks", "title": "How to survive Cancer effectively along with the fear of COVID-19" },
  { "id": "fK6-R6bFZS8", "title": "Lung cancer awareness by Dr. P Vijay Anand Reddy, Director, Apollo Cancer Institute, Hyderabad" },
  { "id": "rNIirOUMqnU", "title": "Head & Neck Cancer Awareness by  Dr  P Vijay Anand Reddy" },
  { "id": "VTBuy0C0X14", "title": "Cervical Cancer Causes and Prevention" },
  { "id": "-p-iSRQ2Q3M", "title": "Cancer FAQ's by Dr  P  Vijay Anand Reddy, Director Apollo Cancer Institutes." },
  { "id": "CBcdlLvnZ4M", "title": "Cervical Cancer Awareness" },
  { "id": "8Jo86zMW3gk", "title": "Happy Children's day 2020" },
  { "id": "m7niB0vUewY", "title": "Cervical Cancer Awareness Week" },
  { "id": "zOC1K312XX8", "title": "Cervical Cancer Awareness Campaign - Dr. Vijay Anand Reddy" },
  { "id": "RU93sObMAbo", "title": "Retinoblastoma: Current Concepts of Management by Oncologist Dr P. Vijay Anand Reddy." },
  { "id": "IdMEIxeSgs4", "title": "National Cancer Survivor's Day 2020 - Dr Vijay Anand Reddy" },
  { "id": "9K-fNMuPLbM", "title": "Dr.Vijay Anand Reddy briefs us about Breast Cancer - Jeevan Rekha" },
  { "id": "QhcmxVgSa6M", "title": "The meaning of Life is to give Life a meaning! Dr Vijay Anand Reddy" },
  { "id": "fht8x1r8DGw", "title": "Introducing Cancer Crusaders Invitation Cup - 6th Edition, Feb 1-2, 2020" },
  { "id": "YfNu_MWb_Ts", "title": "Apollo Cancer Conclave 2020 - Oncology Research and Best Practices" },
  { "id": "L2GRDvhhfI0", "title": "Why attend Cancer CI 2020?" },
  { "id": "q_quUPxnBsU", "title": "Cancer Crusaders Invitation Cup 2020 (Teaser)" },
  { "id": "CZhvFnLIGfk", "title": "The meaning of Life is to give Life a meaning! Dr  VijayanandReddy" },
  { "id": "biZcezHpc-Q", "title": "Nenu Cancer ni Jeyinchanu Author Dr.Vijay Anand Reddy Exclusive interview II AIBIZ NEWS II" },
  // { "id": "awXOU8qudpQ", "title": "Myths In Cancer Busted - World Lung Cancer Awareness -  Dr.VijayAnandReddy Oncologist India" },
  { "id": "slJbuOf5llk", "title": "Breast CancerAwareness Facebook Live - Dr.Vijay Anand Reddy" },
  { "id": "7hllw2upFik", "title": "The Meaning of Life is to give LIFE Meaning | Dr. Vijayanand Reddy Oncologist India| TEDxOMCH" },
  { "id": "-w5YfADyPew", "title": "A Summer Guide to Protection from Skin Cancers" },
  { "id": "yKPSGzrQXA8", "title": "Mega Charity Event for Cancer Patients - Cancer Crusaders Invitation Cup 2018" },
  { "id": "AY9Kxsz_7yU", "title": "Cancer Crusaders Invitation Cup 2016" },
  { "id": "DMYQBkKhvnM", "title": "Sangita Reddy Speaks at I Am a Survivor Book Launch" },
  { "id": "JFvp4-KzN8A", "title": "Mega Event: I Am a Survivor Book Launch - Honouring Cancer Survivors" },
  { "id": "846va-01ccY", "title": "TRS MP, Kavitha, releases I Am a Survivor Book" },
  { "id": "0P8EwV2LSd4", "title": "Dr. Vijay Anand Reddy Speaks at I Am a Survivor Book Launch" },
  { "id": "lfOmkUZ0egQ", "title": "Cricketer VVS Laxman Supports Cancer Survivors - I Am a Survivor Book Launch" },
  { "id": "3ylkBG8hN_w", "title": "I Am a Survivor - 108 Life Stories of Cancer Survivors , a book by Dr Vijay Anand Reddy" },
  { "id": "olUyKte0wos", "title": "Women's Day Video - Dr. Vijayanandreddy Oncologist India" },
  { "id": "OkDpW7SppNo", "title": "Dil Se Hyderabadi, Dr Vijay Anand Reddy" },
  { "id": "JKewR8Ihyqk", "title": "TomoTherapy Cancer Treatment by Radiation Oncologist in Hyderabad | Dr.Vijayanandreddy" },
  // { "id": "kKF4Imcuxvg", "title": "Conquering Cancer through Awareness and Early Detection" },
  { "id": "GaGqlLadYxQ", "title": "Apollo Cancer Hospital World Cancer Day Flash Mob 2016. CURE Foundation, Dr P Vijay Anand Reddy" },
  { "id": "Pu5FVdrzlrg", "title": "A tribute to Dr. Vijay Anand Reddy by Apollo" },
  { "id": "UEMpKYgFBRw", "title": "Tobacco is a proven poison! Just Quit!" },
  { "id": "26cGUFPnk_M", "title": "Dr. Reddy is an avid Golfer" },
  { "id": "YXaM6VpTpPA", "title": "Dr. Reddy gives a detailed explanation on the revolutionary Novalis Tx" },
  { "id": "pl15271vZKQ", "title": "CVR Health chats with Dr. Reddy on Cancer" },
  { "id": "svTp1xH840o", "title": "What you should know about Chemotherapy" },
  // { "id": "rY9FD7-fiDY", "title": "Cancer Awareness Interview with Dr. Reddy- ABN Andhrajyothi" },
  { "id": "cSC89796vdk", "title": "Celebrity Yoga Trainer Swapna Talks on Yoga & Cancer" },
  { "id": "WBs7btOnJt0", "title": "A patient's brother talks about her cancer experience." },
  { "id": "1PebzPf38h0", "title": "Initiative by Apollo Cancer Hospital & Cure Foundation - Flash MOB World Cancer Day, Hyderabad" },
  { "id": "EI3MQxmuo9o", "title": "World Cancer Day - Dr. Vijay Anand Reddy" },
  { "id": "bx_3xqmjN6E", "title": "Cancer Causes in Teenage Girls" },
  { "id": "FrvpdJAGKyQ", "title": "Celebrity Speak" },
  { "id": "C_qQ8O6LnS0", "title": "I am a survivor" },
  { "id": "9bRpoBeXHfw", "title": "Retinoblastoma explanation by Dr. Vijay Anand Reddy." },
  { "id": "43BZ_zJaCic", "title": "Importance of PET CT scan in cancer treatments." },
  { "id": "tHs_KLKuBbw", "title": "Dr. Reddy suggests the right diet to prevent cancer ." },
  { "id": "ghGhuNyegh8", "title": "Advancement of Cancer Treatment" },
  { "id": "LIEt0PNL4Ss", "title": "An informative talk on various cancers." },
  { "id": "vytiPIeSkCs", "title": "Cancer Symptoms in Women" },
]

const videosPerPage = 12;

const VideoGalleryPage = () => {
  const [visibleCount, setVisibleCount] = useState(videosPerPage);
  const [modalVideo, setModalVideo] = useState(null);

  return (
    <>
    <Header/>
        <div className="min-h-screen bg-gray-50 py-16 px-4">
      {/* Hero Section */}
      <section className="pt-32 pb-10 text-center bg-medical-blue/10 rounded-b-3xl shadow-inner">
        <h1 className="text-4xl md:text-5xl font-extrabold text-medical-dark mb-3">
          Video Gallery
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg">
          Explore our curated collection of awareness and informative videos.
        </p>
      </section>

      {/* Video Grid */}
      <div className="max-w-7xl mt-12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {videos.slice(0, visibleCount).map((video) => (
          <div
            key={video.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
            onClick={() => setModalVideo(video.id)}
          >
            <div className="relative aspect-video">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 rounded-full p-4">
                  <FiPlay className="text-white w-9 h-9" />
                </div>
              </div>
            </div>
            <div className="p-5 text-center bg-white">
              <h3 className="text-lg font-semibold text-medical-dark line-clamp-2">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < videos.length && (
        <div className="text-center mt-16">
          <button
            onClick={() =>
              setVisibleCount((v) => Math.min(v + videosPerPage, videos.length))
            }
            className="bg-medical-blue text-white font-semibold text-lg px-10 py-4 rounded-full shadow hover:bg-medical-dark transition"
          >
            Show More
          </button>
        </div>
      )}

      {/* Modal Video Popup */}
      {modalVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setModalVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1`}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-3 right-3 text-white bg-black/60 hover:bg-red-600 rounded-full p-2 transition"
              onClick={() => setModalVideo(null)}
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>

  );
};

export default VideoGalleryPage;
