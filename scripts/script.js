/* =============== [ CEF LIST ] ============= */
const CEF = {
    LOGIN: 0,
    REG: 1,
    CHOOSESKIN: 2,
    ALOGIN: 3,
    CAR_PANEL: 4,
    ANIMATIONS: 5,
    AVTOBAZROBA: 6,
    MAP: 7,
    NOTIFICATION: 8,
    SAXLI: 9,
    BARIGA: 10,
    NPCD: 11,
    DNPC: 12,
    PDNPC: 13,
    SAPATRULO: 14,
    MERIANPC: 15,
    DIALOG: 16,
    MAINMENU: 17,
    HUD: 18,
    SANOMRE: 19,
    DONATE: 20,
    STANDART: 21,
    MEORE: 22,
    MESAME: 23
};


function setbg(color){
    document.body.style.backgroundColor = color;
}

// setbg("red")


/* ==================== [ მოქმედებები ინტერფეისებზე ] ================= */
function hideAllCefPackets(){
    document.getElementById("Authorization-Section").style.display = "none";
    document.getElementById("Registration-Section").style.display = "none";  
    document.getElementById('AVTOBAZROBA-Section').style.display = "none";

    document.getElementById("SKINIS-ARCHEVA").style.display = "none";

    document.getElementById('ANIMACIEBI-Section').style.display = "none";


    document.getElementById('alogini').style.display = "none";
    document.getElementById('AVTOBAZROBA-Section').style.display = "none";
    document.getElementById('MANQANA-PANEL').style.display = "none";
    document.getElementById("ANIMACIEBI-Section").style.display = "none";
    document.getElementById("MAP-CONTAINER").style.display = "none";
    document.getElementById("NOTIFICATION-CONTAINER").style.display = "none";
    document.getElementById("SAXLI-CONTAINER").style.display = "none";
    document.getElementById("BARIGA-NPC").style.display = "none";
    document.getElementById("DEFAULT-NPC").style.display = "none";
    document.getElementById("NPC-DEFAULT2").style.display = "none";
    document.getElementById("NPC-POLICE").style.display = "none";
    document.getElementById("NPC-SAPATRULO").style.display = "none";
    document.getElementById("MERIA-NPC").style.display = "none";
    document.getElementById("DIALOG-CONTAINER").style.display = "none";
    document.getElementById('hud-container').style.display = "none";
    document.getElementById('choose-sanomre-container').style.display = "none";
    document.getElementById('DONATE-SANOMRE-CONTAINER').style.display = "none";
    document.getElementById('standart-etapi-erti').style.display = "none";
    document.getElementById('etapi-ori-container').style.display = "none";
    document.getElementById('mesame-etapi-container').style.display = "none";
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

        case CEF.CHOOSESKIN:
            document.getElementById("SKINIS-ARCHEVA").style.display = "block";
            break;

        case CEF.ANIMATIONS:
            document.getElementById("ANIMACIEBI-Section").style.display = "block";
            break;

        case CEF.AVTOBAZROBA:
            document.getElementById("AVTOBAZROBA-Section").style.display = "block";
            break;

        case CEF.ALOGIN:
            document.getElementById('alogini').style.display = "block";
            break;

        case CEF.CAR_PANEL:
            document.getElementById('MANQANA-PANEL').style.display = "block";
            break;

        case CEF.MAP:
            document.getElementById('MAP-CONTAINER').style.display = "block";
            break;

        case CEF.NOTIFICATION:
            document.getElementById("NOTIFICATION-CONTAINER").style.display = "block";
            break;

        case CEF.SAXLI:
            document.getElementById('SAXLI-CONTAINER').style.display = "block";
            break;

        case CEF.BARIGA:
            document.getElementById('BARIGA-NPC').style.display = "block";
            break

        case CEF.NPCD:
            document.getElementById("DEFAULT-NPC").style.display = "block";
            break

        case CEF.DNPC:
            document.getElementById("NPC-DEFAULT2").style.display = "block";
            break

        case CEF.PDNPC:
            document.getElementById("NPC-POLICE").style.display = "block";
            break

        case CEF.SAPATRULO:
            document.getElementById("NPC-SAPATRULO").style.display = "block";
            break

        case CEF.MERIANPC:
            document.getElementById("MERIA-NPC").style.display = "block";
            break

        case CEF.DIALOG:
            document.getElementById("DIALOG-CONTAINER").style.display = "block";
            break
            
        case CEF.MAINMENU:
            document.getElementById('MainMenu-Section').style.display = "block";
            break

        case CEF.HUD:
            document.getElementById('hud-container').style.display = "block";
            break
            
        case CEF.SANOMRE:
            document.getElementById('choose-sanomre-container').style.display = "block";
            break   
            
        case CEF.DONATE:
            document.getElementById('DONATE-SANOMRE-CONTAINER').style.display = "block";
            break 
            
        case CEF.STANDART:
            document.getElementById('standart-etapi-erti').style.display = "block";
            break 

        case CEF.MEORE:
            document.getElementById('etapi-ori-container').style.display = "block";
            break 

        case CEF.MESAME:
            document.getElementById('mesame-etapi-container').style.display = "block";
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

        case CEF.CHOOSESKIN:
            document.getElementById("SKINIS-ARCHEVA").style.display = "none";
            break;

        case CEF.ANIMATIONS:
            document.getElementById("ANIMACIEBI-Section").style.display = "none";
            break;

        case CEF.AVTOBAZROBA:
            document.getElementById("AVTOBAZROBA-Section").style.display = "none";
            break;

        case CEF.ALOGIN:
            document.getElementById('alogini').style.display = "none";
            break;

        case CEF.CAR_PANEL:
            document.getElementById('MANQANA-PANEL').style.display = "none";
            break;

        case CEF.MAP:
            document.getElementById('MAP-CONTAINER').style.display = "none";
            break;

        case CEF.NOTIFICATION:
            document.getElementById("NOTIFICATION-CONTAINER").style.display = "none";
            break;

        case CEF.SAXLI:
            document.getElementById('SAXLI-CONTAINER').style.display = "none";
            break

        case CEF.BARIGA:
            document.getElementById('BARIGA-NPC').style.display = "none";
            break

        case CEF.NPCD:
            document.getElementById("DEFAULT-NPC").style.display = "none";
            break

        case CEF.DNPC:
            document.getElementById("NPC-DEFAULT2").style.display = "none";
            break

        case CEF.PDNPC:
            document.getElementById("NPC-POLICE").style.display = "none";
            break

        case CEF.SAPATRULO:
            document.getElementById("NPC-SAPATRULO").style.display = "none";
            break

        case CEF.MERIANPC:
            document.getElementById("MERIA-NPC").style.display = "none";
            break

        case CEF.DIALOG:
            document.getElementById("DIALOG-CONTAINER").style.display = "none";
            break

        case CEF.MAINMENU:
            document.getElementById('MainMenu-Section').style.display = "none";
            break

        case CEF.HUD:
            document.getElementById('hud-container').style.display = "none";
            break    

        case CEF.SANOMRE:
            document.getElementById('choose-sanomre-container').style.display = "none";
            break 
            
        case CEF.DONATE:
            document.getElementById('DONATE-SANOMRE-CONTAINER').style.display = "none";
            break 

        case CEF.STANDART:
            document.getElementById('standart-etapi-erti').style.display = "none";
            break 

        case CEF.MEORE:
            document.getElementById('etapi-ori-container').style.display = "none";
            break 

        case CEF.MESAME:
            document.getElementById('mesame-etapi-container').style.display = "none";
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