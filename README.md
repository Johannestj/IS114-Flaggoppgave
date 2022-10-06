# IS114-Flaggoppgave
## **Prosjektnedbryting**
Basert på boka "Posjektledelse" av Karlsen, s. 89, delte vi oppgaven ned i tre delprosjekter. Vi delte videre inn delprosjektet i å:
1. Bli enige om utseende/struktur/oppsett av prosjektfiler
2. Gjøre research på mulige løsninger innen gitt metode for tegning av flagg 
3. Velge flagg
4. Finne standarddefinisjoner på aktuelle flagg
5. Kode
6. Diskutere problemstillinger med de andre delgruppene
7. Presentere løsninger
8. Godkjenning
9. Skrive i readme-filen
10. Levere

## **Utvikling**
### **Generelt**
Vi har etter oppgaven valgt å dele inn flaggene i 3 HTML-filer, hvor det blir linket til tilhørende eksterne CSS-filer og én JavaScript-fil (canvasflagg). Grunnen til at vi har linket til filene eksternt er (av personlig erfaring) for 1) å ha en mer ryddig kode med tydelig struktur som gjør det lettere å skulle vedlikeholde koden senere, 2) minimere koden som ligger “offentlig” på pages (via “inspect” i browser). Selv om det strengt tatt ikke er nødvendig i et så lite program som dette, kan det likevel ses på som en god rutine å innarbeide seg allerede nå.

Etter anbefaling fra Janis på forelesning, valgte vi å dele gruppa på 7 inn i tre delgrupper. Hver delgruppe valgte hver sin løsningsmetode, for så å skulle presentere sin løsning før merging i GitHub når oppgaven var løst. Dette funket veldig bra, spesielt siden samtlige likevel prøvde seg på alle metodene som selvstudie. Det er i hovedsak én person fra hver delgruppe som har pushet endringer til repositoriet vårt (derav kun 4 dokumenterte bidragsytere på GitHub). Alle var dog tilstedet i det det ble gjort og fikk med seg prosessen.

**Merk:** Mappestrukturen har under prosjektet vært inndelt i en hovedmappe med index.html og tilhørende style.css, hvor de resterende delene ble organisert i undermapper. Dette ble gjort for å holde en god og oversiktlig struktur og funket helt fint i browser, men hadde store utfordringer når det skulle legges ut som en del av GitHub Pages (selv om link-path var korrekt). Vi måtte derfor legge filene uten mappestruktur i vårt repository.

### **GitHub Projects**
Gruppa valgte en template som het “Team backlog”. Vi tok bort kolonnene “New” og “Ready”, da det ikke virket relevant i vårt prosjekt. I “Backlog” la vi til oppgaver som måtte gjøres og flyttet det så over til “In progress” mens det ble jobbet med. Videre ble det lagt inn i kolonnen “In review” så gruppeleder kunne gå gjennom og godkjenne, før de ble lagt over til “Done” når løsningen var godkjent.

Vi jobbet i såkalte sprinter basert på Scrum (Karlsen, 2021, s. 277), hvor delgruppene tok for seg individuelle oppgaver hver for seg og hvor gruppen som en enhet møttes for felles diskusjon og problemløsning etterpå.

Som **konklusjon** vil vi si at måten å jobbe med GitHub Projects var ny for samtlige uten om gruppeleder og det var derfor en liten utfordring å få det til å bli en naturlig del av arbeidsflyten. Men dette er lærdom vi tar med oss videre i neste prosjekt, ved å blant annet være mer nøye med å sjekke og oppdatere project-siden underveis i prosjektet.

### **Fremgangsmåter**

Vi ble enige om at alle skulle bruke heksadesimalfarger. Dette var fordi det ble da likt på tvers av gruppene og det skapte bedre system i koden.  


**Gruppe 1: <p-flagg**
1. Valgte flagg
2. Fant dimensjonene
3. Prøvde å kode hver for oss før vi etterpå diskutert fordeler og ulemper med hverandres løsninger
4. Kodet et endelig resultat basert på konklusjonen vår sammen og la inn offisielle flagg-farger som *hexadecimal*.

**Merk:** Vi har tolket oppgaven som at vi skal style p-taggen ved hjelp av en style-attributt (noe vi har gjort til en viss grad og dermed har vist at vi kjenner til konseptet/metoden), men for å gjøre koden mer oversiktlig og enklere å feilsøke, har vi valgt å style den videre utenfor p-taggen. Dette gjorde vi ved å legge inn de individuelle flaggene i egne div-containere, for å kunne style flaggene uavhengig av hverandre ved hjelp av CSS etterpå. 

