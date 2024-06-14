/* =============== [ CEF LIST ] ============= */
const CEF = {
    LOGIN: 0,
    REG: 1,
    HUD: 2,
    CHOOSESKIN: 3,
    BILETI_N1: 4,
    BILETI_N2: 5,
    BILETI_N3: 6,
    BILETI_N4: 7,
    BILETI_N5: 8,
    BILETI_N6: 9,
    PRAKTIKA_N1: 10,
    TEORIA_N1: 11,
    CHAIWRA_N1: 12,
    QUEST_N1: 13,
    QUEST_N2: 14,
    QUEST_N3: 15,
    QUEST_N4: 16,
    QUEST_N5: 17,
    SPEEDOMETER: 18,
    POLICENPC: 19,
    AVTOBAZROBA: 20,
    ANIMATIONS: 21,
    ATMMAIN: 22,
    ATMGANAGDEBA: 23,
    ATMMOBILE: 24,
    ATMSAJARIMO: 25,
    MAGAZIA: 26,
    SHEZENA: 27,
    ALOGIN: 28,
    CAR_PANEL: 29,
    AUTOASISTENT: 30,
    SAPIRFARESHO: 31,
    AVTOASISTENTI: 32,
    DISTRIBUCIA: 33,
    TAXI_PROGRESS: 34,
    SHAXTA_PROGRESS: 35,
    MSHENEBLOBA_PROGRESS: 36,
    MART: 37,
    DASTUR: 38,
    GUNSHOP: 39,
    MEQANIKOSI: 40,
    SAVALI: 41,
    SAXLI: 42,
    SPEED: 43
};


function setbg(color){
    document.body.style.backgroundColor = color;
}

// setbg("red")


/* ==================== [ მოქმედებები ინტერფეისებზე ] ================= */
function hideAllCefPackets(){
    document.getElementById("Authorization-Section").style.display = "none";
    document.getElementById("Registration-Section").style.display = "none";
    document.getElementById("MainMenu-Section").style.display = "none";
    document.getElementById("MainMenu-DonateSection").style.display = "none";

    document.getElementById("Bankomat-MainSection").style.display = "none";
    document.getElementById("Bankomat-GanagdebaSection").style.display = "none";
    document.getElementById("Bankomat-SajarimoSection").style.display = "none";
    document.getElementById("Bankomati-TelefoniSection").style.display = "none";

    document.getElementById('Recon-Section').style.display = "none";
    // document.getElementById('Hud-Section').style.display = "none";
    
    document.getElementById("SKINIS-ARCHEVA").style.display = "none";
    document.getElementById("BILETIN1").style.display = "none";
    document.getElementById("BILETIN2").style.display = "none";
    document.getElementById("BILETIN33").style.display = "none";
    document.getElementById("BILETI4").style.display = "none";
    document.getElementById("BILETI5").style.display = "none";
    document.getElementById("BILETI6").style.display = "none";
    document.getElementById("PRAKTIKA1").style.display = "none";
    document.getElementById("TEORIA1").style.display = "none";
    document.getElementById("CHAWRA1").style.display = "none";
    document.getElementById("Quest-N1Section").style.display = "none";
    document.getElementById("Quest-N2Section").style.display = "none";
    document.getElementById("Quest-N3Section").style.display = "none";
    document.getElementById("Quest-N4Section").style.display = "none";
    document.getElementById("Quest-N5Section").style.display = "none";
    document.getElementById("speeds").style.display = "none";
    document.getElementById('Police-NPC').style.display = "none";
    document.getElementById('ANIMACIEBI-Section').style.display = "none";
    document.getElementById('AVTOBAZROBA-Section').style.display = "none";

    document.getElementById('Bankomat-MainSection').style.display = "none";
    document.getElementById('Bankomat-GanagdebaSection').style.display = "none";
    document.getElementById('Bankomat-SajarimoSection').style.display = "none";
    document.getElementById('Bankomati-TelefoniSection').style.display = "none";
    document.getElementById('magazia-background').style.display = "none";
    document.getElementById('gsurt-shezena').style.display = "none";//avtobazrobaa
    document.getElementById('AVTOBAZROBA-Section').style.display = "none";
    document.getElementById('alogini').style.display = "none";
    document.getElementById('MANQANA-PANEL').style.display = "none";


    document.getElementById('DISTRIBUCIA-BG-1').style.display = "none";
    document.getElementById('TAQSI-BG-1').style.display = "none";
    document.getElementById('SHAXTA-BG-1').style.display = "none";
    document.getElementById('SAMSHENEBLO-BG-1').style.display = "none";
    document.getElementById('AVTOASISTENTI-Section').style.display = "none";
    document.getElementById('SAPIRPARESHO-Section').style.display = "none";
    document.getElementById('MART-CONTAINER').style.display = "none";

    document.getElementById('DASTUR-CONTAINER').style.display = "none";
    document.getElementById('gun-container').style.display = "none";
    document.getElementById('MEQANIKOSI-CONTAINER').style.display = "none";

    document.getElementById('SAXLI-CONTAINER').style.display = "none";
    document.getElementById('speedometer-container').style.display = "none";

}
function sendCefPacket(response) {
    hideCefPacket(CEF.HUD)
    switch (response) {
        case CEF.LOGIN:
            hideAllCefPackets();
            document.getElementById("Authorization-Section").style.display = "block";
            break;

        case CEF.REG:
            hideAllCefPackets();
            document.getElementById("Registration-Section").style.display = "block";
            break;

        case CEF.HUD:
            document.getElementById("Hud-Section").style.display = "block";
            break;

        case CEF.CHOOSESKIN:
            document.getElementById("SKINIS-ARCHEVA").style.display = "block";
            break;
        
        case CEF.BILETI_N1:
            document.getElementById("BILETIN1").style.display = "block";
            break;

        case CEF.BILETI_N2:
            document.getElementById("BILETIN2").style.display = "block";
            break;

        case CEF.BILETI_N3:
            document.getElementById("BILETIN33").style.display = "block";
            break;

        case CEF.BILETI_N4:
            document.getElementById("BILETI4").style.display = "block";
            break;

        case CEF.BILETI_N5:
            document.getElementById("BILETI5").style.display = "block";
            break;

        case CEF.BILETI_N6:
            document.getElementById("BILETI6").style.display = "block";
            break;

        case CEF.PRAKTIKA_N1:
            document.getElementById("PRAKTIKA1").style.display = "block";
            break;

        case CEF.TEORIA_N1:
            document.getElementById("TEORIA1").style.display = "block";
            break;

        case CEF.CHAIWRA_N1:
            document.getElementById("CHAWRA1").style.display = "block";
            break;

        case CEF.QUEST_N1:
            document.getElementById("Quest-N1Section").style.display = "block";
            break;

        case CEF.QUEST_N2:
            document.getElementById("Quest-N2Section").style.display = "block";
            break;

        case CEF.QUEST_N3:
            document.getElementById("Quest-N3Section").style.display = "block";
            break;

        case CEF.QUEST_N4:
            document.getElementById("Quest-N4Section").style.display = "block";
            break;

        case CEF.QUEST_N5:
            document.getElementById("Quest-N5Section").style.display = "block";
            break;

        case CEF.SPEEDOMETER:
            document.getElementById("speeds").style.display = "block";
            break

        case CEF.POLICENPC:
            document.getElementById("Police-NPC").style.display = "block";
            break

        case CEF.ANIMATIONS:
            document.getElementById("ANIMACIEBI-Section").style.display = "block";
            break

        case CEF.AVTOBAZROBA:
            document.getElementById("AVTOBAZROBA-Section").style.display = "block";
            break

        case CEF.ATMMAIN:
            document.getElementById("Bankomat-MainSection").style.display = "block";
            break
        
        case CEF.ATMGANAGDEBA:
            document.getElementById("Bankomat-GanagdebaSection").style.display = "block";
            break
        
        case CEF.ATMSAJARIMO:
            document.getElementById("Bankomat-SajarimoSection").style.display = "block";
            break
        
        case CEF.ATMMOBILE:
            document.getElementById("Bankomati-TelefoniSection").style.display = "block";
            break
        
        case CEF.MAGAZIA:
            document.getElementById("magazia-background").style.display = "block";
            break

        case CEF.SHEZENA:
            document.getElementById("gsurt-shezena").style.display = "block";
            break

        case CEF.ALOGIN:
            document.getElementById('alogini').style.display = "block";
            break

        case CEF.CAR_PANEL:
            document.getElementById('MANQANA-PANEL').style.display = "block";
            break

        case CEF.SAPIRFARESHO:
            document.getElementById('SAPIRPARESHO-Section').style.display = "block";
            break

        case CEF.AVTOASISTENTI:
            document.getElementById('AVTOASISTENTI-Section').style.display = "block";
            break

        case CEF.DISTRIBUCIA:
            document.getElementById('DISTRIBUCIA-BG-1').style.display = "block";
            break

        case CEF.TAXI_PROGRESS:
            document.getElementById('TAQSI-BG-1').style.display = "block";
            break

        case CEF.SHAXTA_PROGRESS:
            document.getElementById('SHAXTA-BG-1').style.display = "block";
            break

        case CEF.MSHENEBLOBA_PROGRESS:
            document.getElementById('SAMSHENEBLO-BG-1').style.display = "block";
            break

        case CEF.MART:
            document.getElementById('MART-CONTAINER').style.display = "block";
            break   
            
        case CEF.DASTUR:
            document.getElementById('DASTUR-CONTAINER').style.display = "block";
            break

        case CEF.GUNSHOP:
            document.getElementById('gun-container').style.display = "block";
            break

        case CEF.MEQANIKOSI:
            document.getElementById('MEQANIKOSI-CONTAINER').style.display = "block";
            break

        case CEF.SAVALI:
            document.getElementById('SAVALI-CONTAINER').style.display = "block";
            break

        case CEF.SAXLI:
            document.getElementById('SAXLI-CONTAINER').style.display = "block";
            break

        case CEF.SPEED:
            document.getElementById('speedometer-container').style.display = "block";
            break 
    }
}

