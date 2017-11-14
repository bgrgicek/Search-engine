
var app = angular
.module("instantSearch", [])
.controller('searchFor', function($scope) {

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity.

	var employees = [
		{
			date: "2017-03-20",
			url: "",
			title: "Schrack Info dani",
			tags: "elektrotehnika, fotonapon, elektromobilnost, led, rasvjeta, sponzori",
			image: "http://supeus.hr/wp-content/uploads/2017/03/unnamed.jpg",
			intro: "Po prvi puta u Hrvatskoj tvrtka Schrack Technik poziva učenike i studente na svoje Info dane 2017.   Događanje će se odviti u Zagrebu, 07. Travnja 2017. u 11 h u Gastro Globus prostoru Avenija Dubrovnik 15, Zagreb. U sklopu događanja..."
		},

		{
			date: "2017-03-20",
			url: "",
			title: "Go Green in the City natjecanje",
			tags: "",
			image: "http://supeus.hr/wp-content/uploads/2017/03/GGIC-web.jpg",
			intro: "Rueil-Malmaison (Francuska), 13. ožujka 2017. – Schneider Electric, globalna kompanija specijalizirana za upravljanje energijom i automatizaciju, upravo je sedmu godinu zaredom predstavila natjecanje Go Green in the City. Riječ je o globalnom..."
		},

		{
			date: "2017-02-01",
			url: "",
			title: "[LafargeHolcim Awards] Natječaj za studente",
			tags: "",
			image:"http://supeus.hr/wp-content/uploads/2017/02/A17_940x250_red_Oulkadi.gif?x15113",
			intro: "LafargeHolcim Awards je međunarodno natjecanje u inovativnom pristupu održivoj gradnji. Nagrađuje projekte iz područja arhitekture, građevinarstva, krajobrazne arhitekture i urbanizma, ali i inovacije u području materijala, proizvoda i građevinskih..."
		},

		{
			date: "2016-12-18",
			url: "",
			title: "[Supeus Case Study 2016] Uspješno održan šesti SUPEUS Case Study",
			tags: "",
			image:"http://supeus.hr/wp-content/uploads/2016/12/15356626_1242306892474443_5873364328303961323_n-768x576.jpg",
			intro: "Ove godine SUPEUS je po šesti put uspješno organizirao studentsko natjecanje SUPEUS Case Study. Natjecanje se održavalo od 5. do 9.12. i to kroz tri radionice, na FER-u, FSB-u i Arhitektonskom i Građevinskom fakultetu. Radionice su se sastojale od..."
		},

		{
			date: "2016-11-29",
			url: "",
			title: "[BILI SMO] Posjet Europskom parlamentu u Strassbourg, FR",
			tags: "",
			image:"http://supeus.hr/wp-content/uploads/2016/11/15-e1490175833337.jpg?x15113",
			intro: "Od 21. do 23. studenog SUPEUS je imao priliku posjetiti Europski parlament u Strasbourgu i susresti se s domaćinom Davorom Škrlecom, hrvatskim zastupnikom u Parlamentu. Strasbourg smo posjetili zajedno s udrugama SplitMisli i Europski dom Vukovar te..."
		},

		{
			date: "2016-11-26",
			url: "",
			title: "[SUPEUS Case Study 2016] Otvorene prijave",
			tags: "",
			image:"",
			intro: "PRIJAVE SU OTVORENE DO NEDJELJE, 04.12.2016. DO 23:59 OSIM U SLUČAJU DA SE RANIJE POPUNE MJESTA..."
		},

		{
			date: "2016-11-25",
			url: "",
			title: "[SUPEUS Case Study 2016] Inženjerski koncepti u projektiranju",
			tags: "",
			image:"",
			intro: "SUPEUS ove godine po šesti put organizira natjecanje SUPEUS Case Study koji će se održavati od 5. do 9. prosinca. Tema koja ove godine objedinjuje sve tri radionice je: „Inženjerski koncepti u projektiranju“ Teme i datumi pojedinih radionica te..."
		},

		{
			date: "2016-11-17",
			url: "",
			title: "[SUPEUS] Predstavljanje nove Uprave za ak.god. 2016./17.",
			tags: "uprava",
			image:"images/uprava.jpg",
			intro: "U srijedu, 9. studenog 2016. godine na Arhitektonskom fakultetu održano je svečano predstavljanje nove Uprave udruge SUPEUS. Osim redovnih i pripravnih članova koji su sudjelovali u radu Udruge tijekom protekle akademske godine i samom izboru nove..."
		},

		{
			date: "2016-09-23",
			url: "",
			title: "[INTERDISCIPLINARNI TEČAJ] Otvorene prijave",
			tags: "",
			image:"",
			intro: "Interdisciplinarni tečaj o održivoj prenamjeni i obnovi urbanih prostora   U okviru EU projekta „Compass - COMPetences for Agencies for Sustainable Site conversion”, Društvo za oblikovanje održivog razvoja – DOOR, u suradnji s partnerskim..."
		},

		{
			date: "2016-09-05",
			url: "",
			title: "[POSAO] HEP ESCO d.o.o. traži Pripravnika!",
			tags: "",
			image: "http://supeus.hr/wp-content/uploads/2016/09/hep-esco-logo-20120302150355447-300x168.jpg",
			intro: "HEP ESCO d.o.o. je tvrtka u vlasništvu HEP grupe koja razvija, provodi i financira projekte energetske učinkovitosti na tržišnom utemeljenju. Kratica ESCO, Energy Service Company, u svijetu je prepoznatljiv naziv za tvrtke koje pružaju..."
		},

		{
			date: "2016-06-01",
			url: "",
			title: "[Brave New World] Poziv na konferenciju",
			tags: "",
			image: "",
			intro: "Pozivaju se svi zainteresirani studenti na konferenciju „Brave New World“ (besplatna prijava) koja će se održati 4. lipnja u prostorima HUB385 u Petračićevoj 4 s početkom u 10 sati. Konferencija ugošćuje lidere u području pametnih tehnologija, IoT-a..."
		},

		{
			date: "2016-05-26",
			url: "",
			title: "[SEEDPass] Stručni simpozij",
			tags: "",
			image:"",
			intro: "Poziv na cjelodnevni stručni simpozij u okviru EU sufinanciranog SEEDpass projekta Pozivamo Vas na cjelodnevni stručni simpozij u okviru EU sufinanciranog SEEDpass projekta, koji će se održati 15. lipnja na Građevinskom fakultetu Sveučilišta..."
		},

		{
			date: "2016-05-25",
			url: "",
			title: "[ROCKWOOL] Posjet tvornice u Istri",
			tags: "",
			image:"",
			intro: " Naš partner, tvrtka ROCKWOOL Adriatic i ove godine, već četvrti put zaredom, organizira dan kada pozivaju studente i profesore u posjet njihovoj tvornici, ne samo kako bi se upoznali s proizvodnim procesom i vidjeli stvarna radna okruženja..."
		},

		{
			date: "2016-04-04",
			url: "",
			title: "[BUS 2016] Pregled ovogodišnjeg seminara",
			tags: "",
			image:"",
			intro: "Seminar „Budućnost ugodnog stanovanja - BUS 2016“ Završen je i ovogodišnji, peti po redu, seminar „Budućnost ugodnog stanovanja“. Popunjena dvorana D2 na Fakultetu elektrotehnike i računarstva, dokaz je da je tema realizacije znanosti u industriji..."
		},

		{
			date: "2016-03-25",
			url: "",
			title: "[BUS 2016] Evaluacijski obrazac",
			tags: "",
			image:"",
			intro: "Poštovane kolege, SUPEUS Vam se još jednom zahvaljuje na prisustvovanju na našem 5. po redu cjelodnevnom seminaru BUS 2016 te smo ponosni da Vas je ove godine bilo preko stotinu. Sljedeće godine se vidimo na BUS-u 2017, a prije toga, zamolili..."
		},

		{
			date: "2016-03-24",
			url: "",
			title: "[ROCKWOOL]",
			tags: "",
			image:"",
			intro: "Što moramo naučiti iz požara u Dubaiju? I kakve to veze ima s nama ovdje?   Posljednjih dana dogodilo se nekoliko ozbiljnijih požara, a onaj u Dubaiju djelovao je poput filmske scene. Mnogi su u novogodišnjoj noći sa šampanjcem u ruci u..."
		},

		{
			date: "2016-03-15",
			url: "",
			title: "[BUS 2016] Prijave u tijeku",
			tags: "",
			image:"",
			intro: "„Budućnost ugodnog stanovanja - BUS“ je cjelodnevni besplatni seminar za studente zamišljen kao mjesto okupljanja studenata različitih tehničkih struka, šire akademske zajednice i stručnjaka iz raznih područja znanosti i industrije. Na taj način..."
		},

		{
			date: "2016-03-08",
			url: "",
			title: "[BUS 2016] Otvorene prijave",
			tags: "",
			image:"",
			intro: "„Budućnost ugodnog stanovanja - BUS“ je cjelodnevni besplatni seminar za studente zamišljen kao mjesto okupljanja studenata različitih tehničkih struka, šire akademske zajednice i stručnjaka iz raznih područja znanosti i industrije. Na taj način..."
		},

		{
			date: "2016-02-15",
			url: "",
			title: "[BUS 2016] Budućnost ugodnog stanovanja 2016",
			tags: "",
			image: "",
			intro: "Ideja o organizaciji seminara „Budućnost ugodnog stanovanja - BUS“ javila se prije više od pet godina kao rezultat želje prvih članova Udruge da studentima pruže iskustvo sudjelovanja na stručnim događajima, potpuno besplatno i u okruženju kolega..."
		},

		{
			date: "2015-12-16",
			url: "",
			title: "[SUPEUS CASE STUDY 2015] Uspješno održan 5. SUPEUS Case Study!",
			tags: "",
			image: "",
			intro: "Peti SUPEUS Case Study održan je u prosincu 2015. godine na Arhitektonskom i Građevinskom fakultetu, Fakultetu strojarstva i brodogradnje i Fakultetu elektrotehnike i računarstva pod glavnom temom Projektiraj po principima energetske..."
		},

		{
			date: "2015-12-15",
			url: "",
			title: "[NOVOSTI] Zakorači u svijet poduzetništva",
			tags: "",
			image:"",
			intro: "Zakorači u svijet poduzetništva. Prijavite se na studentsko Business Plan natjecanje i osvojite naprednu edukaciju i mogućnost predinkubacije u Tehnološkom parku Zagreb! S obzirom na sve veće potrebe za razvojem poduzetništva među..."
		},

		{
			date: "2015-12-07",
			url: "",
			title: "[NOVOSTI] Green Building Professional",
			tags: "",
			image:"",
			intro: "Rezervirajte svoje mjesto na vrijeme, educirajte se i postanite GREEN BUILDING PROFESSIONAL. Učite iz primjera vrhunskih svjetskih predavača i postanite stručnjak zelene gradnje. Želite li saznati najnovije informacije o..."
		},

		{
			date: "2015-11-25",
			url: "",
			title: "[SUPEUS CASE STUDY 2015] Otvorene prijave!",
			tags: "",
			image:"",
			intro: "Prijave su zatvorene zbog popunjenih mjesta. Za dodatna pitanja molimo da se obratite na scs@supeus.hr..."
		},

		{
			date: "2015-11-23",
			url: "",
			title: "[SUPEUS CASE STUDY 2015] Projektiraj po principima energetske učinkovitosti",
			tags: "",
			image:"",
			intro: "SUPEUS ove godine po peti put organizira natjecanje SUPEUS Case Study koji će se održavati od 7. do 11. prosinca. Tema koja ove godine objedinjuje sve tri radionice je: „Projektiraj po principima energetske učinkovitosti“. Teme i datumi..."
		},

		{
			date: "2015-11-21",
			url: "",
			title: "[KONFERENCIJE] 9. hrvatski forum o održivoj gradnji",
			tags: "",
			image:"",
			intro: "Dragi studenti i studentice, pozivamo vas da nam se pridružite  28. studenog u 9 sati na 9. Hrvatski forum o održivoj gradnji na temu zelene javne nabave koji će se održat na Građevinskom fakultetu Sveučilišta u Zagrebu. Zašto zelena javna..."
		},

		{
			date: "2015-11-20",
			url: "",
			title: "[KONFERENCIJE] Međunarodna konferencija: „Health & Wellbeing“",
			tags: "",
			image:"",
			intro: "Pozivamo vas na Međunarodnu konferenciju: „Health & Wellbeing“, koja se održava u Zagrebu u hotelu Sheraton, 24. studenog 2015. u organizaciji Hrvatskog savjeta za zelenu gradnju i partnerskih organizacija – Savjeta za zelenu gradnju..."
		},

		{
			date: "2015-10-19",
			url: "",
			title: "[NOVOSTI] Poziv za primanje novih članova",
			tags: "",
			image:"",
			intro: "SUPEUS prima nove članove! Ako želiš i ti postati dio interdisciplinarnog tima i baviti se promicanjem energetske učinkovitosti družeći se sa studentima raznih struka prijavi se na http://supeus.hr/postani-clan. Svoju prijavu možeš poslati zaključno..."
		},

		{
			date: "2015-06-01",
			url: "",
			title: "[PERSPEKTIVA] 3. memorijalni sportski dan ‘Hrvoje Turibak’",
			tags: "",
			image: "",
			intro: "U subotu, 06.06.2015. na Jarunu, održava se 'Perspektiva', odnosno treći memorijalni sportski dan 'Hrvoje Turibak' u spomen na našeg kolegu, prijatelja, poznanika te prvog i počasnog predsjednika SUPEUS-a. Na Jarunu će biti organizirani turniri u..."
		},

		{
			date: "2015-05-29",
			url: "",
			title: "[BILI SMO] Laboratorij za sustave obnovljivih izvora energije (LARES) na FER-u",
			tags: "",
			image: "images/lares.jpg",
			intro : "..."
		},

		{
			date: "2015-05-27",
			url: "",
			title: "[IZ MEDIJA] Članak o Udruzi u novinama ‘Poslovni dnevnik’",
			tags: "",
			image:"images/poslovni.jpg",
			intro: "Studentska udruga koja promiče svijest o održivoj gradnji i energetskoj učinkovitosti   Studentska udruga za promicanje energetske učinkovitosti i savjetovanje je primjer je društveno-korisne inicijative mladih i..."
		},

		{
			date: "2015-05-18",
			url: "",
			title: "[NOVOSTI] Projekt MARATON – Suradnja u razvoju inovacija",
			tags: "",
			image:"http://cirtt.unizg.hr/ea/wp-content/uploads/2015/04/burza-maraton_slika1.png",
			intro: "INFORMATIVNI DAN PROJEKTA MARATON – SURADNJA U RAZVOJU INOVACIJA Sveučilište u Zagrebu 20. svibnja 2015. organizira informativni dan na kojem će se održati panel rasprava o mogućnostima povezivanja studenata, poduzeća i istraživača u razvijanju..."
		},

		{
			date: "2015-04-22",
			url: "",
			title: "[BILI SMO] Zagrebački energetski tjedan & 13. festival znanosti",
			tags: "",
			image:"",
			intro: "Dobrodošli na Zagrebački energetski tjedan! Razvoj ne želimo zaustaviti, ali onečišćenje možemo! \"… Oh, sunca, sunca, sunca! I vonja sa doline i vjetra sa vrhunca!\" uzvikom slavnog barda Vladimira Nazora započnimo 13. festival znanosti. Ima..."
		},

		{
			date: "2015-04-20",
			url: "",
			title: "[BILI SMO] Sajmovi energetske učinkovitosti na ZV-u",
			tags: "",
			image:"http://www.zv.hr/UserDocsImages//headeri/hr/energetika_2015_novo_hr.jpg",
			intro: "Izlagačko-programski sadržaj ovog sajamskog termina daje naglasak na energetski štedljivim tehnologijama i sustavima opremanja objekata te povećavanju svijesti o korištenju energije i topline, energetskoj učinkovitosti i mjerama uštede..."
		},

		{
			date: "2015-04-12",
			url: "",
			title: "[NOVOSTI] Poziv za primanje novih članova",
			tags: "",
			image:"",
			intro: "SUPEUS prima nove članove! Ako želiš i ti postati dio interdisciplinarnog tima i baviti se promicanjem energetske učinkovitosti družeći se sa studentima raznih struka prijavi se na http://supeus.hr/postani-clan Veselimo se novim..."
		},

		{
			date: "2015-03-25",
			url: "",
			title: "[BUS 2015] Evaluacijski obrazac",
			tags: "",
			image:"",
			intro: "..."
		},

		{
			date: "2015-03-24",
			url: "",
			title: "[BUS 2015] Pregled ovogodišnjeg seminara",
			tags: "",
			image:"",
			intro: "U duhu svih dosadašnjih BUS-eva, 14.03.2015. SUPEUS je na Fakultetu strojarstva i brodogradnje održao 4. po redu BUS 2015 pod glavnom temom „Hrvatska i svijet 2030.“. Tijekom cjelodnevnih predavanja, studenti i sudionici su imali priliku dobiti ..."
		},

		{
			date: "2015-03-03",
			url: "",
			title: "[BUS 2015] Budućnost ugodnog stanovanja 2015",
			tags: "",
			image:"http://supeus.hr/wp-content/uploads/2015/11/11011230_840974532607683_3476660040954458650_n.jpg",
			intro: "Drage studentice i studenti, Poštovani partneri i suradnici, U duhu svih dosadašnjih, uspješno održanih BUS-eva u 2012., 2013. i 2014. godini, SUPEUS i ove godine organizira četvrti po redu BUS koji Vam s ponosom..."
		},

		{
			date: "2015-02-28",
			url: "",
			title: "[BUS 2015] Otvorene prijave!",
			tags: "",
			image:"",
			intro: "Ukoliko imate problema s obrascem, pokušajte pristup direktno putem linka: https://podio.com/webforms/10083970/728432..."
		},

		{
			date: "2015-02-22",
			url: "",
			title: "[ČESTITKA] Čestit Božić i uspješna 2015. godina!",
			tags: "",
			image:"http://supeus.hr/wp-content/uploads/2015/02/supeus_cestitka_4a-300x212.jpg",
			intro: "Dragi studenti, suradnici, partneri i prijatelji SUPEUS-a, želimo Vam svima sretan Božić i uspješnu novu 2015. godinu. U novog godini truditi ćemo se biti još aktivniji, kreativniji i uporniji u ostvarivanju zacrtanih ciljeva, povezivanju čitave..."
		},

		{
			date: "2014-12-17",
			url: "",
			title: "[ECO-SANDWICH® CASE STUDY] Na 8. Hrvatskom forumu proglašeni pobjednici",
			tags: "",
			image:"http://supeus.hr/wp-content/uploads/2015/02/CRC_5938-300x200.jpg",
			intro: "6. prosinca 2014. godine na Građevinskom fakultetu održan je, sada već tradicionalni, ”8. Hrvatski forum o održivoj gradnji” gdje se okupilo mnošto poduzetnika, profesora, znanstvenika, ali i studenata koji su se okupili kako bi se informirali o..."
		},

		{
			date: "2014-12-15",
			url: "",
			title: "[SUPEUS CASE STUDY 2014] Proglašeni pobjednici",
			tags: "",
			image:"http://supeus.hr/wp-content/uploads/2016/02/SUPEUS_Case_Study_043.jpg?x15113",
			intro: "U tjednu od 8. do 12.12.2014. održao se četvrti po redu SUPEUS Case Study sa glavnom temom ”Planirajmo energetski učinkovitu budućnost zajedno!”. Tri radionice, na FER-u, FSB-u i Arhitektonskom i Građevinskom fakultetu polučile su velikim interesom..."
		},

		{
			date: "2014-11-25",
			url: "",
			title: "[SUPEUS CASE STUDY 2014] Otvorene prijave",
			tags: "",
			image:"",
			intro: "SUPEUS ove godine, po četvrti put zaredom, organizira SUPEUS Case Study koji će se održavati od 8. do 12. prosinca ove godine. Kao i prethodnih godina, riječ je o tri različite radionice, na Fakultetu elektrotehnike i računarstva, Fakultetu..."
		},

		{
			date: "2014-11-24",
			url: "",
			title: "[ECO-SANDWICH® CASE STUDY] Odabrana tri nabolja rada",
			tags: "",
			image: "http://www.arhitekti.hr/EasyEdit/UserFiles/Novosti/eco-sandwich-case-study/eco-sandwich-case-study-635509043056229531-1_800_600.jpeg",
			intro: "15.11.2014. godine u 17:00 je službeno završilo zaprimanje radova za ECO-SANDWICH® Case Study. Sve radove je pregledala i ocjenila komisija čiji su članovi prof. dr. sc. Ivana Banjad Pečur, prof. dr. sc. Dubravka Bjegović, Ivana Senjak dipl. ing...."
		},

		{
			date: "2014-11-13",
			url: "",
			title: "[ECO-SANDWICH® CASE STUDY] Predstavljanje i početak izrade rješenja",
			tags: "",
			image: "http://www.arhitekti.hr/EasyEdit/UserFiles/Novosti/eco-sandwich-case-study/eco-sandwich-case-study-635509043056229531-1_800_600.jpeg",
			intro : "12.11.2014. u 16:00 na Arhitektonskom fakultetu se okupilo preko 40 studenta Arhitektonskog i Građevinskog fakulteta podijeljenih u 16 timova kako bi čuli i naučili nešto o ECO-SANDWICH® panelima te sudjelovali na Case Study natječaju s ključnim..."
		},

		{
			date: "2014-11-03",
			url: "",
			title: "[NOVOSTI] 7. Dani pasivne kuće u Hrvatskoj",
			tags: "",
			image:"",
			intro: "Od 7.-9. studenog ove godine održati će 7. dani pasivne kuće koji se po prvi puta održavaju ne samo u Zagrebu, već regionalno. Održati će se brojna predavanja zajedničkog programa (skype) i predavanja u pojedinim regionalnim centrima, radionice i..."
		},

		{
			date: "2014-11-02",
			url: "",
			title: "[NOVA UPRAVA] Izabrana i predstavljena nova Uprava",
			tags: "",
			image:"http://supeus.hr/wp-content/uploads/2016/02/20141030_185331.jpg?x15113",
			intro: "U četvrtak 30. listopada 2014. godine na Arhitektonskom fakultetu održano je službeno predstavljanje nove Uprave udruge SUPEUS. Osim redovnih i pripravničkih članova koji su sudjelovali u radu udruge tijekom protekle akademske godine i samom..."
		},

		{
			date: "2014-10-30",
			url: "",
			title: "[ECO-SANDWICH® CASE STUDY] Novi projekt u suradnji s Građevinskim fakultetom",
			tags: "",
			image:"http://www.arhitekti.hr/EasyEdit/UserFiles/Novosti/eco-sandwich-case-study/eco-sandwich-case-study-635509043056229531-1_800_600.jpeg",
			intro: "Novu akademsku godinu obilježit ćemo jednim novim projektom, pomalo drugačijim od dosadašnjih. 12.11.2014. u 16:00h na AGG fakultetu održati će se predstavljanje projekta ECO SANDWICH® Case Study. Naime, riječ je partnerskom projektu udruge..."
		},

		{
			date: "2015-04-20",
			url: "",
			title: "[BILI SMO] Sajmovi energetske učinkovitosti na ZV-u",
			tags: "",
			image:"http://www.zv.hr/UserDocsImages//headeri/hr/energetika_2015_novo_hr.jpg",
			intro: "Izlagačko-programski sadržaj ovog sajamskog termina daje naglasak na energetski štedljivim tehnologijama i sustavima opremanja objekata te povećavanju svijesti o korištenju energije i topline, energetskoj učinkovitosti i mjerama uštede..."
		},

		{
			date: "2014-06-20",
			url: "",
			title: "[BILI SMO] Otvoren Laboratorij za energetsku učinkovitost – FSB",
			tags: "",
			image:"http://supeus.hr/wp-content/uploads/2015/05/10500435_716337875071350_3622956301289508673_n.jpg",
			intro: "17. lipnja prisustvovali smo svečanom otvorenju Laboratorija za energetsku učinkovitost na Fakultetu stojarstva i brodogradnje pod vodstvom dr.sc.Tee Žakule čije ste predavanje mogli poslušati na SUPEUS-ovom seminaru Budućnost ugodnog stanovanja..."
		},

		{
			date: "2014-06-16",
			url: "",
			title: "[PRIZNANJE] SUPEUS dobitnik ‘Croatian Energy Award’ 2014",
			tags: "",
			image:"http://supeus.hr/wp-content/uploads/2015/03/10151980_714550738583397_7599873534025452286_n.jpg",
			intro: "Savez za energetiku Hrvatske, inače nositelj dodjele godišnje \"Nagrade za razvoj hrvatskog zelenog gospodarstva\" (u 2014. godini nagrada je dodijeljena treću godinu za redom) i godišnje \"Nagrade za kreativne i inovativne programe u turizmu s..."
		},

		{
			date: "2014-04-01",
			url: "",
			title: "[BUS 2014] Uspješno završen 3. po redu cjelodnevni seminar",
			tags: "",
			image:"http://supeus.hr/wp-content/uploads/2016/02/20140329_supeus_d_bruno_vunderl_52.jpg?x15113",
			intro: "Završen je i ovogodišnji seminar „Budućnost ugodnog stanovanja“. Puna dvorana D1 na Fakultetu elektrotehnike i računarstva, dokaz je da je tema integracije obnovljivih izvora energije itekako aktualna i prepoznata među studentskom populacijom. 250..."
		},
	];

	$scope.employees = employees;

	$scope.search = function (item) {
		if($scope.searchString == undefined) {
			return true;
		}
		else {
			if(item.title.toLowerCase().indexOf($scope.searchString.toLowerCase()) != -1 ||
				item.tags.toLowerCase().indexOf($scope.searchString.toLowerCase()) != -1 ||
				item.date.toLowerCase().indexOf($scope.searchString.toLowerCase()) != -1)
			{
				return true;
			}
		}

		return false;
	}
});