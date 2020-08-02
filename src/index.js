import "./sass/styles.scss";

document.getElementById("app").innerHTML = `
  <h1>lorem ipsum dolor amit </h1>

  <h2>Header 2</h2>

  <h3>Header 3</h3>

  <h4>Header 4</h4>

  <p>
  Paragraph with
    <span id="altered" hidden
      ><i>italic</i>, <strong>strong</strong> and <em>em</em></span
    >
  </p>

  <button
    onclick="document.querySelector('#altered').removeAttribute('hidden')"
  >
    show altered to see fetch of italic font
  </button>

  <code>
    <pre>
  const a = 4 + 7;
  </pre
    >
  </code>
`;
