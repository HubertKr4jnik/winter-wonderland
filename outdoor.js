WA.onInit().then(() => {
  console.log("Loading snow iframe...");

  const iframe = document.createElement("iframe");
  Object.assign(iframe.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    pointerEvents: "none", // make sure users can still click through
    border: "none",
    zIndex: "2147483647",
  });
  iframe.src = "snow.html"; // adjust path if needed

  document.body.appendChild(iframe);
});