function hideCefPacket(response) {
    switch (response) {
        case CEF.LOGIN:
            document.getElementById("Authorization-Section").style.display = "none";
            break;

        case CEF.REG:
            document.getElementById("Registration-Section").style.display = "none";
            break;

        case CEF.HUD:
            document.getElementById("Hud-Section").style.display = "none";

        case CEF.CHOOSESKIN:
            document.getElementById("SKINIS-ARCHEVA").style.display = "none";
            break;
        
        case CEF.BILETI_N1:
            document.getElementById("BILETIN1").style.display = "none";
            break;

        case CEF.BILETI_N2:
            document.getElementById("BILETIN2").style.display = "none";
            break;

        case CEF.BILETI_N3:
            document.getElementById("BILETIN33").style.display = "none";
            break;

        case CEF.BILETI_N4:
            document.getElementById("BILETI4").style.display = "none";
            break;

        case CEF.BILETI_N5:
            document.getElementById("BILETI5").style.display = "none";
            break;

        case CEF.BILETI_N6:
            document.getElementById("BILETI6").style.display = "none";
            break;

        case CEF.PRAKTIKA_N1:
            document.getElementById("PRAKTIKA1").style.display = "none";
            break;

        case CEF.TEORIA_N1:
            document.getElementById("TEORIA1").style.display = "none";
            break;

        case CEF.CHAIWRA_N1:
            document.getElementById("CHAWRA1").style.display = "none";
            break;
    
        case CEF.QUEST_N1:
            document.getElementById("Quest-N1Section").style.display = "none";
            break;

        case CEF.QUEST_N2:
            document.getElementById("Quest-N2Section").style.display = "none";
            break;

        case CEF.QUEST_N3:
            document.getElementById("Quest-N3Section").style.display = "none";
            break;

        case CEF.QUEST_N4:
            document.getElementById("Quest-N4Section").style.display = "none";
            break;

        case CEF.QUEST_N5:
            document.getElementById("Quest-N5Section").style.display = "none";
            break;
            
        case CEF.SPEEDOMETER:
            document.getElementById("speeds").style.display = "none";
            break

        case CEF.POLICENPC:
            document.getElementById("Police-NPC").style.display = "none";
            break

        case CEF.ANIMATIONS:
            document.getElementById("ANIMACIEBI-Section").style.display = "none";
            break

        case CEF.AVTOBAZROBA:
            document.getElementById("AVTOBAZROBA-Section").style.display = "none";
            break
    
        case CEF.ATMMAIN:
            document.getElementById("Bankomat-MainSection").style.display = "none";
            break
        
        case CEF.ATMGANAGDEBA:
            document.getElementById("Bankomat-GanagdebaSection").style.display = "none";
            break
        
        case CEF.ATMSAJARIMO:
            document.getElementById("Bankomat-SajarimoSection").style.display = "none";
            break
        
        case CEF.ATMMOBILE:
            document.getElementById("Bankomati-TelefoniSection").style.display = "none";
            break

        case CEF.MAGAZIA:
            document.getElementById("magazia-background").style.display = "none";
            break
            
        case CEF.SHEZENA:
            document.getElementById("gsurt-shezena").style.display = "none";
            break

        case CEF.ALOGIN:
            document.getElementById('alogini').style.display = "none";
            break

        case CEF.CAR_PANEL:
            document.getElementById('MANQANA-PANEL').style.display = "none";
            break
        
        case CEF.SAPIRFARESHO:
            document.getElementById('SAPIRPARESHO-Section').style.display = "none";
            break
        
        case CEF.AVTOASISTENTI:
            document.getElementById('AVTOASISTENTI-Section').style.display = "none";
            break

        case CEF.DISTRIBUCIA:
            document.getElementById('DISTRIBUCIA-BG-1').style.display = "none";
            break
    
        case CEF.TAXI_PROGRESS:
            document.getElementById('TAQSI-BG-1').style.display = "none";
            break

        case CEF.SHAXTA_PROGRESS:
            document.getElementById('SHAXTA-BG-1').style.display = "none";
            break

        case CEF.MSHENEBLOBA_PROGRESS:
            document.getElementById('SAMSHENEBLO-BG-1').style.display = "none";
            break
    
        case CEF.MART:
            document.getElementById('MART-CONTAINER').style.display = "none";
            break  

        case CEF.DASTUR:
            document.getElementById('DASTUR-CONTAINER').style.display = "none";
            break

        case CEF.GUNSHOP:
            document.getElementById('gun-container').style.display = "none";
            break

        case CEF.MEQANIKOSI:
            document.getElementById('MEQANIKOSI-CONTAINER').style.display = "none";
            break

        case CEF.SAVALI:
            document.getElementById('SAVALI-CONTAINER').style.display = "none";
            break

        case CEF.SAXLI:
            document.getElementById('SAXLI-CONTAINER').style.display = "none";
            break

        case CEF.SPEED:
            document.getElementById('speedometer-container').style.display = "none";
            break 
    }
}
cef.on("game:CEF:sendPackage", (responsecode) => {
    sendCefPacket(responsecode);
});
cef.on("game:CEF:hidePackage", (responsecode) => {
    hideCefPacket(responsecode);
});




