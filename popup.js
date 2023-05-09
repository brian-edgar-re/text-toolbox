document.getElementById('analyzeBtn').addEventListener('click', () => {
    console.log('Button clicked');
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log('Current tab', tabs[0]);
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: getTextStats,
        },
        (results) => {
          console.log('Results', results);
  
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            updateResults('An error occurred: ' + chrome.runtime.lastError.message);
            return;
          }
  
          if (results && results[0]) {
            const message = `
              Text Statistics:<br>
              Words: ${results[0].result.words}<br>
              Characters: ${results[0].result.characters}<br>
              White Spaces: ${results[0].result.whiteSpaces}<br>
              Sentences: ${results[0].result.sentences}<br>
              Paragraphs: ${results[0].result.paragraphs}
            `;
            updateResults(message);
          } else {
            updateResults('Please select some text to analyze.');
          }
        }
      );
    });
  });
  
  function getTextStats() {
    const selectedText = window.getSelection().toString().trim();
    if (!selectedText) {
      return null;
    }
    const words = selectedText.split(/\s+/).length;
    const characters = selectedText.length;
    const whiteSpaces = selectedText.match(/\s/g)?.length || 0;
    const sentences = selectedText.split(/[.!?]+/).length - 1;
    const paragraphs = selectedText.split(/[\r\n]+/).length;
    return { words, characters, whiteSpaces, sentences, paragraphs };
  }
  
  function updateResults(content) {
    const resultsDiv = document.getElementById('results');
    if (typeof content === 'string') {
      resultsDiv.innerHTML = content;
    } else {
      const { words, characters, whiteSpaces, sentences, paragraphs } = content;
      resultsDiv.innerHTML = `
        <div class="stat">
          <span><i class="material-icons">text_fields</i>Words:</span>
          <span>${words}</span>
        </div>
        <div class="stat">
          <span><i class="material-icons">sort_by_alpha</i>Characters:</span>
          <span>${characters}</span>
        </div>
        <div class="stat">
          <span><i class="material-icons">space_bar</i>White Spaces:</span>
          <span>${whiteSpaces}</span>
        </div>
        <div class="stat">
          <span><i class="material-icons">stop</i>Sentences:</span>
          <span>${sentences}</span>
        </div>
        <div class="stat">
          <span><i class="material-icons">format_align_justify</i>Paragraphs:</span>
          <span>${paragraphs}</span>
          </div>
        `;
      }
    }
    
  