**Gruppe 2: CSS-flagg**

1. Valgte flagg 
2. Brukte tid på å utforske koden og finne ut hvordan vi skulle tegne flagg med bruk av CSS.
3. Deretter bestemte vi oss for å lage hvert vårt flagg alene og slå det sammen da vi var ferdig
4. Da flaggene var nesten ferdig, implementerte vi riktig fargekode og dimensjoner til flaggene. I tillegg slo vi sammen flaggene til en html og css fil. 

**Utfordringer:**
1. Typiske skrive feil i koden som tok litt tid å finne og rette på.
2. Vi hadde et problem med å få html filen til å finne og lese CSS filen. Det gikk fint etter litt research da vi lærte hvordan man skulle føre lokasjonen til CSS filen riktig i html filen.
3. Etter vi hadde lastet opp for første gang, så vi på oppgaven at vi skulle bruke <p element istedenfor <div. Da så vi også at vi skulle begrunne hvorfor vi valgte <p class= eller <p id=. Vi googlet og fant ut at "class" passer bedre da man har flere elementer i en html fil. Derfor valgte vi dette, fordi etter vår forståelse hadde vi flere elementer. Dette var lett å fikse, men en god påminnelse om å lese oppgaven nøye og flere ganger.
4. Det oppsto også noen problemer da vi skulle slå sammen koden vår sammen. Siden alle på gruppa vår hadde jobbet på egen maskin var det forskjeller i koden vår. Viktor hadde blant annet brukt intern CSS og hadde ikke separert til en ekstern CSS fil. Derfor måtte dette bli endret slik at det passet hva de andre hadde og oppgaven.
5. Da vi var ferdig med å pushe opp arbeidet vårt til git fikk vi tilbakemelding fra gruppa om at vi kunne gjort noen endringer i koden for å gjøre den litt mer lesbar. Vi hadde definert hver farge på hvert flagg. Vi fikk vite at vi kunne heller ha brukt container for å gi lettere oversikt. Dette er for filen cssFlagg.css


**Gruppe 3: Canvas-flagg**
1. Valgte flagg og fant dimensjonene
2. Utforsket canvas-element metoden for å tegne flagg
3. Tegnet flagg ved bruk av metoden
4. Slo sammen kodene våre i et felles dokument
5. Forandret på deler av koden der vi møtte på problemer

**Utfordringer:**

Selve læringsprosessen gjorde at vi støtte på flere problemer. Canvas-metoden er en mer abstrakt metode som gjør det vanskeligere å lære å kode med det. Utover det hadde vi et problem ved at flagget ikke ville vises selv om vi ikke hadden noen feilmeldinger, og det fungerte på en av våres pc-er, men ikke den andre.

## **Konklusjon** (del 5c)
De ulike metodene brukt for å tegne flagg i HTML har ulike fordeler og ulemper, og egner seg til ulike bruksområder. P-element er en lettvint metode for å tegne flagg med vannrette elementer, men egner seg ikke til mer kompliserte flagg. All koden vil også befinne seg på få linjer, og er satt direkte inn body. CSS gir muligheten for å skille HTML og CSS slik at det blir mer oversiktlig, men som en konsekvens av at koden blir delt, får man ikke alltid nøyaktige feilmeldinger. Canvas lager et definert område som all koden videre vil inngå i. Metoden åpner muligheten for å bruke samme kode flere ganger gjennom å lage funksjoner i javascript. Canvas er også mer egnet til å lage kompliserte flagg, og gir samt flere muligheter. Det vil også gi konkrete feilmeldinger, men det er en mer abstrakt metode som gjør den mer komplisert og vanskelig, alt etter programmeringsferdighetene til koderen.

### **Refleksjon**

Vi fikk veldig god læring spesielt da vi støtte på problemer og fant løsninger. Totalt sett gikk prosessen bra. Selv om vi fikk problemer klarte vi å løse dem og jobbe oss rundt dem. Det var her gruppe samarbeidet kom til gode. Vi lærte også mer om html, css og canvas. I tillegg ble vi bedre kjent med editorene vi brukte. Dette er lærdom som vi vil ta med oss videre.


### **Referanser**
Karlsen, J.T. (5. utgave 2021). *Prosjektledelse – fra initiering til gevinstrealisering*. Universitetsforlaget.

Wikipedia. (Hentet: 2022, 23. september) "Web Colors". Wikipedia. Hentet fra: https://en.wikipedia.org/wiki/Web_colors