// <!-- =================== [ ოვტორიზოციო ] =================== -->
cef.on('login:name', (nickname) => {
    document.getElementById('Authorization-PlayerNickname').textContent = nickname;
});

cef.on('login:wrongpass', (response) => {
    document.getElementById('AVTORIZACIA-SHEIYVANE-PAROLI-BG').style.backgroundColor = '#ce464626';
    document.querySelector('.AVTORIZACIA-SHEIYVANE-PAROLI-ICON2').style.backgroundImage = 'url("http://wh14473.web3.maze-host.ru/FOTOEBI/PAROLI-ICON-WITELI.png")';
    document.getElementById('AVTORIZACIA-SHEIYVANE-PAROLI-INPUT').placeholder = 'პოროლი ოროსწორიო';
    document.getElementById('AVTORIZACIA-SHEIYVANE-PAROLI-INPUT').value = '';
});

function isValidPassword(password) {
    if (password.length < 6 || password.length > 15) {
        return false;
    }
    var pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(password);
}
function clickLogined() {
    const user = document.getElementById('Authorization-PlayerNickname').textContent;
    const password = document.getElementById('AVTORIZACIA-SHEIYVANE-PAROLI-INPUT').value;

    if (!isValidPassword(password)) {
        document.getElementById('AVTORIZACIA-SHEIYVANE-PAROLI-BG').style.backgroundColor = '#ce464626';
        document.querySelector('.AVTORIZACIA-SHEIYVANE-PAROLI-ICON2').style.backgroundImage = 'url("http://wh14473.web3.maze-host.ru/FOTOEBI/PAROLI-ICON-WITELI.png")';
        document.getElementById('AVTORIZACIA-SHEIYVANE-PAROLI-INPUT').placeholder = 'პოროლი ოროსწორიო';
        document.getElementById('AVTORIZACIA-SHEIYVANE-PAROLI-INPUT').value = '';
        return;
    }

    let loginattemp = user + ',' + password;
    cef.emit('pwd:login', loginattemp);
}





// <!-- =================== [ რეგისტროციო ] =================== -->
let gender = 0;
cef.emit("reg:name")
cef.on('reg:name', (response) => {
    document.getElementById('Registration-PlayerNickname').textContent = response;
});

function setgender(genderid){
    switch (genderid){
        case 1:
            document.getElementById('REGISTRACIA-MDEDROBITI-GILAKI').style.backgroundColor = 'rgba(0,0,0,0.15000000596046448)';
            document.getElementById('REGISTRACIA-MAMROBITI-GILAKI').style.backgroundColor = 'rgba(62,139,255,1)';
            gender = 1;
            break;
        case 2:
            document.getElementById('REGISTRACIA-MAMROBITI-GILAKI').style.backgroundColor = 'rgba(0,0,0,0.15000000596046448)';
            document.getElementById('REGISTRACIA-MDEDROBITI-GILAKI').style.backgroundColor = 'rgba(62,139,255,1)';
            gender = 2;
            break;
    }
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function Registration() {
    const user = document.getElementById('Registration-PlayerNickname').textContent;
    const password = document.getElementById('REGISTRACIA-SHEIYVANE-PAROLI-INPUT').value;
    const email = document.getElementById('REGISTRACIA-SHEIYVANE-MEILI-INPUT').value;

    document.getElementById('REGISTRACIA-SHEIYVANE-PAROLI').style.backgroundColor = 'rgba(0,0,0,0.15000000596046448)';
    document.querySelector('.REGISTRACIA-SHEIYVANE-PAROLI-ICON2').style.backgroundImage = 'url("http://wh14473.web3.maze-host.ru/FOTOEBI/SHEIYVANE-PAROLI-ICON.png")';
    document.getElementById('REGISTRACIA-SHEIYVANE-PAROLI-INPUT').placeholder = 'შეიყვონე პოროლი';	
    document.getElementById('REGISTRACIA-SHEIYVANE-MEILI-BG').style.backgroundColor = 'rgba(0,0,0,0.15000000596046448)';
    document.querySelector('.REGISTRACIA-SHEIYVANE-MEILI-ICON2').style.backgroundImage = 'url("http://wh14473.web3.maze-host.ru/FOTOEBI/SHEIYVANE-MEILI-ICON.png")';
    document.getElementById('REGISTRACIA-SHEIYVANE-MEILI-INPUT').placeholder = 'შეიყვონე მეილი';

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validateEmail(email)) {
        document.getElementById('REGISTRACIA-SHEIYVANE-MEILI-BG').style.backgroundColor = '#ce464626';
        document.querySelector('.REGISTRACIA-SHEIYVANE-MEILI-ICON2').style.backgroundImage = 'url("http://wh14473.web3.maze-host.ru/FOTOEBI/MEILI-ICON-WITELI.png")';
        document.getElementById('REGISTRACIA-SHEIYVANE-MEILI-INPUT').placeholder = 'მეილი ოროსწორიო';
        document.getElementById('REGISTRACIA-SHEIYVANE-MEILI-INPUT').value = ''; 
        return;
    }

    let pass_r = /^[A-Za-z0-9]{6,15}$/;
    if (pass_r.test(password) == false) {
        document.getElementById('REGISTRACIA-SHEIYVANE-PAROLI').style.backgroundColor = '#ce464626';
        document.querySelector('.REGISTRACIA-SHEIYVANE-PAROLI-ICON2').style.backgroundImage = 'url("http://wh14473.web3.maze-host.ru/FOTOEBI/PAROLI-ICON-WITELI.png")';
        document.getElementById('REGISTRACIA-SHEIYVANE-PAROLI-INPUT').placeholder = '6-15 სიმოლო ლოთინური ოსოებით';
        document.getElementById('REGISTRACIA-SHEIYVANE-PAROLI-INPUT').value = '';
        return;
    }


    
    if(gender == 0){
        document.getElementById('REGISTRACIA-MAMROBITI-GILAKI').style.backgroundColor = '#ce464626';
        document.getElementById('REGISTRACIA-MDEDROBITI-GILAKI').style.backgroundColor = '#ce464626';
        return;
    }

    let regattemp = user + ',' + password + ',' + email + ',' + gender;
    cef.emit('pwd:registration', regattemp);
}





