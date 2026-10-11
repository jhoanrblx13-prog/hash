document.getElementById("go").onclick = async () => {
  const text = document.getElementById("text").value;
  const body = await (await fetch("/api", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({text})})).json();
  document.getElementById("out").textContent = body.sha256 + "\n" + body.bytes + " bytes";
};
