browser.contextMenus.create({
    id: "AEC6128A-8B07-4224-B938-C2AF6FEC2EA6",
    title: "GoogleLensで画像検索",
    contexts: ["image"],
    icons: {
        "16": "img/icon_16x16.png"
    }
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "AEC6128A-8B07-4224-B938-C2AF6FEC2EA6") {
        var newTabParams = {
            url: "https://lens.google.com/uploadbyurl?url=" + encodeURI(info.srcUrl),
            active: true,
            index: tab.index + 1  // Open the new tab next to the current tab
        };
        var creating = browser.tabs.create(newTabParams);
    }
});