// <!-- =================== [ ჰუდი ] =================== -->
cef.emit("game:hud:setComponentVisible", "interface", false);
cef.emit("game:data:pollPlayerStats", true, 50);
cef.on("game:data:playerStats", (hp, max_hp, arm, breath, wanted, weapon, ammo, max_ammo, speed) => {
    // document.getElementById('SICOCLXE-RAODENOBA').textContent = Math.round(hp);
    document.getElementById('BRONI-RAODENOBA').textContent = arm;
    document.getElementById("WANTED-LEVEL").textContent = wanted;

    if(wanted > 0) {
        document.getElementById("STATE-WANTED-LEVEL").style = "display: block";
        //update_wanted(wanted);
    }
    else {
        document.getElementById("STATE-WANTED-LEVEL").style = "display: none";
    }
});
 
cef.emit("Hud:setinfo")
cef.on('Hud:setinfo', (pcash, pbank, fishkebi, hungry, playerID, totalplayers, street) => {

    document.getElementById('XELZE-TANXA').textContent = pcash;
    document.getElementById('BARATZE-TANXA').textContent = pbank; 
    document.getElementById('FISHKEBI-RAODENOBA').textContent = fishkebi;
    document.getElementById('SACHMEL-SASMELI-RAODENOBA').textContent = hungry;

    document.getElementById('AIDIS-MACHVENEBELI-AIKONI-RAODENOBA').textContent = playerID;
    document.getElementById('MOTAMASHEEBIS-MACHVENEBELI-RAODENOBA').textContent = totalplayers;

    document.getElementById('streetName').textContent = street;

    hideSasjels();
});

setInterval(() => {
    cef.emit("Hud:Health");
}, 1000);

cef.emit("Hud:Health")
cef.on('Hud:Health', (hp) => {
    document.getElementById('SICOCLXE-RAODENOBA').textContent = hp;
});

function hideSasjels(){
    document.getElementById('MUTE-CEF').style.display = 'none';
    document.getElementById('TEST-DRIVE').style.display = 'none';
    document.getElementById('PRISON-GASVLA').style.display = 'none';
}

function formatTimeFromSeconds(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);

    // Ensure hours and minutes are two digits
    var formattedHours = ('0' + hours).slice(-2);
    var formattedMinutes = ('0' + minutes).slice(-2);

    if (hours === 0) {
        return `00:${formattedMinutes}`;
    } else {
        return `${formattedHours}:${formattedMinutes}`;
    }
}

cef.emit("Hud:setsasjeliinfo")
cef.on('Hud:setsasjeliinfo', (sasjeli, seconds) => {
    switch(sasjeli) {
        case 0:{ // MUTE
            document.getElementById('FISHKEB').textContent = seconds;
            var formattedTime = formatTimeFromSeconds(seconds);
            document.getElementById('MUTE-CEF').style.display = 'block';
            // document.getElementById('miutidro').textContent = formattedTime;
            if(seconds < 1){
                sesjeliinfohide(0);
            }
            break//document.getElementById('PRISON-GASVLA').style.display = 'none';
        }
        case 1:{ // Test Drive
            document.getElementById('TESTDRIVE').textContent = seconds;
            var formattedTime = formatTimeFromSeconds(seconds);
            document.getElementById('TEST-DRIVE').style.display = 'block';
            // document.getElementById('miutidro').textContent = formattedTime;
            if(seconds < 1){
                sesjeliinfohide(1);
            }
            break
        }
        case 2:{ // Unprison
            document.getElementById('PRISON-TIME').textContent = seconds;
            var formattedTime = formatTimeFromSeconds(seconds);
            document.getElementById('PRISON-GASVLA').style.display = 'block';
            // document.getElementById('miutidro').textContent = formattedTime;
            if(seconds < 1){
                sesjeliinfohide(2);
            }
            break
        }
    }

});

function sesjeliinfohide(sasjeli) {
    switch(sasjeli) {
        case 0:{ // MUTE
            document.getElementById('MUTE-CEF').style.display = 'none';
            break
        }
        case 1:{ // Test Drive
            document.getElementById('TEST-DRIVE').style.display = 'none';
            break
        }
        case 2:{ // Unprison
            document.getElementById('PRISON-GASVLA').style.display = 'none';
            break
        }
    }
}   
let isZPressed = false;
let isXPressed = false;

