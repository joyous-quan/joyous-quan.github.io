//socroll事件
$(function() {
  scrollPage();
});

function scrollPage(){
  var currentSectionIndex = 0;
  var isScrolling = false;
  var sectionList = $('.section');
  var sectionCount = sectionList.length;
  var highlightedSection = 0;

  function adjustCurrentSectionIndex() {
    var $w = $(window);
    var winScrollTop = $w.scrollTop();
    var winHeight = $w.height();
    var viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height();
    for(var i = 0; i < sectionCount; i++) {
      var section = $(sectionList[i]);
      var sectionTop = section.offset().top;
      var sectionHeight = section.height();
      var sectionBottom = sectionTop + sectionHeight;
      if(winScrollTop <=  (sectionTop + sectionHeight) && winScrollTop > (sectionTop + sectionHeight*9/10)) {
        highlightedSection=i+1;
        currentSectionIndex = highlightedSection;
      }else{
        highlightedSection = i;
      }
      if((sectionBottom <= viewBottom) && (sectionTop >= viewTop)) {
        currentSectionIndex = i;
        break;
      }
    }
  }
  adjustCurrentSectionIndex();
  var ele;
  $(window).on('scroll', function(){
    adjustCurrentSectionIndex();
    if (currentSectionIndex == 0) {
      currentSectionIndex = 1;
    };
    ele=sectionList[currentSectionIndex];
    $(this).resize(function(){
      if(ele){
          scrollTo(ele);
      }
    });
  })

  function scrollTo(ele) {
    isScrolling = true;
    $('html,body').stop().animate({
      scrollTop: $(ele).offset().top
    }, 500, function(){
      isScrolling = false;
    });
  }

  $('body').on('mousewheel', function(e){
    e.preventDefault();
    if(!isScrolling) {
      var deltaY = e.deltaY;
      switch(deltaY){
        case 1:
        currentSectionIndex -= 1;
        if(currentSectionIndex < 0) {
          currentSectionIndex = 0;
        } else {
          scrollTo(sectionList[currentSectionIndex]);
        }
        break;
        case -1:
        currentSectionIndex += 1;
        if(currentSectionIndex > sectionCount - 1) {
          currentSectionIndex = sectionCount - 1;
        } else {
          scrollTo(sectionList[currentSectionIndex]);
        }
        break;
        default:
        break;
      }
    }
  });
}