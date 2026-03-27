const translations ={
    fr:{
        tittle: "CV JOB ETUDIANT",
        desc: "EXPERIENCES PROFESSIONNELLES",
        btn:"Vendeur / Employé polyvalent – Alimentation générale (Togo) ",
        msg:"Aide aux taches ménagères et babysitting",
        pt:"LANGUES PARLEES",
        fr:"Français:courant ",
        pr:"Profil",
        ang:"Anglais:A2",
        crd:"COORDONNEES",
        cls:"6e SECONDAIRE",
        qurt:" Rue de dave 462",
        ct:"CENTRE D'INTERET",
        sf:"Sport : Football",
        mc:"Musique et culture",
        cp:"COMPETENCES",
        tsp:"Accueil, Conseil et orientation des clients,Vente et promotion des produits,Gestion de la caisse et des paiement",
        ps:"PHOTO SIMPLE",
        jobtitle:"Etudiant",
        mts:"Doté d’un bon sens de l’organisation et d’un esprit d’équipe, je suis prêt à m’investir pleinement dans les missions qui me seront confiées. Désireux d’apprendre et de développer mes compétences, je fais preuve de rigueur et de détermination dans mon travail.",
        exp1:"Aide Ponctuelle",
        loc:"Togo(Lomé)",
        exp:"Bénévolat",
        ec:"Organisation et rangement du magasin",
        sd:"Participation à l'organisation'événements sportifs (football)",
        dpb:"Diplomé en probatoire (option général)",
        es:"Actuellement: 6e Secondaire",
        dsp:"DISPONIBILITéS",
        dyp:"Pour voir mes disponibilités,veuillez cliquez sur le button (DSP)",
        ne:"Née le 02 Avril 2008",
        sta:"Stage de une semaine à ArkDevel(Informatique)Mars-2026",
       




    },
    en:{
        tittle: "STUDENT JOB CV",
        desc: "PROFESSIONNAL EXPERIENCES",
        btn:"Seller / Multi-purpose employee – General food supply (Togo)",
        msg:"Help with housework and babysitting",
        pt:"SPOKEN LANGUAGES",
        fr:"French:fluent",
        pr:"profile",
        ang:"English (beginner)",
        crd:"CONTACT DETAILS",
        cls:"SECONDARY 6",
        qurt:"street of dave 462",
        ct:"CENTER OF INTEREST",
        sf:"Sport: Soccer",
        mc:"Music and culture",
        cp:"SKILLS",
        tsp:"Reception, Customer advice and guidance, Product sales and promotion, Cash and payment management",
        ps:"SIMPLE PHOTO",
        jobtitle:"Student",
        mts:"With good organizational skills and team spirit, I am ready to fully invest in the missions entrusted to me. Eager to learn and develop my skills, I demonstrate rigor and determination in my work.",
        exp1:"Occasional Help",
        loc:"Togo(Lomé)",
        exp:"Volunteering",
        ec:"Store organization and storage",
        sd:"Participation in the organization of sporting events (football)",
        dpb:"Graduated on probation (general option)",
        es:"Currently: Secondary 6",
        dsp:"AVAILABILITY",
        dyp:"To see my availability, please click on the button (DSP)",
        ne:"Born April 2, 2008",
        sta:"One-week internship at ArkDevel (Computer Science) March-2026",
    



        
    },
    
}




//fonction = truc qui est en bas (dessous)
function applyTheme(theme) {
    document.documentElement.classList.toggle("theme-light", theme === "light")
    const iconTheme = document.querySelector("#icon-theme")
    iconTheme.setAttribute("data-lucide",theme === "light" ? "moon" : "sun" ) 
    lucide.createIcons(); 
}
 function applyLang(lang) {
    document.documentElement.lang = lang
    const dict =translations[lang]
    document.querySelectorAll("[data-i18n]").forEach((el)=>{
        const key=el.getAttribute("data-i18n")
        const value= dict?.[key]
        if(value) el.textContent= value
    })
    const btnlang= document.querySelector("#btn-lang")
    btnlang.textContent= lang ==="fr"? "en": "fr"
    }
 






(function init(){
    lucide.createIcons();       

    const savedTheme = localStorage.getItem("theme") 
    applyTheme(savedTheme);

    const savedLang = localStorage.getItem("lang") 
    if (savedLang) applyLang(savedLang);

    document.querySelector("#btn-theme").addEventListener("click", () => {
        const isLight = document.documentElement.classList.contains("theme-light")
        const next = isLight ? "dark" : "light"
        localStorage.setItem("theme", next);
        applyTheme(next)
    })
  document.querySelector("#btn-lang").addEventListener("click", () => {
        const curent = document.documentElement.lang || "fr"
        const next = curent === "fr"? "en": "fr"
        localStorage.setItem("lang", next);
        applyLang(next)
    })
}) ()