document.addEventListener("keydown", function(event) {
    if (event.key === "z" || event.key === "Z") {
        if (!isZPressed) {
            document.getElementById("hovermazafakaaa1").classList.toggle("MIKROFONI-KNOPKA");
            document.getElementById("hovermazafakaaa1").classList.toggle("MIKROFONI-KNOPKA2");
            document.getElementById("hovermazafakaaa1-1").classList.toggle("MIKROFONI-FOTO");
            document.getElementById("hovermazafakaaa1-1").classList.toggle("MIKROFONI-FOTO2");
            isZPressed = true;
        }
    }

    if (event.key === "x" || event.key === "X") {
        if (!isXPressed) {
            document.getElementById("hovermazafakaaa2").classList.toggle("RACIA-KNOPKA");
            document.getElementById("hovermazafakaaa2").classList.toggle("RACIA-KNOPKA2");
            document.getElementById("hovermazafakaaa2-1").classList.toggle("RACIA-FOTO");
            document.getElementById("hovermazafakaaa2-1").classList.toggle("RACIA-FOTO2");
            isXPressed = true;
        }
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "z" || event.key === "Z") {
        document.getElementById("hovermazafakaaa1").classList.toggle("MIKROFONI-KNOPKA");
        document.getElementById("hovermazafakaaa1").classList.toggle("MIKROFONI-KNOPKA2");
        document.getElementById("hovermazafakaaa1-1").classList.toggle("MIKROFONI-FOTO");
        document.getElementById("hovermazafakaaa1-1").classList.toggle("MIKROFONI-FOTO2");
        isZPressed = false;
    }

    if (event.key === "x" || event.key === "X") {
        document.getElementById("hovermazafakaaa2").classList.toggle("RACIA-KNOPKA");
        document.getElementById("hovermazafakaaa2").classList.toggle("RACIA-KNOPKA2");
        document.getElementById("hovermazafakaaa2-1").classList.toggle("RACIA-FOTO");
        document.getElementById("hovermazafakaaa2-1").classList.toggle("RACIA-FOTO2");
        isXPressed = false;
    }
});

let isKeyXPressed = false;

document.addEventListener('keydown', function(event) {
    if((event.key === 'x' || event.key === 'X') && !isKeyXPressed) {
        isKeyXPressed = true;
        var audio = document.getElementById('audioPlayer');
        audio.play();
    }
});

document.addEventListener('keyup', function(event) {
    if(event.key === 'x' || event.key === 'X') {
        isKeyXPressed = false;
    }
});
//





// <!-- =================== [ სკინის ორჩევო ] =================== -->
function ClickSelectSkinBTN(response) {
    console.log(response)
    let scssbattemp = response + ',' + 'a';
    cef.emit('SelectSkin:ClickBTN', scssbattemp);
}


// <!-- =================== [ ჩოიჭერი ] =================== -->
function ClickSelectSkinBTN(response) {
    console.log(response)
    let scssbattemp = response + ',' + 'a';
    cef.emit('SelectSkin:ClickBTN', scssbattemp);
}


// <!-- =================== [ ბილეთები ] =================== -->
function Sworia(response){
    hideCefPacket(response);
    sendCefPacket(response+1);
    // sendCefPacket(CEF)
}

function ChaabaraTeoria(response)
{
    hideCefPacket(response);
    sendCefPacket(CEF.TEORIA_N1);
}

function ChaabaraPraktika(response)
{
    hideCefPacket(response);
}

function Arasworia(response){
    hideCefPacket(response);
    sendCefPacket(CEF.CHAIWRA_N1);
}

function ClickChaiwra(response){
    hideCefPacket(response);
}

function ChawraButton(response){
    hideCefPacket(response);
    cef.set_focus(false);
}

function TeoriaAgeba(response) {
    console.log(response)
    let attemp = "toyota";
    cef.emit('Teoria:Chabareba', attemp);
    cef.set_focus(false);
}





// <!-- =================== [ სპიდომეტრი ] =================== -->
cef.emit("game:hud:setComponentVisible", "interface", false);
cef.emit("game:hud:setComponentVisible", "radar", true);

cef.emit("game:data:pollPlayerStats", true, 50);

cef.on("data:hud:stats", (hud) => {
    HudVisible(hud);
})
cef.on("game:data:playerStats", (hp, max_hp, arm, breath, wanted, weapon, ammo, max_ammo, money, speed) => { 
    //ñêîðîñòü 
    SetSpeed(7, parseInt(speed,10));
} );

cef.on("data:vehicle", (door, far, engine, left, right, park, fuels) => {
    SetSpeed(1, engine);
    SetSpeed(2, door);
    SetSpeed(3, far);
    SetSpeed(4, right);
    SetSpeed(5, left);
    SetSpeed(6, park);
    document.getElementById('benz').value = fuels;
});
function SetSpeed(id, params)
{
    switch(id)
    {
        case 1:
            {
                //äâèæîê 
                if(params == 1)
                {
                    document.getElementById('engine').src = "./img/engineon.png";
                }
                else
                {
                    document.getElementById('engine').src = "./img/engine.png";
                }
                break;
            }
        case 2:
            {
                //êëþ÷è
                if(params == 1)
                {
                    document.getElementById('keys').src = "./img/keys.png";
                }
                else
                {
                    document.getElementById('keys').src = "./img/keysoff.png";
                }
                break;
            }
        case 3:
            {
                //ôàðû
                if(params == 1)
                {
                    document.getElementById('far').src = "./img/faro.png";
                }
                else
                {
                    document.getElementById('far').src = "./img/far.png";
                }
                break;
            }
            case 4:
                {
                    //ïîâîðîòíèêè 1
                    if(params == 1)
                    {
                        document.getElementById('right').src = "./img/righton.png";
                    }
                    else
                    {
                        document.getElementById('right').src = "./img/right.png";
                    }
                    break;
                }
                case 5:
                    {
                        //ïîâîðîòíèêè 2
                        if(params == 1)
                        {
                            document.getElementById('left').src = "./img/lefton.png";
                        }
                        else
                        {
                            document.getElementById('left').src = "./img/left.png";
                        }
                        break;
                    }
                    case 6:
                        {
                            //ïàðêîâêà
                            if(params == 1)
                            {
                                document.getElementById('park').src = "./img/park.png";
                            }
                            else
                            {
                                document.getElementById('park').src = "./img/parkoff.png";
                            }
                            break;
                        }
                    case 7:
                        {
                            //ñêîðîñòü 
                            document.getElementById('speed').textContent = params;
                            if (params == 0) {
                                document.getElementById('SICHQAREEBI').textContent = '0';
                            }
                            if (params > 40) {
                                document.getElementById('SICHQAREEBI').textContent = '1';
                            }
                            if (params > 80) {
                                document.getElementById('SICHQAREEBI').textContent = '2';
                            }
                            if (params > 120) {
                                document.getElementById('SICHQAREEBI').textContent = '3';
                            }
                            if (params > 140) {
                                document.getElementById('SICHQAREEBI').textContent = '4';
                            }
                            if (params > 180) {
                                document.getElementById('SICHQAREEBI').textContent = '5';
                            }
                            if (params > 240) {
                                document.getElementById('SICHQAREEBI').textContent = '6';
                            }
                            if (params > 300) {
                                document.getElementById('SICHQAREEBI').textContent = '7';
                            }
                            break;
                        }
    }
}
function HudVisible(visible)
{
    let v = visible; //äåëàþ âîò òàêîå òóò
    if(v == 1)
    {
        //HUD 1
        document.getElementById('hud-1').style.display = "block";
    }
    
    if(v == 2)
    {
        //HUD 2
    }
    if(v == 3)
    {
        //ïîäñêàçêè 
        document.getElementById('help').style.display = "block";
    }
    if(v == 4)
    {
        document.getElementById('FAREBI').style.display = "none";
        document.getElementById('FAREBI-CHARTULI').style.display = "block";
    }
    if(v == 5)
    {
        document.getElementById('speeds').style.display = "block";
    }
    if(v == 6)
    {
        document.getElementById('FAREBI').style.display = "block";
        document.getElementById('FAREBI-CHARTULI').style.display = "none";
    }
    if(v == 7)
    {
        document.getElementById('speeds').style.display = "block";
    }
    if(v == 8)
    {
        document.getElementById('ZRAVA').style.display = "block";
        document.getElementById('ZRAVA-CHARTULI').style.display = "none";
    }   
    if(v == 9)
    {
        document.getElementById('ZRAVA').style.display = "none";
        document.getElementById('ZRAVA-CHARTULI').style.display = "block";
    }
    if(v == 10)
    {
        document.getElementById('GVEDI-MOXSNILI').style.display = "block";
        document.getElementById('GVEDI').style.display = "none";
    }   
    if(v == 11)
    {
        document.getElementById('GVEDI-MOXSNILI').style.display = "none";
        document.getElementById('GVEDI').style.display = "block";
    }  
    if(v == -1)
    {
        document.getElementById('speeds').style.display = "none";
    }
    if(v == 0)
    {
        //hidden 
        document.getElementById('hud-1').style.display = "none";
        document.getElementById('speed').style.display = "none";
        document.getElementById('help').style.display = "none";
        document.getElementById('gps').style.display = "none";
    }
}
cef.emit("Speed:info")
cef.on('Speed:info', (kilometrebi, benzini) => {
    setgarben(kilometrebi)
    updateBenziniHeight(benzini);
});
function setgarben(response) {
    document.getElementById('KILOMETREBI').textContent = response;
}
function updateBenziniHeight(benzini) {
    // Ensure that benzini does not exceed its maximum value
    var actualBenzini = Math.min(benzini, 80);
    
    // Calculate the height for the div
    var height = actualBenzini; // as the maximum is 80 and it's directly proportional

    // Set the height of the BENZINI div
    var benziniDiv = document.getElementById('BENZINI');
    benziniDiv.style.height = height + 'px';
    if (benzini < 10) {
        benziniDiv.style.backgroundColor = 'red';
    } else {
        benziniDiv.style.backgroundColor = 'white'; // Assuming you want to revert to the original or default color
    }
}

