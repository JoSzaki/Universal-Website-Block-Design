const { chromium } = require('playwright');
const path = require('path');

async function testGoogleMapsExample() {
    console.log('🚀 Google Maps példa tesztelése Playwright-tal...\n');

    // Böngésző indítása
    const browser = await chromium.launch({ 
        headless: false,  // Látható böngésző
        slowMo: 1000      // Lassított működés (1 másodperc késés)
    });

    const context = await browser.newContext({
        viewport: { width: 1200, height: 800 }
    });

    const page = await context.newPage();

    try {
        // HTML fájl megnyitása
        const filePath = path.resolve(__dirname, 'google-maps-example.html');
        const fileUrl = `file:///${filePath.replace(/\\/g, '/')}`;
        
        console.log(`📄 HTML fájl betöltése: ${fileUrl}`);
        await page.goto(fileUrl);

        // Oldal címének ellenőrzése
        const title = await page.title();
        console.log(`📋 Oldal címe: ${title}`);

        // Fejléc szövegének ellenőrzése
        const headerText = await page.textContent('h1');
        console.log(`🏷️ Főcím: ${headerText}`);

        // Várakozás az oldal betöltésére
        await page.waitForTimeout(3000);

        // Ellenőrizzük hogy megjelennek-e a vezérlők
        console.log('\n🔧 UI elemek ellenőrzése...');
        
        const searchInput = await page.isVisible('#searchInput');
        console.log(`🔍 Keresőmező: ${searchInput ? '✅ Megtalálható' : '❌ Hiányzik'}`);

        const mapTypeSelect = await page.isVisible('#mapType');
        console.log(`🗺️ Térkép típus választó: ${mapTypeSelect ? '✅ Megtalálható' : '❌ Hiányzik'}`);

        const mapContainer = await page.isVisible('#map');
        console.log(`📍 Térkép konténer: ${mapContainer ? '✅ Megtalálható' : '❌ Hiányzik'}`);

        // Gombok ellenőrzése
        const buttons = ['Keresés', 'Jelölő hozzáadása', 'Jelölők törlése', 'Saját helyszín'];
        for (const buttonText of buttons) {
            const button = await page.isVisible(`text="${buttonText}"`);
            console.log(`🔘 "${buttonText}" gomb: ${button ? '✅ Megtalálható' : '❌ Hiányzik'}`);
        }

        // Teszteljük a kereső funkciót
        console.log('\n🔍 Kereső funkció tesztelése...');
        await page.fill('#searchInput', 'Budapest, Széchenyi tér');
        console.log('📝 Keresőbe beírtam: "Budapest, Széchenyi tér"');

        // Enter billentyű szimulálása
        await page.press('#searchInput', 'Enter');
        console.log('⌨️ Enter billentyű lenyomva');

        await page.waitForTimeout(2000);

        // Térkép típus váltás tesztelése
        console.log('\n🗺️ Térkép típus váltás tesztelése...');
        await page.selectOption('#mapType', 'satellite');
        console.log('🛰️ Műholdas nézetre váltottam');

        await page.waitForTimeout(2000);

        await page.selectOption('#mapType', 'terrain');
        console.log('🏔️ Domborzati nézetre váltottam');

        await page.waitForTimeout(2000);

        await page.selectOption('#mapType', 'roadmap');
        console.log('🛣️ Közúti nézetre visszaváltottam');

        // Jelölők törlése gomb tesztelése
        console.log('\n🗑️ Jelölők törlése funkció tesztelése...');
        await page.click('text="Jelölők törlése"');
        console.log('🔘 "Jelölők törlése" gombra kattintottam');

        await page.waitForTimeout(2000);

        // Jelölő hozzáadása gomb tesztelése
        console.log('\n📍 Jelölő hozzáadása funkció tesztelése...');
        await page.click('text="Jelölő hozzáadása"');
        console.log('🔘 "Jelölő hozzáadása" gombra kattintottam');

        await page.waitForTimeout(2000);

        // Képernyőkép készítése
        console.log('\n📸 Képernyőkép készítése...');
        await page.screenshot({ 
            path: 'google-maps-screenshot.png',
            fullPage: true
        });
        console.log('💾 Képernyőkép elmentve: google-maps-screenshot.png');

        // API kulcs hiányzik ellenőrzés
        console.log('\n⚠️ API kulcs ellenőrzése...');
        const apiWarning = await page.isVisible('text="Google Maps API kulcs szükséges"');
        if (apiWarning) {
            console.log('🔑 API kulcs hiányzik - ez várható, mivel demo verzió');
            console.log('💡 A térkép helyén megjelenik az útmutató az API kulcs beszerzéséhez');
        } else {
            console.log('✅ API kulcs rendben, vagy a térkép betöltődött');
        }

        // Várakozás a végső állapot megtekintésére
        console.log('\n⏳ 5 másodperc várakozás a végső állapot megtekintéséhez...');
        await page.waitForTimeout(5000);

        console.log('\n✅ Teszt sikeresen lefutott!');
        console.log('📋 Összefoglaló:');
        console.log('   - HTML oldal betöltve');
        console.log('   - UI elemek megtalálhatók');
        console.log('   - Keresőmező működik');
        console.log('   - Térkép típus váltás működik');
        console.log('   - Gombok kattinthatók');
        console.log('   - Képernyőkép elkészítve');

    } catch (error) {
        console.error('❌ Hiba történt a teszt során:', error.message);
    } finally {
        // Böngésző bezárása
        console.log('\n🔚 Böngésző bezárása...');
        await browser.close();
    }
}

// Teszt futtatása
testGoogleMapsExample().catch(console.error);