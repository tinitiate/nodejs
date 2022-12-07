// import { YoutubeMp3Downloader } from "youtube-mp3-downloader"

function yt2mp3(p_yt_url,p_file_name) {
    var YoutubeMp3Downloader = require("youtube-mp3-downloader");
    
    //Configure YoutubeMp3Downloader with your settings
    var YD = new YoutubeMp3Downloader({
        "ffmpegPath": "E:/code/CODING_NodeJS/youtube2mp3/ffmpegbin/ffmpeg.exe",        // FFmpeg binary location
        "outputPath": "E:/code/CODING_NodeJS/youtube2mp3/lib/",    // Output file location (default: the home directory)
        "youtubeVideoQuality": "highestaudio",                     // Desired video quality (default: highestaudio)
        "queueParallelism": 2,                                     // Download parallelism (default: 1)
        "progressTimeout": 2000,                                   // Interval in ms for the progress reports (default: 1000)
        "allowWebm": false                                         // Enable download from WebM sources (default: false)
    });

    //Download video and save as MP3 file
    // YD.download("Vhd6Kc4TZls");
    YD.download(p_yt_url, p_file_name);

    YD.on("finished", function(err, data) {
        console.log(JSON.stringify(data));
    });

    YD.on("error", function(error) {
        console.log(error);
    });

    YD.on("progress", function(progress) {
        console.log(JSON.stringify(progress));
    });
}

yt2mp3('2zToEPpFEN8','SAINt JHN - Roses (Imanbek Remix).mp3');
