const briefs = {
  canopy: "Attention is higher where the canopy looks uneven after a wet week. Walk those acres first with an advisor. This brief does not name a product, a rate, or a method.",
  edge: "Attention is higher on the edges than in the center. Treat that as a scouting order, not a treatment order. Confirm on the ground before any decision.",
  quiet: "Most of the sample field looks quiet. The useful next step is still a licensed review, not an assumption that nothing is happening.",
};

document.getElementById("brief-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const key = new FormData(event.target).get("sit");
  const node = document.getElementById("brief-out");
  node.hidden = false;
  node.innerHTML = `<p>${briefs[key]}</p><p><strong>Simulated attention note.</strong> Not licensed pest, disease, or application advice.</p>`;
});

document.getElementById("request-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const subject = encodeURIComponent("CropShield AI field brief walkthrough");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("note")}`,
  );
  const status = document.getElementById("request-status");
  status.hidden = false;
  status.textContent =
    "This page does not send mail. Your mail client will open with a draft.";
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
