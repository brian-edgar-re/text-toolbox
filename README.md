# Text Statistics Chrome Extension

This Chrome extension allows users to analyze the selected text on a webpage and displays various text statistics, including the number of words, characters, white spaces, sentences, and paragraphs.

## Testing the extension locally

To test the extension locally, follow these steps:

1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" by toggling the switch in the top-right corner.
3. Click the "Load unpacked" button that appears.
4. In the file selection dialog, navigate to the directory containing the extension files (i.e., `manifest.json`, `popup.html`, `popup.js`) and click "Open".

The extension should now be installed and active in your browser. You should see its icon in the top-right corner of the Chrome window. Click on the icon and select some text on a webpage to analyze.

## Generating the final build for release

Before submitting the extension to the Chrome Web Store, you need to create a ZIP file containing all the necessary files.

1. Ensure your extension's directory contains all the required files:
    - `manifest.json`
    - `popup.html`
    - `popup.js`
2. Create a ZIP file of the extension directory.
    - On Windows: Right-click the extension folder, choose "Send to", and then click "Compressed (zipped) folder".
    - On macOS: Right-click the extension folder, choose "Compress", and a ZIP file will be created in the same directory.
    - On Linux: Use a tool like `zip` or an archive manager to create a ZIP file containing the extension folder.

## Submitting to the Chrome Web Store

Follow these steps to submit your extension to the Chrome Web Store:

1. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole) and sign in with your Google account.
2. Click the "Add new item" button.
3. Click "Choose file" and select the ZIP file you created earlier.
4. Fill in the required information, such as a detailed description, an icon for the extension, and screenshots or a video showcasing the extension in use.
5. Pay the one-time developer registration fee, if you haven't done so already.
6. Click "Publish" to submit the extension for review.

Once your extension has been reviewed and approved, it will be available on the Chrome Web Store for users to download and install.

For more information on publishing your extension, refer to the [official Chrome Web Store documentation](https://developer.chrome.com/webstore/publish).