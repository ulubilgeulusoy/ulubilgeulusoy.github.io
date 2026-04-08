(function loadPrivateAnalytics() {
  var analyticsPath = "ga-private.html";

  fetch(analyticsPath, { cache: "no-store" })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Missing private analytics file.");
      }
      return response.text();
    })
    .then(function (html) {
      var container = document.createElement("div");
      container.innerHTML = html;

      Array.from(container.querySelectorAll("script")).forEach(function (scriptTag) {
        var script = document.createElement("script");

        Array.from(scriptTag.attributes).forEach(function (attr) {
          script.setAttribute(attr.name, attr.value);
        });

        script.text = scriptTag.text;
        document.head.appendChild(script);
      });
    })
    .catch(function () {
      // Intentionally silent: analytics file is private and optional.
    });
})();