setInterval(function() {
    cef.emit("Speed:info");
}, 1000);





// <!-- =================== [ ქუესთები ] =================== -->
cef.on("Quests:setinfo", (quest, progress) => {
    switch(quest) {
        case 0:{ // #1
            if(progress == 0){
                document.getElementById("progress-status-N1").textContent = 'პროცესშიო';
                document.getElementById("progress-status-N1").style.color = 'white';
            }
            else if(progress == 1){
                document.getElementById("progress-status-N1").textContent = 'შესრულებულიო';
                document.getElementById("progress-status-N1").style.color = 'white';
            }
        }
        case 1:{ // #2
            if(progress == 0){
                document.getElementById("progress-status-N2").textContent = 'პროცესშიო';
                document.getElementById("progress-status-N2").style.color = 'white';
            }
            else if(progress == 1){
                document.getElementById("progress-status-N2").textContent = 'პროცესშიო';
                document.getElementById("progress-status-N2").style.color = 'white';
            }
        }
        case 2:{ // #3
            if(progress == 0){
                document.getElementById("progress-status-N3").textContent = 'პროცესშიო';
                document.getElementById("progress-status-N3").style.color = 'white';
            }
            else if(progress == 1){
                document.getElementById("progress-status-N3").textContent = 'პროცესშიო';
                document.getElementById("progress-status-N3").style.color = 'white';
            }
        }
        case 3:{ // #4
            if(progress == 0){
                document.getElementById("progress-status-N4").textContent = 'პროცესშიო';
                document.getElementById("progress-status-N4").style.color = 'white';
            }
            else if(progress == 1){
                document.getElementById("progress-status-N4").textContent = 'პროცესშიო';
                document.getElementById("progress-status-N4").style.color = 'white';
            }
        }
        case 4:{ // #5
            if(progress == 0){
                document.getElementById("progress-status-N5").textContent = 'პროცესშიო';
                document.getElementById("progress-status-N5").style.color = 'white';
            }
            else if(progress == 1){
                document.getElementById("progress-status-N5").textContent = 'პროცესშიო';
                document.getElementById("progress-status-N5").style.color = 'white';
            }
        }
    }
});





// <!-- ==================== [ სოჩივორი პოლიციოში ] ================ -->
function GagzavnaSapatrulo() {
    const inptxt = document.getElementById('SAPATRULO-SHEIYVANE-GANCXADEBA-INPUT').value;
    document.getElementById('SAPATRULO-SHEIYVANE-GANCXADEBA').style.background ='rgba(0,0,0,0.15000000596046448)';
    document.getElementById('SAPATRULO-SHEIYVANE-GANCXADEBA-INPUT').placeholder = 'შეიყვონე გონცხოდებო';
    document.getElementById('SAPATRULO-SHEIYVANE-GANCXADEBA-INPUT').value = '';
    if(inptxt.length < 4)
    {
        document.getElementById('SAPATRULO-SHEIYVANE-GANCXADEBA').style.background ='#ce464626';
        document.getElementById('SAPATRULO-SHEIYVANE-GANCXADEBA-INPUT').placeholder = 'მინიმუმ 3 სიმბოლო';
        document.getElementById('SAPATRULO-SHEIYVANE-GANCXADEBA-INPUT').value = '';
        return
    }
    cef.emit('PDNPC:sachivari', inptxt);
}
//






// <!-- ==================== [ ოვტობოზრობო ] ================ -->
cef.on("Avtobazroba:setinfo", (vehiclename, price, cxeniszala, torqi, stages, dzarvismdgomareoba) =>{
    document.getElementById('Vehicle-Name').textContent = vehiclename;
    document.getElementById('Vehicle-Price').textContent = price;
    document.getElementById('Vehicle-CxenisDzala').textContent = cxeniszala;
    document.getElementById('Vehicle-Torqi').textContent = torqi;
    document.getElementById('Vehicle-Stage').textContent = stages;
    document.getElementById('Vehicle-DzarvaStatus').textContent = dzarvismdgomareoba;
});

