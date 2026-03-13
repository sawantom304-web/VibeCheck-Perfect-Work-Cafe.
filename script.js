function toggleDesk(desk) {
  if (desk.classList.contains("booked")) {
    desk.classList.remove("booked");
    desk.innerText = "Desk Available";
  } else {
    desk.classList.add("booked");
    desk.innerText = "Booked";
  }
}

function filterCafes() {
  let filter = document.getElementById("vibeFilter").value;
  let cafes = document.querySelectorAll(".card");

  cafes.forEach(cafe => {
    let vibe = cafe.getAttribute("data-vibe");
    if (filter === "all" || vibe === filter) {
      cafe.style.display = "block";
    } else {
      cafe.style.display = "none";
    }
  });
}