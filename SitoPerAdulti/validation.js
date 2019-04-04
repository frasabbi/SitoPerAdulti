function myFunc()
{
    
    let n = document.forms["Ourform"]["Nome"].value;
    let c = document.forms["Ourform"]["Cognome"].value;
    let e = document.forms["Ourform"]["Email"].value;
    let t = document.forms["Ourform"]["Tel"].value;
    let d = document.forms["Ourform"]["Data"].value;
	let i = document.forms["Ourform"]["interessi"].value;
    
    let datey = new Date(d);
    datey.setFullYear(datey.getFullYear()+18);
	let currentDate =  new Date();
    
    

    if(n=="" || !isNaN(n) || (n.length<3||n.length>30))
    {
        document.getElementById("Non").innerHTML="*Nome non valido";
        document.getElementById("Nome").className="danger";
    }
    else
    {
        document.getElementById("Non").innerHTML=" ";
        document.getElementById("Nome").className="true";
    }

    if(c=="" || !isNaN(c) || (c.length<3||c.length>30))
    {
        document.getElementById("Nal").innerHTML="*Cognome non valido";
        document.getElementById("Cognome").className="danger";

    }
    else
    {
        document.getElementById("Nal").innerHTML=" ";
        document.getElementById("Cognome").className="true";

    }

    if(e=="" || !validateEmail(e) || (e.length<3))
    {
     
        document.getElementById("Nae").innerHTML="*Mail non valida";
        document.getElementById("Email").className="danger";

    }

    else
    {
        document.getElementById("Nae").innerHTML=" ";
        document.getElementById("Email").className="true";


    }
 
    if(t=="" || !isPhoneFormat(t))
    {
       document.getElementById("Nat").innerHTML="*Inserire numero di telefono valido";
       document.getElementById("Tel").className="danger";

    }
    else
    {
        document.getElementById("Nat").innerHTML=" ";
        document.getElementById("Tel").className="true";

    }
	
    if(datey>=currentDate || d=="")
    {
        document.getElementById("Nad").innerHTML="*Inserire data valida, devi essere maggiorenne";
        document.getElementById("Data").className="danger";
    }
    else
    {
        document.getElementById("Nad").innerHTML="";
        document.getElementById("Data").className="true";

    }
	
	if(i==="nessuno")
    {
        document.getElementById("Naselect").innerHTML="*Selezionare un interesse";
        document.getElementById("interessi").className="danger";
    }
    else
    {
        document.getElementById("Naselect").innerHTML="";
        document.getElementById("interessi").className="true";

    }
	

}
document.addEventListener("change",myFunc);
function isPhoneFormat(phone)
{
    return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}