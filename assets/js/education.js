AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Overview of Geo-Processing Using Python (ISRO,IIRS)",
    cardImage: "assets/images/education-page/certificate_IIRS202173630426-1.jpg",
    moocLink: "https://certificate.iirs.gov.in/checkstatus.php?uid=5e0a222edf7be9c457a2ef1af2876519&enm=IIRS202173630426",
  },
  {
    title: "Web Development (INTERNSHALA)",
    cardImage: "assets/images/education-page/WD.jpg",
    moocLink: "https://trainings.internshala.com/refer/web-development_prog_rep_copy_link/ISRP19193346",
  },
  {
    title: "Programing With Python (INTERNSHALA)",
    cardImage: "assets/images/education-page/py.jpg",
    moocLink: "https://trainings.internshala.com/refer/python_prog_rep_copy_link/ISRP19193346",
  },
  {
    title: "Javascript(UDEMY)",
    cardImage: "assets/images/education-page/udemyjs.jpg",
    moocLink: "https://www.udemy.com/course/javascript-for-beginners-the-complete-introduction-to-js/learn/lecture/26132320?start=0#overview",
  },
  {
    title: "CSS (UDEMY)",
    cardImage: "assets/images/education-page/udemycss.jpg",
    moocLink: "https://www.udemy.com/course/css-basics-to-advanced/learn/lecture/19281388?start=0#overview",
  },
  {
    title: "Ms Excel (UDEMY)",
    cardImage: "assets/images/education-page/msexcel.jpg",
    moocLink: "https://www.udemy.com/course/excel-tips-and-trick-learn-ms-excel-by-making-7-projects/learn/lecture/30230050?start=0#overview",
  },
  {
    title: "Introduction to Cybersecurity (CISCO)",
    cardImage: "assets/images/education-page/introtocybers.jpg",
    moocLink: "https://www.netacad.com/certificates?issuanceId=9327849c-3143-4b48-b4d5-da4f46482b44",
  },
  {
    title: "Cybersecurity Essential (CISCO)",
    cardImage: "assets/images/education-page/cybersecurityessential.jpg",
    moocLink: "https://www.netacad.com/certificates?issuanceId=2af4a0bb-beee-497f-8c62-6dbc27403e16",
  },
  {
    title: "IT Essential (CISCO)",
    cardImage: "assets/images/education-page/itessential.jpg",
    moocLink: "https://www.netacad.com/certificates?issuanceId=4f5b1c8c-40ce-412c-8dca-ca31873ff591",
  },
  {
    title: "MATLAB and Simulink Hands-On (IIT, Kanpur)",
    cardImage: "assets/images/education-page/matlab.jpg",
    moocLink:"https://prutor.ai/",
  },
  {
    title: "Blender Training",
    cardImage: "assets/images/education-page/blender.jpg",
    moocLink: "https://www.coursera.org/learn/server-side-nodejs",
  },
  {
    title: "CPP Training",
    cardImage: "assets/images/education-page/cpp.jpg",
    moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