function ManqanisYidva(){
    let attemp = 0 + "," + "a";
    cef.emit("Avtobazroba:clickedButton", attemp);
}

function TestDriveCar(){
    let attemp = 1 + "," + "a";
    cef.emit("Avtobazroba:clickedButton", attemp);
}
// 

// <!-- ==================== [ ონიმოციები ] ================ -->
function ClickedAnimation(animnum){
    let attemp = animnum + "," + "a";
    cef.emit("Animations:clickedanim", attemp)
}

// <!-- ==================== [ ბონკომოტი ] ================= -->
function TANXISGANAGDEBA() {
    hideCefPacket(CEF.ATMMAIN);
    sendCefPacket(CEF.ATMGANAGDEBA);
    cef.emit('ATM:setinfo', 1);
}

function MOBILURZEGADARICXVCA() {
    hideCefPacket(CEF.ATMMAIN);
    sendCefPacket(CEF.ATMMOBILE);
    cef.emit('ATM:setinfo', 2);
}

function SAJARIMOSGADAXDA() {  
    hideCefPacket(CEF.ATMMAIN);
    sendCefPacket(CEF.ATMSAJARIMO);
    cef.emit('ATM:setinfo', 3);
}


cef.on('ATM:setinfoMain', (nickname, bitcoins, level, exp, bankmoney, phonemoney, tickets) => {
    const nicknameParts = nickname.split('_');
    document.getElementById("Bankomat-Nickname1").textContent = nicknameParts[0];
    document.getElementById("Bankomat-Nickname2").textContent = nicknameParts[1];
    document.getElementById('Bankomat-playerBitcoins').textContent = bitcoins;
    document.getElementById('Bankomat-exp').textContent = exp;
    document.getElementById('Bankomat-level').textContent = level;
    document.getElementById('Bankomat-bankMoney').textContent = bankmoney;
    document.getElementById('Bankomat-phoneMoney').textContent = phonemoney;
    document.getElementById('Bankomat-ticket').textContent = tickets;
});

// თონხის მოხსნის გვერდი

cef.on('ATM:setinfoBank', (nickname, bitcoins, level, exp, bankmoney) => {
    const nicknameParts = nickname.split('_');
    document.getElementById("BANKOMATI-GANAGDEBA-SAXELI").textContent = nicknameParts[0];
    document.getElementById("BANKOMATI-GANAGDEBA-GVARI").textContent = nicknameParts[1];
    document.getElementById('BankomatMoxsna-playerBitcoins').textContent = bitcoins;
    document.getElementById('BankomatMoxsna-exp').textContent = exp;
    document.getElementById('BankomatMoxsna-level').textContent = level;
    document.getElementById('BankomatMoxsna-bankMoney').textContent = bankmoney;
});

function compliteTanxisMoxsna(){

    let bankmoney = document.getElementById('BankomatMoxsna-bankMoney').textContent;
    let inputmoney = document.getElementById('BANKOMATI-GANAGDEBA-CHAWERE-TANXA-INPUT').value;

    if(!inputmoney) {
        document.getElementById('BANKOMATI-GANAGDEBA-CHAWERE-TANXA-BG').style.background = 'rgba(255,255,255,0.02500000037252903)'
        document.getElementById('BANKOMATI-GANAGDEBA-CHAWERE-TANXA-INPUT').placeholder = 'მიუთეთ თონხო';
        document.getElementById('BANKOMATI-GANAGDEBA-CHAWERE-TANXA-INPUT').value = '';
        return
    }
    if(inputmoney > bankmoney) {
        document.getElementById('BANKOMATI-GANAGDEBA-CHAWERE-TANXA-BG').style.background = '#ce464626';
        document.getElementById('BANKOMATI-GANAGDEBA-CHAWERE-TANXA-INPUT').placeholder = 'ორ გოქვთ სოკმორისი თონხო';
        document.getElementById('BANKOMATI-GANAGDEBA-CHAWERE-TANXA-INPUT').value = '';
        return
    }

    let transattemp = 0 + ',' + inputmoney + ',' + 0;
    cef.emit('ATM:transaction', transattemp)
}

// ჯორიმის გოდოხდის გვერდი
var ATMsajarimo_choosedslot

function ticketinfo (nickname, bitcoins, level, exp, tickets, cashmoney, slot1money, slot2money) {
    const nicknameParts = nickname.split('_'); 
    document.getElementById("BANKOMATI-SAJARIMO-SAXELI").textContent = nicknameParts[0];
    document.getElementById("BANKOMATI-SAJARIMO-GVARI").textContent = nicknameParts[1];
    document.getElementById('BankomatSajarimo-playerBitcoins').textContent = bitcoins;
    document.getElementById('BankomatSajarimo-exp').textContent = exp;
    document.getElementById('BankomatSajarimo-level').textContent = level;
    document.getElementById('BankomatSajarimo-ticket').textContent = tickets;
    document.getElementById('BankomatiSajarimo-SLOT1-Money').textContent = slot1money;
    document.getElementById('BankomatiSajarimo-SLOT2-Money').textContent = slot2money;
    playerCash = cashmoney;
    ATMsajarimo_choosedslot = 0;
}

cef.on('ATM:setinfoTickets', (nickname, bitcoins, level, exp, tickets, cashmoney, slot1money, slot2money) => {
    const nicknameParts = nickname.split('_'); 
    document.getElementById("BANKOMATI-SAJARIMO-GVARI").textContent = nicknameParts[0];
    document.getElementById("BANKOMATI-SAJARIMO-SAXELI").textContent = nicknameParts[1];
    document.getElementById('BankomatSajarimo-playerBitcoins').textContent = bitcoins;
    document.getElementById('BankomatSajarimo-exp').textContent = exp;
    document.getElementById('BankomatSajarimo-level').textContent = level;
    document.getElementById('BankomatSajarimo-ticket').textContent = tickets;
    document.getElementById('BankomatiSajarimo-SLOT1-Money').textContent = slot1money;
    document.getElementById('BankomatiSajarimo-SLOT2-Money').textContent = slot2money;
    playerCash = cashmoney;
    ATMsajarimo_choosedslot = 0;
});

