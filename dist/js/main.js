$(document).ready(function(){var b=!1,c=!1,a=!1;$(".mobile-nav-list").removeClass("d-none"),$(".mobile-nav-list").addClass("d-md-none"),$(".mobile-nav-list").hide(),$(this).scrollTop()>0&&($("#navbar").removeClass("transition-delay"),$("#navbar").addClass("bg-white"),a=!0),$("#nav-toggle").click(function(){$(".mobile-nav-list").is(":visible")?(a||($("#navbar").addClass("transition-delay"),$("#navbar").removeClass("bg-white")),c=!1):($("#navbar").removeClass("transition-delay"),$("#navbar").addClass("bg-white"),c=!0),$(".mobile-nav-list").slideToggle()}),$("#nav-toggle").on("click",function(){this.classList.toggle("active")}),$(window).on("scroll",function(){$(this).scrollTop()>0?($("#navbar").removeClass("transition-delay"),$("#navbar").addClass("bg-white"),a=!0):(c||$("#navbar").removeClass("bg-white"),a=!1),$(this).scrollTop()>80?b||($(".nav-pills").removeClass("desktop-lg-py"),$(".nav-pills").removeClass("desktop-md-py"),b=!0):b&&($(".nav-pills").addClass("desktop-md-py"),$(".nav-pills").addClass("desktop-lg-py"),b=!1)})})