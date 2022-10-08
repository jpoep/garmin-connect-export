# garmin-connect-export

## Deutsch

Ein einfaches Script, um alle Garmin-Connect-Aktiviäten (<https://connect.garmin.com/modern/activities>) als .zip, .tcx oder .gpx-Dateien herunterzuladen. Es wird direkt in den Entwicklertools des Browsers ausgeführt, weil das (so doof es klingt) wohl der unkomplizierteste Weg ist, das zu erreichen.

### Wie das Script zu benutzen ist

Gehe auf <https://connect.garmin.com> und logge dich mit deinem Garmin-Account ein. Anschließend öffnest du deine Entwicklertools, indem du F12 drückst (in Chrome/Edge/Firefox/etc.; in Safari müssen die Entwicklertools erst in den Einstellungen aktiviert werden) und klickst auf den Konsolen-Tab. Kopiere nun den ganzen Inhalt aus `garmin-connect-export.js` und füge ihn in die Konsole ein. Firefox könnte dir eine Warnung geben, dass du nicht einfach kopierte Scripte aus dem Internet ausführen sollst. Tu einfach, was da steht, um diese Sicherheitsmaßnahme aufzuheben. Anschließend drückt man Enter, um alle konfigurierten Aktiviäten direkt in den Downloads-Ordner zu laden.

### Konfiguration

2 Dinge können konfiguriert werden:

- Aktivitäten welcher Jahre gedownloaded werden sollen
- Welches Dateiformat heruntergeladen wird

Relativ weit oben im Script findest du drei `const`s, die angepasst werden können.

- `yearFrom` ist das älteste Jahr, aus dem Aktivitäten geladen werden
- `yearTo` ist das neuste Jahr
- Der Standard bedeutet, dass alle Aktivitäten von 2020 bis 2022 heruntergeladen werden
- `fileFormat` kann entweder `zip`, `tcx` oder `gpx` sein

### Das Script nochmal ausführen

Wenn irgendwas schief läuft, kann der Download neugestartet werden, indem man einfach `downloadActivities()` in die Konsole eintippt. Wenn aber Konfigurationen geändert werden sollen, muss die Seite komplett neugeladen werden und das ganze Script noch einmal eingefügt werden.

## English

A simple script to download your Garmin Connect Activites (<https://connect.garmin.com/modern/activities>) as .zip, .tcx, or .gpx files. It is meant to be executed in your browser's console because it's just the easiest and quickest way.

### How to use the script

Navigate to <https://connect.garmin.com> and log in with your Garmin account. Then, open your browser's developer tools using the F12 key (works in Chrome/Edge/Firefox/etc.; in Safari, you need to enable it in your preferences first). After that, navigate to the console tab and paste the code from `garmin-connect-export.js`. Firefox might give you a warning to not execute pasted code. Follow the instructions it gives you to enable pasting. Then, hit enter and it should start downloading all of your activities to your downloads folder. 

### Configuration

You can customize 2 things: 

- Which years to download activities from
- The file format of the downloads

Look near the top of the script to customize the first three `const`s. 

- `yearFrom` is the oldest year to download your activites from
- `yearTo` is the latest year to download your activities from
- The default means that all activities from 2020 and 2022 will be downloaded.
- `fileFormat` can be either `zip`, `tcx`, or `gpx`

### Re-running the script

In case something goes wrong, you can restart the download by typing `downloadActivites()` in your console. If you need to change any parameters, you must refresh the page and re-paste the entire script. 
