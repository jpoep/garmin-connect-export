/*
A modified version of another pastebin snippet for bulk exporting Garmin data by an unkown author: https://pastebin.com/YN6Gex5R

Here's JavaScript that can be run in any modern browser fairly simply in JavaScript. Might be easier to set up than Python. 
 
You'll want to pre-set a download location in your browser settings to some folder, name it TCX or something, and tell your browser to auto-download there, or else you'll get a ton of popup save dialogs.
 
First Navigate to the last (most recent) activity you have in Garmin Connect (as in https://connect.garmin.com/modern/activity/5555555555 ), then hit F12 (should work in Chrome/Edge/Firefox; Safari is a little more complicated) to open dev tools to get to the JavaScript Console. Then paste the below code and hit enter to run it.
If you want a different format, change the variable "fileFormat" to the appropriate format acronym if garmin supports it.
 
It goes from most recent back downloading each one.

Added improvments: 
-------------------------
* The script no longer stops if you hit a dead download link. This was always the case for manually added activities. 
* No more wait time between individual downloads. The next download starts as soon as it gets Garmin's next activityId.
* Status updates are printed to the console.
* You don't have to specify how many files you want to get. It just stops if it has them all.
* Downloads zip archives with the source data by default. Change `fileFormat` if you want something else.
* The script is no longer dependent on JQuery. 
 
[CODE]*/
const fileFormat = 'zip' // also possible: tcx, gpx - not really sure what else. Zip is the safest bet, as it just downloads the source format.

const allActivitiesUrl = "https://connect.garmin.com/modern/proxy/activitylist-service/activities/search/activities";
const activityUrl = activityId => `https://connect.garmin.com/modern/proxy/activity-service/activity/${activityId}`
const downloadUrl = activityId => fileFormat === 'zip' ? `https://connect.garmin.com/modern/proxy/download-service/files/activity/${activityId}`
                                                       : `https://connect.garmin.com/modern/proxy/download-service/export/${fileFormat}/activity/${activityId}`

const headeredFetch = async (url) => fetch(url, {headers: {"NK": "NT"}});

const printStatusUpdate = activity => {
    let date = new Date(activity.startTimeLocal);
    console.log(`Downloading ${activity.activityId}... (${activity.activityName}, ${date.toLocaleDateString()})`)
}

const downloadFile = (url, filename) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
}
 
const downloadActivities = async () => {
   const allActivites = await ((await headeredFetch(allActivitiesUrl)).json());
    allActivites.forEach(activity => {
        printStatusUpdate(activity)
        try {
            downloadFile(downloadUrl(activity.activityId), `activity_${activity.activityId}.${fileFormat}`);
        } catch(e) {
            console.warn(`Activity ${activity.activityId} (${activity.activityName}) couldn't be downloaded and was skipped.`);
            console.warn("If you care why: ", e)
        }
    })
}

downloadActivities();

/*[/CODE]*/
