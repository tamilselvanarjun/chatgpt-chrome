function addToPrompt(prompt) {
  $("textarea").val(prompt + $("textarea").val());
}

function addAndExecute(prompt) {
  addToPrompt(prompt);
  var anchor = $("textarea").parent();
  anchor.find("button").click();
}

$(document).ready(function () {
  var anchor = $("textarea").parent();

  var container = $("<div></div>").css({
    display: "flex",
    flexDirection: "row-reverse",
    gap: "10px",
    marginTop: "10px",
  });
  anchor.after(container);

  // Add buttons to container
  const style = {
    "font-size": "14px",
    "font-weight": "bold",
    "background-color": "#f2f2f2",
    border: "none",
    color: "#333",
    padding: "8px 16px",
    "border-radius": "5px",
  };
  var explainBtn = $("<button>Explain Code</button>")
    .css(style)
    .click(function () {
      addAndExecute("Explain this code: ");
    });
  var findBugsBtn = $("<button>Find Bugs</button>")
    .css(style)
    .click(function () {
      addAndExecute("Find bugs in this code: ");
    });
  container.append(explainBtn).append(findBugsBtn);
});
