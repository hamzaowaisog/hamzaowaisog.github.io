let current_index = 0;
let current_category;

async function fetch_data(category,index){
    try{

        const response = await fetch('data.json');
        const jsondata = await response.json();

        var heading = document.getElementById('html_heading');
        var para = document.getElementById('html_para');
        var video = document.getElementById('youtube_video');

        current_index = index;
        current_category = category;
        
        document.getElementById('Previous_button').onclick=next_option;
        document.getElementById('next_button').onclick=prev_option;

        heading.textContent = jsondata[category][index].topic;
        para.textContent = jsondata[category][index].data;
        video.src = jsondata[category][index].link;
    }
    catch (error) {
        console.error('Error:', error);

    }

}
async function prev_option(){
    try {
        const response = await fetch('data.json');
        const jsondata = await response.json();
        const totalitems = jsondata[current_category].length;
        current_index = (current_index + 1) % totalitems;
        await fetch_data(current_category, current_index);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function next_option(){
    try {
        const response = await fetch('data.json');
        const jsondata = await response.json();
        const totalitems = jsondata[current_category].length;
        current_index = (current_index - 1 + totalitems) % totalitems;
        await fetch_data(current_category, current_index);
    } catch (error) {
        console.error('Error:', error);
    }
}
async function nextv_option(current_category,current_index){
    try {
        const response = await fetch('data.json');
        const jsondata = await response.json();
        const totalitems = jsondata[current_category].length;
        current_index = (current_index + 1) % totalitems;
        await fetch_data(current_category, current_index);
        document.getElementById('Previous_button').onclick=next_option;
        document.getElementById('next_button').onclick=prev_option; 
    } catch (error) {
        console.error('Error:', error);
    }
}

async function prevv_option(current_category,current_index){
    try {
        const response = await fetch('data.json');
        const jsondata = await response.json();
        const totalitems = jsondata[current_category].length;
        current_index = (current_index - 1 + totalitems) % totalitems;
        await fetch_data(current_category, current_index);
        document.getElementById('Previous_button').onclick=next_option;
        document.getElementById('next_button').onclick=prev_option;
    } catch (error) {
        console.error('Error:', error);
    }
}