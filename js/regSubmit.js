function submitRegForm() {
  let city = document.getElementById("city").value;
  let band_name = document.getElementById("band_name").value;
  let genre = document.getElementById("genre").value;
  let email = document.getElementById("email").value;
  let past_ach = document.getElementById("past_ach").value;
  let num_mem = document.getElementById("num_mem").value;
  let mem1_name = document.getElementById("mem1_name").value;
  let mem1_contact = document.getElementById("mem1_contact").value;
  let mem2_name = document.getElementById("mem2_name").value;
  let mem2_contact = document.getElementById("mem2_contact").value;
  let links = document.getElementById("links").value;
  let inv = false;

  function setInv(id) {
    document.getElementById(id).style.borderColor = "red";
    document.getElementById(id).style.borderWidth = "3px";
  }

  function setNormal(id) {
    document.getElementById(id).style.borderColor = "none";
    document.getElementById(id).style.borderWidth = "0px";
  }

  if (city == "") {
    setInv("city");
    inv = true;
  }
  else {
    setNormal("city");
  }
  if (band_name == "") {
    setInv("band_name");
    inv = true;
  }
  else {
    setNormal("band_name");
  }
  if (genre == "") {
    setInv("genre");
    inv = true;
  }
  else {
    setNormal("genre");
  }
  if (typeof email !== "undefined") {
    let lastAtPos = email.lastIndexOf("@");
    let lastDotPos = email.lastIndexOf(".");

    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        email.length - lastDotPos > 2
      )
    ) {
      setInv("email");
      inv = true;
    }
    else {
      setNormal("email");
    }
  }
  if (past_ach == "") {
    setInv("past_ach");
    inv = true;
  }
  else {
    setNormal("past_ach");
  }
  if (num_mem == "") {
    setInv("num_mem");
    inv = true;
  }
  else {
    setNormal("num_mem");
  }
  if (mem1_name == "") {
    setInv("mem1_name");
    inv = true;
  }
  else {
    setNormal("mem1_name");
  }
  if (mem1_contact == "" || mem1_contact.length != 10) {
    setInv("mem1_contact");
    inv = true;
  }
  else {
    setNormal("mem1_contact");
  }
  if (mem2_name == "") {
    setInv("mem2_name");
    inv = true;
  }
  else {
    setNormal("mem2_name");
  }
  if (mem2_contact == "" || mem2_contact.length != 10) {
    setInv("mem2_contact");
    inv = true;
  }
  else {
    setNormal("mem2_contact");
  }
  if (links == "") {
    setInv("links");
    inv = true;
  }
  else {
    setNormal("links");
  }

  if (inv) {
    alert("Please fill out all required fields correctly");
    return;
  }

  let formData = {
    city: city,
    band_name: band_name,
    genre: genre,
    emailid: email,
    original_composition: past_ach,
    no_of_members: num_mem,
    bandmembers: "Name1: " + mem1_name + "No1: " + mem1_contact + " ; " + "Name2: " + mem2_name + "No2: " + mem2_contact,
    facebook_link: links,
  };
  // fetch("http://127.0.0.1:8000/livewire/create/", {
  //   city: city,
  //   band_name: band_name,
  //   // genre: genre,
  //   emailid: email,
  //   original_composition: past_ach,
  //   no_of_members: num_mem,
  //   bandmembers: "Name1: " + mem1_name + "No1: " + mem1_contact + " ; " + "Name2: " + mem2_name + "No2: " + mem2_contact,
  //   facebook_link: links,
  // }).then((res) => {
  //   alert("Registered Succesfully");
  //   console.log(res);
  // }).catch((err) => {
  //   alert("Some error occured");
  //   console.log(err);
  // });
  // fetch("http://127.0.0.1:8000/livewire/create/", {
  fetch("https://api4.moodi.org/livewire/create", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    // body: formData,
  }).then((res) => {
    console.log(res)
    if (res.ok) {
      alert("Registered Succesfully");
      document.getElementById("city").value = "";
      document.getElementById("band_name").value = "";
      document.getElementById("genre").value = "";
      document.getElementById("email").value = "";
      document.getElementById("past_ach").value = "";
      document.getElementById("num_mem").value = "";
      document.getElementById("mem1_name").value = "";
      document.getElementById("mem1_contact").value = "";
      document.getElementById("mem2_name").value = "";
      document.getElementById("mem2_contact").value = "";
      document.getElementById("links").value = "";
    }
    else {
      alert("There is some problem with registration, please try again later")
    }
    console.log(res);
  }).catch((err) => {
    alert("Some error occured");
    console.log(err);
  });
}