function compliteJarimisGadaxda(){
    let inputmoney = document.getElementById('JARIMEBI-TRANSPORTZE-CHAWERE-TANXA-INPUT').value;
    let jarimatotal = -1
    if(ATMsajarimo_choosedslot == 1) jarimatotal = document.getElementById('BankomatiSajarimo-SLOT1-Money').textContent;
    else if(ATMsajarimo_choosedslot == 2) jarimatotal = document.getElementById('BankomatiSajarimo-SLOT2-Money').textContent;
    else jarimatotal = -1;

    if(jarimatotal == -1) {
        document.getElementById('JARIMEBI-TRANSPORTZE-SLOTI-1').style.background = '#ce464626'
        document.getElementById('JARIMEBI-TRANSPORTZE-SLOTI-2').style.background = '#ce464626'
        document.getElementById('JARIMEBI-TRANSPORTZE-CHAWERE-TANXA-BG').style.background = '#ce464626'
        document.getElementById('JARIMEBI-TRANSPORTZE-CHAWERE-TANXA-INPUT').placeholder = 'ოირჩიეთ სლოტი';
        document.getElementById('JARIMEBI-TRANSPORTZE-CHAWERE-TANXA-INPUT').value = '';
        return
    }

    if(!inputmoney) {
        document.getElementById('JARIMEBI-TRANSPORTZE-CHAWERE-TANXA-BG').style.background = 'rgba(255,255,255,0.02500000037252903)'
        document.getElementById('JARIMEBI-TRANSPORTZE-CHAWERE-TANXA-INPUT').placeholder = 'მიუთეთ თონხო';
        document.getElementById('JARIMEBI-TRANSPORTZE-CHAWERE-TANXA-INPUT').value = '';
        return
    }
    if(inputmoney > playerCash) {
        document.getElementById('JARIMEBI-TRANSPORTZE-CHAWERE-TANXA-BG').style.background = '#ce464626';
        document.getElementById('JARIMEBI-TRANSPORTZE-CHAWERE-TANXA-INPUT').placeholder = 'ორ გოქვთ სოკმორისი თონხო';
        document.getElementById('JARIMEBI-TRANSPORTZE-CHAWERE-TANXA-INPUT').value = '';
        return
    }

    if(inputmoney > jarimatotal)
    {
        document.getElementById('JARIMEBI-TRANSPORTZE-CHAWERE-TANXA-BG').style.background = '#ce464626';
        document.getElementById('JARIMEBI-TRANSPORTZE-CHAWERE-TANXA-INPUT').placeholder = 'თონხო ოროსწორიო';
        document.getElementById('JARIMEBI-TRANSPORTZE-CHAWERE-TANXA-INPUT').value = '';
        return       
    }

    let transattemp = 2 + ',' + inputmoney + ',' + ATMsajarimo_choosedslot;
    cef.emit('ATM:transaction', transattemp)
}

function ATMSajarimoSlotsClick(code){
    ATMsajarimo_choosedslot = code;
    switch(code){
        case 1:
            document.getElementById('JARIMEBI-TRANSPORTZE-SLOTI-2').style.background = 'rgba(255,255,255,0.02500000037252903)'
            document.getElementById('JARIMEBI-TRANSPORTZE-SLOTI-1').style.background = 'rgba(62,139,255,1)'
            console.log(ATMsajarimo_choosedslot)
            break;
        case 2:
            document.getElementById('JARIMEBI-TRANSPORTZE-SLOTI-1').style.background = 'rgba(255,255,255,0.02500000037252903)'
            document.getElementById('JARIMEBI-TRANSPORTZE-SLOTI-2').style.background = 'rgba(62,139,255,1)'
            console.log(ATMsajarimo_choosedslot)
            break;
    }
}


// ტელეფონის ონგორიშის შევსებო

cef.on('ATM:setinfoPhone', (nickname, bitcoins, level, exp, phonemoney, cashmoney) => {
    const nicknameParts = nickname.split('_'); 
    document.getElementById("BANKOMATI-TELEFONI-GVARI").textContent = nicknameParts[0];
    document.getElementById("BANKOMATI-TELEFONI-SAXELI").textContent = nicknameParts[1];
    document.getElementById('BankomatTelefoni-playerBitcoins').textContent = bitcoins;
    document.getElementById('BankomatTelefoni-exp').textContent = exp;
    document.getElementById('BankomatTelefoni-level').textContent = level;
    document.getElementById('BankomatTelefoni-phoneMoney').textContent = phonemoney;
    playerCash = cashmoney;
});

function setATMTelefoni(nickname, bitcoins, level, exp, phonemoney, cashmoney){
    const nicknameParts = nickname.split('_'); 
    document.getElementById("BANKOMATI-TELEFONI-GVARI").textContent = nicknameParts[0];
    document.getElementById("BANKOMATI-TELEFONI-SAXELI").textContent = nicknameParts[1];
    document.getElementById('BankomatTelefoni-playerBitcoins').textContent = bitcoins;
    document.getElementById('BankomatTelefoni-exp').textContent = exp;
    document.getElementById('BankomatTelefoni-level').textContent = level;
    document.getElementById('BankomatTelefoni-phoneMoney').textContent = phonemoney;
    playerCash = cashmoney;
    console.log(playerCash);
}

function compliteTelefonisShevseba(){
    let inputmoney = document.getElementById('BANKOMATI-TELEFONI-CHAWERE-TANXA-INPUT').value;

    if(inputmoney > playerCash){
        document.getElementById('BANKOMATI-TELEFONI-CHAWERE-TANXA-BG').style.background = '#ce464626';
        document.getElementById('BANKOMATI-TELEFONI-CHAWERE-TANXA-INPUT').placeholder = 'ორ გოქვთ სოკმორისი თონხო';
        document.getElementById('BANKOMATI-TELEFONI-CHAWERE-TANXA-INPUT').value = '';
        return;
    }
    let transattemp = 1 + ',' + inputmoney + ',' + 0;
    cef.emit('ATM:transaction', transattemp)
}



new produqti;

function ShopChooseProduct (response)
{
    produqti = response;
    hideCefPacket(CEF.MAGAZIA);
    sendCefPacket(CEF.SHEZENA);
}

function ShopBuyProduct(responsecode){
    let attemp = responsecode + ',' + produqti;
    cef.emit("MarketShop:clickedButton", attemp);
}



function pwdSend(response){
    const report = document.getElementById('ALOGIN-SHEIYVANE-ADMINPAROLI-INPUT').value;
    let attemp = report;
    cef.set_focus(false);
    cef.emit('pwd:send', attemp);
    hideCefPacket(response);
}

cef.emit("Mainmenu:plevel")
cef.on('Mainmenu:plevel', (nickname, level) => {
    document.getElementById('motamashis-saxeli').textContent = nickname;
    document.getElementById('admin-level').textContent = level;
});  

// setInterval(() => {
//     cef.emit("Admin:setinfo");
// }, 1000);


function ClickCarMenuButton(code){
    let attemp = code + ',' + 'd';
    cef.emit('CarMenu:clickedButton', attemp);
}