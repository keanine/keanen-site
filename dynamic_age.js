function calculateAge (birthDate, otherDate)
{
  birthDate = new Date(birthDate);
  otherDate = new Date(otherDate);

  var years = (otherDate.getFullYear() - birthDate.getFullYear());

  if (otherDate.getMonth() < birthDate.getMonth() || 
      otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
      years--;
  }

  return years;
}

var d = new Date();
document.getElementById("Description").innerHTML = document.getElementById("Description").innerHTML.replace('KEANEN_AGE', calculateAge("10/10/1996", (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear()));