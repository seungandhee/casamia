// SLICK JS : VISUAL-SLIDER
$('.visual-slider').slick({
  centerMode: true,
  centerPadding: '500px',
  slidesToShow: 1,
  draggable: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 2000,
  loop: true,
  responsive: [
    {
      breakpoint: 1750,
      settings: {
        centerPadding: '300px'
      }
    },
    {
      breakpoint: 1300,
      settings: {
        centerPadding: '150px'
      }
    } ,
    {
      breakpoint: 1024,
      settings: {
        centerMode: false
      }
    }
  ]
});

// HEADER, EVENT, GOTOTOP
(function(){
  const headerEl = document.querySelector('header');
  const navEl = document.querySelector('nav');
  const eventEl = document.querySelector('.event');
  const gototopEl = document.querySelector('.gototop');

  function scrollHandler() {
    let scrollY = this.scrollY;
    
    if(scrollY > 2){
      headerEl.classList.add('active');
    } else {
      headerEl.classList.remove('active');
    }

    if(scrollY > 2 && navEl.classList.contains('active') == false) {
      eventEl.classList.add('active');
      gototopEl.classList.add('active');
    } else {
      eventEl.classList.remove('active');
      gototopEl.classList.remove('active');
    }

  }

  window.addEventListener('scroll', scrollHandler);
})();

// SEARCH
(function(){
  const searchEl = document.querySelector('.search');
  const searchWEl = document.querySelector('.search-window');
  const closeEl = document.querySelector('.close');

  searchEl.addEventListener('click', function(){
    searchWEl.classList.add('active');
  });

  closeEl.addEventListener('click', function(){
    searchWEl.classList.remove('active');
  });

})();

// TRIGGER
(function() {
  const triggerEl = document.querySelector('.trigger');
  const navEl = document.querySelector('nav');

  function clickHandler() {

    if(navEl.classList.contains('active') == false) {
      navEl.classList.add('active');
      this.classList.add('active');
    } else {
      navEl.classList.remove('active');
      this.classList.remove('active');
    }
  }

  triggerEl.addEventListener('click', clickHandler);
})();

// MOBILE GNB
(function(){
  const gnbEl = document.querySelectorAll('.gnb > li');

  for(let i=0; i<gnbEl.length; i++){
  
    gnbEl[i].addEventListener('click', function(){
      this.classList.toggle('active');
    })
  };
  

  window.addEventListener('resize', function(){
    
    gnbEl.forEach((li) => {

      li.classList.remove('active');
    })
  });

})();

// SLICK JS : SHORTCUT-SLIDER
$('.shortcut-slider').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 7
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 5
      }
    }, 
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

// HOME : BELL CLICK
(function(){
  const bellGroup = document.querySelectorAll('.bell');

  function clickHandler(e) {
    e.target.classList.toggle('active');
  }
  
  for(let i=0; i < bellGroup.length; i++) {
    bellGroup[i].addEventListener('click', clickHandler);
  }
  
})();

// FILTER MENU
(function(){
  const categoryBtn = document.querySelector('.category');
  const filteritems = document.querySelectorAll('.filter-item');

  categoryBtn.addEventListener('click', function(e){
    const filter = e.target.dataset.filter;
    const selected = e.target;


    filteritems.forEach((item) => {

      if(filter == null) {
        return;
      }

      if(filter === 'all' || filter === item.dataset.type) {
        item.classList.remove('invisible');
      } else {
        item.classList.add('invisible');
      }

    });
  });

})();

// SLICK JS : EXHIBITION-SLIDER
$('.exhibition-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2
      }
    } ,
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});





































