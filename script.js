document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const login = document.getElementById("login").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const adresse = document.getElementById("adresse").value.trim();
  const email = document.getElementById("email").value.trim();
  const telephone = document.getElementById("telephone").value.trim();
  const dateNaissance = document.getElementById("dateNaissance").value;

  const errorEl = document.getElementById("error");
  errorEl.textContent = "";

  if (
    !login ||
    !password ||
    !confirmPassword ||
    !nom ||
    !prenom ||
    !adresse ||
    !email ||
    !telephone ||
    !dateNaissance
  ) {
    errorEl.textContent = "Veuillez remplir tous les champs.";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorEl.textContent = "Email invalide.";
    return;
  }

  if (password !== confirmPassword) {
    errorEl.textContent = "Les mots de passe ne correspondent pas.";
    return;
  }

  document.getElementById("signinForm").classList.add("hidden");
  const recap = document.getElementById("recap");
  recap.classList.remove("hidden");

  const recapList = document.getElementById("recapList");
  recapList.innerHTML = `
    <li><strong>Login :</strong> ${login}</li>
    <li><strong>Nom :</strong> ${nom}</li>
    <li><strong>Prénom :</strong> ${prenom}</li>
    <li><strong>Adresse :</strong> ${adresse}</li>
    <li><strong>Email :</strong> ${email}</li>
    <li><strong>Téléphone :</strong> ${telephone}</li>
    <li><strong>Date de naissance :</strong> ${dateNaissance}</li>
  `;
});
