
document.getElementById('login-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim().toLowerCase();

  if (username === 'ambulatorio' && password === 'ambulatorio') {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwWU8J-He1l9V-6STrNYc22Io3PJquOLXkge-PBrMsIqd1yWTzJh1a02aWZqOpZSsclxQ/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          setor: "Anatomia Patológica"
        })
      });

      if (response.ok) {
        console.log("Dados enviados com sucesso.");
      } else {
        console.error("Erro ao enviar os dados.");
      }
    } catch (error) {
      console.error("Erro na comunicação com a API:", error);
    }

    window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiMWNjY2FhOTMtNGQ4OS00YzRkLThlNjItZjQ5Yjc5MmU1YzU0IiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGE2Y2MwMTM2NSJ9";
  } else {
    document.getElementById('error-message').style.display = "block";
  }
});
