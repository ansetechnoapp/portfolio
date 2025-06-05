function render$1({ slots: ___SLOTS___ }) {
		return `
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- color of address bar in mobile browser -->
    <meta name="theme-color" content="#2B2B35">
    <!-- favicon  -->
    <link rel="shortcut icon" href="../../assets/img/thumbnail.ico" type="image/x-icon">
      <!-- swiper css -->
      <link rel="stylesheet" href="../../assets/styles/Cv/plugins/swiper.min.css">
  
    `
	}
render$1["astro:html"] = true;

function render({ slots: ___SLOTS___ }) {
		return `<!-- jquery js -->
<script src="../../assets/js/plugins/jquery.min.js"></script>
<!-- anime js -->
<script src="../../assets/js/plugins/anime.min.js"></script>
<!-- swiper js -->
<script src="../../assets/js/plugins/swiper.min.js"></script>
<!-- progressbar js -->
<script src="../../assets/js/plugins/progressbar.min.js"></script>
<!-- smooth scrollbar js -->
<script src="../../assets/js/plugins/smooth-scrollbar.min.js"></script>
<!-- overscroll js -->
<script src="../../assets/js/plugins/overscroll.min.js"></script>
<!-- typing js -->
<script src="../../assets/js/plugins/typing.min.js"></script>
<!-- isotope js -->
<script src="../../assets/js/plugins/isotope.min.js"></script>
<!-- fancybox js -->
<script src="../../assets/js/plugins/fancybox.min.js"></script>
<!-- swup js -->
<script src="../../assets/js/plugins/swup.min.js"></script>

<!-- main js -->
<script src="../../assets/js/main.js"></script> `
	}
render["astro:html"] = true;

export { render as a, render$1 as r };
