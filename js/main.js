
particlesJS.load('particles', '../js/particles.json', function() {
  console.log('callback - itsmaydo.js config loaded');
});

$('.design-feature').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
    mobileFirst: true,
    // settings: "unslick",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    prevArrow: '<span class="material-symbols-outlined  left_arrow">arrow_back_ios</span>',
    nextArrow:'<span class="material-symbols-outlined  right_arrow">arrow_forward_ios</span>'
  });
  $('.dev-feature').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    prevArrow: '<span class="material-symbols-outlined  left_arrow">arrow_back_ios</span>',
    nextArrow:'<span class="material-symbols-outlined  right_arrow">arrow_forward_ios</span>'
  });

  //  SELECETORS
  const Cname = document.getElementById('name')
  const email = document.getElementById('email')
  const mobile = document.getElementById('mobile')
  const whatsapp = document.getElementById('whatsapp')
  const body = document.getElementById('disc')
  const send = document.getElementById('send')
  
  send.addEventListener('click', sendEmail)

  function sendEmail(e) {
    e.preventDefault()
    console.log(Cname.value);
    console.log(email.value);
    console.log(mobile.value);
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: 'client@outcropmediaa.com',
      Password: "4270C45518C00504A3478725F0126D6FFCA7",
      To: 'outcropmedia2030@gmail.com',
      From: 'client@outcropmediaa.com',
      Subject: "طلب عمل جيدد",
      Body: `
          <div style="background-color: #fbf9f9; margin-bottom: 20px; padding: 20px; line-height: 20px;" dir="rtl">
            <p style="font-weight: bold; color: darkslategray;">اسم المرسل <span style="padding-right: 10px; color: black;">${Cname.value}</span></p>
            <p style="font-weight: bold; color: darkslategray;">البريد الالكتروني<span style="padding-right: 10px; color: black;">${email.value}</span></p>
            <p style="font-weight: bold; color: darkslategray;">رقم جوال<span style="padding-right: 10px; color: black;">${mobile.value}</span></p>
            <p style="font-weight: bold; color: darkslategray;">رقم واتساب<span style="padding-right: 10px; color: black;">${whatsapp.value}</span></p>
          </div>
          <div dir="rtl">
              <p style="font-size: 20px; padding: 20px;">${body.value}</p>
          </div>
            `,
    })
      .then(function (message) {
        // alert("تم ارسال الرسالة بنجاح")

        const success = document.getElementById("success");
        if (success.style.display === "none") {
          success.style.display = "block";
        } else {
          success.style.display = "none";
        }

        Cname.value=''
        email.value=''
        mobile.value=''
        whatsapp.value=''
        body.value=''
      });
  }
    
    const options = {
      threshold: "0",
      rootMargin: "-220px"
    }
    
const animatedServices = document.querySelectorAll('.animate__animated')

const observer = new IntersectionObserver((animatedServices, observer) => {

  new Promise((resolve, reject) => {
      animatedServices.forEach(service => {
        service.target.style.opacity = 1
        service.target.classList.add('animate__flipInY');
    
        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
          event.stopPropagation();
          service.target.classList.remove('animate__flipInY');
          resolve('Animation ended');
        }
        service.target.addEventListener('animationend', handleAnimationEnd, {once: true});
    })
  });
}, options)

animatedServices.forEach(service => {
  observer.observe(service)
})