const color = "red";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log(`[Coloring] default background color is set to: ${color}`);
});
