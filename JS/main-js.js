<script>
const toggle = document.querySelector(".menu-toggle");
  const menu1 = document.querySelector(".header1");
  const menu2 = document.querySelector(".header2");

  toggle.addEventListener("click", () = {
    menu1.classList.toggle("active");
    menu2.classList.toggle("active");
  });
</script>