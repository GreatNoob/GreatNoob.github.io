import {LogMessageType, encrypt} from "./ff14";

const fileSelector = document.getElementById('file-selector');
const progress_bar = document.getElementById("parseBar");
const bar = document.getElementById("parseProgress");
const download_button = document.getElementById("downloadFile");

function create_download(filename: string, text: string) 
{
    if (download_button == null) return;
    
    download_button.style.display = 'block';
    download_button.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    download_button.setAttribute('download', filename);
}

function clear_screen()
{
    set_progress_bar(0);

    if (download_button == null) return;
    download_button.style.display = 'none';
}

function set_progress_bar(percentage: number) 
{   
    if (percentage > 1 || percentage < 0) return;

    if (progress_bar == null || bar == null) return;
    
    if (percentage == 0) bar.style.display = "none";
    else bar.style.display = "block";

    progress_bar.style.width = percentage * 100 + "%";
    progress_bar.innerHTML = percentage * 100 + "%";
}

function read_file(file: any, handler: (payload: string) => string) {
    const reader = new FileReader();

    reader.onload = () => {
        let text = reader.result;
        if (text == null) {
            console.log(`file load failed`);
            return;
        }

        const out_content = handler(text.toString());
        create_download(file.name, out_content);
        console.log(out_content.substring(0,100));
    } 
    reader.readAsText(file);
}

function parse_ff_log(payload: string): string
{
    let lines = payload.split('\n');
    let counter = 0; let line_counter = 0;

    let output = "";
    lines.forEach((line_) => {
        let line = line_.trim();
        if (line == '') return;

        let loc1 = line.indexOf('|');
        let loc2 = line.lastIndexOf('|');

        let message_type = Number(line.substring(0, loc1));
        let text = line.substring(0, loc2);
        
        if (message_type == LogMessageType.Version || message_type == LogMessageType.Territory)
            counter = 0;

        ++counter; ++line_counter;

        const encrypted_text = encrypt(`${text}|${counter}`);
        text = `${text}|${encrypted_text}`;

        output += text + '\n';

        set_progress_bar(line_counter/lines.length);
    });
    
    return output;
}

function open_file(event: any) 
{
    read_file(event.target.files[0], parse_ff_log);
}

function main()
{   
    if (fileSelector == null) 
    {
        console.log("fileSelector is null");
        return;
    }
    fileSelector.addEventListener('change', (event) => {
        open_file(event);
    });

    if (download_button == null) 
    {
        console.log("download_button is null");
        return;
    }
    download_button.addEventListener("click", clear_screen);
}

main()