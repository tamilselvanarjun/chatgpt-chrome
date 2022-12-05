function constructAndOpenGoogleSearchURL(query) {
  const searchURL = `https://www.google.com/search?q=${encodeURIComponent(
    query
  )}`;
  window.open(searchURL, "_blank");
}

function addGoogleButton() {
  setTimeout(function () {
    // Find all message containers
    var elements = $("div").filter('[class*="ConversationItem__ActionButton"]');

    // Loop through each element
    elements.each(function (i, element) {
      // Check if the element has a child with the class name "google-btn"
      // If it doesn't add a Google button
      if (!$(element).find(".google-btn").length) {
        var googleButton = $(
          '<button class="google-btn"><svg viewBox="0 0 48 48"><path d="M44.5,20H24v8.5h11.8C34.7,33.9,30.1,37,24,37c-7.2,0-13-5.8-13-13s5.8-13,13-13c3.1,0,5.9,1.1,8.1,2.9l6.4-6.4 C34.6,4.1,29.6,2,24,2C12.3,2,2,12.3,2,24s10.3,22,22,22c11.6,0,21-8.8,21.5-20h-8.5V24.5L44.5,20z" fill="currentColor" /></svg></button>'
        );
        googleButton.find("svg").css({
          width: "16px",
          height: "16px",
          fill: "rgb(172,172,189)",
        });
        $(element).append(googleButton);

        googleButton.click(function () {
          const query =
            googleButton.get(0).parentElement.parentElement.firstElementChild
              .textContent;
          constructAndOpenGoogleSearchURL(query);
        });
      }
    });
  }, 100);
}

$(document).ready(function () {
  const buttonStyle = {
    "font-size": "14px",
    "font-weight": "bold",
    "background-color": "#f2f2f2",
    border: "none",
    color: "#333",
    padding: "8px 16px",
    "border-radius": "5px",
  };

  var explainCodeButton = $("<button>Explain Code</button>");
  explainCodeButton.css(buttonStyle);
  explainCodeButton.click(function (e) {
    $("textarea").val("Explain this code: " + $("textarea").val());
    addGoogleButton();
  });

  var findBugButton = $("<button>Find Bugs</button>");
  findBugButton.css(buttonStyle);
  findBugButton.click(function (e) {
    $("textarea").val("Find bugs in this code: " + $("textarea").val());
    addGoogleButton();
  });

  // Create a flex div to hold the buttons
  var flexDiv = $("<div>").css({
    display: "flex",
    "justify-content": "flex-end",
    gap: "10px",
    marginTop: "10px",
  });

  // Add the buttons to the flex div
  flexDiv.append(explainCodeButton, findBugButton);

  // Add the flex div after the <textarea>
  $("textarea").parent().after(flexDiv);

  // Add Google Button after submit button is clicked or enter is pressed
  $("textarea").on("keyup", function (e) {
    if (e.keyCode === 13) {
      addGoogleButton();
    }
  });
  $('button[class*="PromptTextarea__PositionSubmit"]').click(function () {
    addGoogleButton();
  });
});
