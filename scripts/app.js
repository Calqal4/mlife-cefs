// ================ [ ESC ] ================= //
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        hideAllCefPackets();
        sendCefPacket(CEF.HUD);
        cef.set_focus(false);
    }
});

// window.addEventListener('keydown', function(event) {
//     if (event.key.toUpperCase() === 'B') {
//         sendCefPacket(CEF.ANIMATIONS);
//         cef.set_focus(true);
//     }
// });



cef.on('Distribution:setInfo', (futa, totalmoney) => {
    document.getElementById('GADATANILI').textContent = futa;
    document.getElementById('DISTRIBUCIA-SHUA-MARJVENA-TEXT-GAMOMUSHAVEBULI').textContent = totalmoney;
})

cef.on("Taxi:setinfo", (kilientebi, totalmoney) => {
    document.getElementById('TaxiMoney').textContent = totalmoney;
    document.getElementById('TaxiKlientebi').textContent = kilientebi;
})

cef.on("Shaxta:setinfo", (tomrebi, totalmoney) => {
    document.getElementById('ShaxtaMoney').textContent = totalmoney;
    document.getElementById('ShaxtaTomrebi').textContent = tomrebi;
})

cef.on("Mshenebloba:setinfo", (tomrebi, totalmoney) => {
    document.getElementById('MsheneblobaMoney').textContent = totalmoney;
    document.getElementById('MsheneblobaTomrebi').textContent = tomrebi;
})

cef.on('showNotification', (id) => {
    ChangeIcon(id);
});